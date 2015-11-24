export default HomeController;

HomeController.$inject = ['$log','ClothingFormModal']

function HomeController($log,clothingFormModal) {
    this.categories = [
        {name: 'Accesoires', flex: "45"},
        {name: 'Kopf', flex: "45"},
        {name: 'Oberbekleidung', flex: "95"},
        {name: 'Hosen', flex: "45"},
        {name: 'Schuhe', flex: "45"},
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