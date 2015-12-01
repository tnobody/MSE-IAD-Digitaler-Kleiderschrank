export default HomeController;

HomeController.$inject = ['$log', 'ClothingFormModal']

function HomeController($log, clothingFormModal) {
    this.categories = [
        {
            name: 'Accesoires',
            images: [
                'assets/amazon/Accessoires/Accessoires1.jpg',
                'assets/amazon/Accessoires/Accessoires2.jpg',
                'assets/amazon/Accessoires/Accessoires3.jpg',
            ]
        },
        {
            name: 'Kopf',
            images: [
                'assets/amazon/Kopfbedeckung/Download.jpg',
                'assets/amazon/Kopfbedeckung/Haube1.jpg',
                'assets/amazon/Kopfbedeckung/Haube2.jpg',
            ]
        },
        {
            name: 'Oberbekleidung',
            images: [
                'assets/amazon/Oberbekleidung/T-Shirt1.jpg',
          //      'assets/amazon/Oberbekleidung/T-Shirt2.jpg',
          //      'assets/amazon/Oberbekleidung/T-Shirt3.jpg',
                'assets/amazon/Oberbekleidung/hemad.jpg',
                'assets/amazon/Oberbekleidung/hemd.jpg',
                'assets/amazon/Oberbekleidung/hoody.jpg',
                'assets/amazon/Oberbekleidung/mantel.jpg',
                'assets/amazon/Oberbekleidung/trikot.jpg',
                'assets/amazon/Oberbekleidung/polo.jpg',

            ]
        },
        {
            name: 'Hosen',
            images: [
                'assets/amazon/Hosen/Hose1.jpg',
                'assets/amazon/Hosen/Hose2.jpg',
                'assets/amazon/Hosen/Hose3.jpg',
            ]
        },
        {
            name: 'Schuhe',
            images: [

                'assets/amazon/Schuhe/Schuhe1.jpg',
                'assets/amazon/Schuhe/Schuhe2.jpg',
                'assets/amazon/Schuhe/Schuhe3.jpg',
            ]
        },
    ];


}