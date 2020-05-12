export default class UtilsService {
    capitalize(string) {
        return string.replace(/^./, string[0].toUpperCase());
    }
}
