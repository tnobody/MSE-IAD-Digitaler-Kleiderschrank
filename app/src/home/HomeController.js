export default HomeController;

HomeController.$inject = []

function HomeController() {
    this.categories = [
        {name: 'Accesoires', flex:"auto"},
        {name: 'Kopf', flex:"auto"},
        {name: 'Oberbekleidung', flex:"grow"},
        {name: 'Hosen', flex:"auto"},
        {name: 'Kopf', flex:"auto"},
    ];
}