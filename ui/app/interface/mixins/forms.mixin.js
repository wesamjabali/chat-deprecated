export default {

    props: {
        entityId: {
            type: Number,
            required: false
        },

        action: {
            type: String,
            validator: value => {
                let actions = [
                    'create',
                    'update',
                    'delete'
                ];

                return actions.includes(value);
            }
        }
    },

    data() {
        return {
            hasValidationErrors: false,
            MutatorInstance: null,

            mutatorNames: {},

            QueryInstance: null,
            Response: null
        };
    },

    beforeDestroy() {
        this.$root.$off('formSubmissionAttempt', this.submit);
        this.$root.$off('FormField--change');
        this.tearDownMutator();
    },

    created() {
        this.setMutator();

        this.$root.$on('formSubmissionAttempt', this.submit);

        this.$on('FormField--change', payload => {
            this.MutatorInstance.setStructureValue(payload.name, payload.value);
        });

        if(this.action ==='update') {
            this.QueryInstance.first().then(Response => {
                this.Response = Response.getData();
                this.setValuesForUpdateForm(this.Response);
            });
        }
    },

    computed: {
        computedClasses() {
            let result = [];

            if(this.hasValidationErrors) {
                result.push(...[
                    'needs-validation',
                    'was-validated'
                ]);
            }

            return result;
        },

        parentComponent() {
            return this.$parent;
        },

        inModal() {
            return this.parentComponent.$options.name === 'Modal';
        },

        parentModalName() {
            return this.parentComponent.modalName;
        },

        getMutatorForAction() {
            return this.mutatorNames[this.action];
        }
    },

    methods: {
        setValidationErrors(errors) {
            _.each(errors, errorObj => {
                this.$refs[`${errorObj.fieldName}_errors`].innerText = errorObj.errorMessages;
            });
        },

        setMutator() {
            this.MutatorInstance = Make.Mutator(this.getMutatorForAction, this.entityId);

            if(this.action === 'update') {
                this.QueryInstance = new Query(`/api/${this.MutatorInstance.entity}/${this.entityId}`);
            }
        },

        submit() {
            if(this.MutatorInstance) {
                this.MutatorInstance.submit().then(Response => {
                    if(Response.hasErrors()) {
                        this.hasValidationErrors = true;
                        this.setValidationErrors(Response.errors());
                    }
                    else {
                        if(this.inModal) {
                            this.closeParentModal();
                        }
                    }
                });
            }
            else {
                throw new Error('Mutator Instance Not Set');
            }

        },

        setValuesForUpdateForm(Response) {
            _.each(Response, (value, fieldName) => {
                if(fieldName !== 'id') {
                    this.MutatorInstance.setStructureValue(fieldName, value);
                }
            });
        },

        tearDownMutator() {
            _.each(this.MutatorInstance.structure, (fieldValue, fieldName) => {
                this.MutatorInstance.setStructureValue(fieldName, null);
            });
        },

        closeParentModal() {
            let modal = this.findParentComponent('Modal');
            if(modal) {
                modal.close();
            }
        }
    }

};
