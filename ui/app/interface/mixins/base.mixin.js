export default {
    methods: {
        findParentComponent(componentName) {
            let result;

            let traverse = component => {
                if(!component) {
                    return;
                }

                if(component.$options.name === componentName) {
                    result = component;
                }
                else {
                    traverse(component.$parent);
                }
            };

            traverse(this.$parent);

            return result;

        }
    }
};
