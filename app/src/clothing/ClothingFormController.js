import angular from 'angular';

export default ClothingFormController;

ClothingFormController.$inject = ['$mdDialog', '$log']

function ClothingFormController($mdDialog, $log) {

    this.categories = [
        {id: 1, name: 'Shirt'},
        {id: 2, name: 'Pullover'},
        {id: 3, name: 'Jacke'},
        {id: 4, name: 'Hemd'},
        {id: 5, name: 'Polo'},
    ];
    this.category = this.categories[2];

    this.possibleCharacteristic = [
        {name: 'V-Ausschnitt'},
        {name: 'Sport'},
        {name: 'Lalal'},
        {name: 'Matlab'}
    ]
    this.characteristics = [];
    this.characteristic = {};
    this.characteristicSearch = 'ALalal';
    this.findCharacteristic = (search) => {
        $log.debug(search);
        return search ? this.possibleCharacteristic.filter((c) => {
            return c.name.indexOf(search) >= 0
        }) : [];
    }
    this.mapCharacteristic = (c) => {
        return c;
    };

    this.ok = () => {
        $mdDialog.hide();
    };
    this.cancel = () => {
        $mdDialog.cancel();
    };

}