export default HomeController;

HomeController.$inject = ['$log','ClothingFormModal']

function HomeController($log,clothingFormModal) {
    this.categories = [
        {name: 'Accesoires', flex: "50"},
        {name: 'Kopf', flex: "50"},
        {name: 'Oberbekleidung', flex: "100"},
        {name: 'Hosen', flex: "50"},
        {name: 'Schuhe', flex: "50"},
    ];

    this.showClothingFormModal = () => {
        console.log('Test',clothingFormModal)
        clothingFormModal
            .show()
            .then(() => {
                $log.debug('Success')
            });
    }
}