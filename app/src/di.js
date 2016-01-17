import ClothingFormModal from 'src/clothing/ClothingFormModal';
import SchubladenCard from 'src/home/SchubladenCard';
import RecommandationFormModal from 'src/recommandation/RecommandationFormModal';
export default function CreateAngularContext(app) {
    app.service('ClothingFormModal',ClothingFormModal)
    app.directive('schubladenCard', SchubladenCard)
    app.service('RecommandationFormModal', RecommandationFormModal)
    return app;
}