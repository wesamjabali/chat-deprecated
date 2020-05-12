import RealtimeService from '../resources/services/RealtimeService';
import MakeService from '../resources/services/MakeService';
import DataTypesService from '../resources/services/DataTypesService';
import ValidatorService from '../resources/services/ValidatorService';
import TranslationService from '../resources/services/TranslationSevice';
import UtilsService from '../resources/services/UtilsService';

window.Make = new MakeService();
window.Realtime = new RealtimeService();
window.DataTypes = new DataTypesService();
window.Validator = new ValidatorService();
window.Trans = new TranslationService();
window.Utils = new UtilsService();
