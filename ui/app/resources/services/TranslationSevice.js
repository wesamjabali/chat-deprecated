import fieldDescriptors from '../../lang/fieldDescriptors';

export default class TranslationService {
    constructor() {
        this.fieldDescriptors = fieldDescriptors;
    }

    fieldDescriptor(key) {
        return _.get(this.fieldDescriptors, key);
    }
}
