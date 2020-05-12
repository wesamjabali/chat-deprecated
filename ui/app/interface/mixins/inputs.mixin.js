export default {
    props: {
        value: {
            required: true
        },
        label: {
            type: String,
            required: true
        },
        validator: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            input: null
        };
    },

    beforeDestroy() {
        this.input = null;
    },

    created() {
        this.input = this.value;
    },

    watch: {
        value: {
            handler(newValue) {
                this.input = newValue;
                this.$emit('change', this.input);

            }
        },

        input: {
            handler() {
                this.$emit('change', this.input);
            }
        }
    }
};
