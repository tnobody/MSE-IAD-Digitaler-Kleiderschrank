import ClothingFormModal from 'src/clothing/ClothingFormModal';
import SchubladenCard from 'src/home/SchubladenCard';
export default function CreateAngularContext(app) {
    app.service('ClothingFormModal',ClothingFormModal)
    app.directive('schubladenCard', SchubladenCard)
    return app;
}