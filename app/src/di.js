import ClothingFormModal from 'src/clothing/ClothingFormModal';
export default function CreateAngularContext(app) {
    app.service('ClothingFormModal',['$mdDialog',ClothingFormModal])

    return app;
}