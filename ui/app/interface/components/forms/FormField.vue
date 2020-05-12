<template>
    <v-row>
        <v-col cols="12"
               sm="12"
               md="12">
            <div class="form-group">
                <component :is="autoField.componentName"
                           v-bind="autoField.props"
                           @change="updateValue($event)" />
            </div>
        </v-col>
    </v-row>
</template>

<script>
import pluralize from 'pluralize';

export default {
    props: {
        fieldName: {
            type: String,
            required: true
        },

        field: {
            type: Object,
            required: true
        }
    },

    computed: {
        autoField() {
            let result = {
                componentName: null,
                props: {
                    value: null,
                    label: this.inputLabel,
                    validator: this.field.type.validator
                }
            };

            /* if(this.field.type.name === 'string' && this.field.enumKey) {
                result.componentName = 'input-selector';
                result.props['enumKey'] = this.field.enumKey;
            }

            else*/
            if(this.field.type.name === 'string') {
                result.componentName = 'input-text';
            }

            result.props.value = this.field.value;

            return result;
        },

        getEndpointFromFieldName() {
            let entity = pluralize(this.fieldName.replace('_id', ''));
            return `/api/${entity}`;
        },

        inputLabel() {
            return Trans.fieldDescriptor(`${this.$parent.entityName}.${this.fieldName}--label`);
        }
    },

    methods: {
        updateValue($event) {
            this.$parent.$parent.$emit(`FormField--change`, { value: $event, name: this.fieldName });
        }
    }

};
</script>
