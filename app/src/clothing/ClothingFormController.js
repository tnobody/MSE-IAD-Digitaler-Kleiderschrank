import angular from 'angular';

export default ClothingFormController;

ClothingFormController.$inject = ['$mdDialog', '$log']

function ClothingFormController($mdDialog, $log) {

    this.categories = [
        {id: 1, name: 'T-Shirt'},
        {id: 2, name: 'Pullover'},
        {id: 3, name: 'Jacke'},
        {id: 4, name: 'Hemd'},
        {id: 5, name: 'Polo'},
    ];

    this.colors = [
        {name: 'Schwarz',code: '#000000'},
        {name: 'Grau', code: '#888888'},
        {name: 'Weiß', code: '#FFFFFF'},
        {name: 'Rot', code: '#FF0000'},
        {name: 'Dunkelrot', code: '#880000'},
        {name: 'Grün', code: '#00FF00'},
        {name: 'Dunkelgrün', code: '#008800'},
        {name: 'Blau', code: '#0000FF'},
        {name: 'Dunkelblau', code: '#000088'},
        {name: 'Cyan', code: '#00FFFF'},
        {name: 'Dunkelcyan', code: '#008888'},
        {name: 'Magenta', code: '#FF00FF'},
        {name: 'Dunkelmagenta', code: '#880088'},
        {name: 'Gelb', code: '#FFFF00'},
        {name: 'Dunkelgelb', code: '#888800'},
        {name: 'Blaugrün', code: '#00FF88'},
        {name: 'Himmelblau', code: '#0088FF'},
        {name: 'Rosé', code: '#FF0088'},
        {name: 'Violett', code: '#8800FF'},
        {name: 'Orange', code: '#FF8800'},
        {name: 'Gelbgrün', code: '#88FF00'},
    ].sort((c) => c.name);

    this.category = this.categories[2];

    /* Merkmale */
    this.possibleCharacteristic = [
        {name: 'V-Ausschnitt'},
        {name: 'Sport'},
        {name: 'Lalal'},
        {name: 'Matlab'}
    ]
    this.characteristics = [];
    this.characteristic = {};
    this.characteristicSearch = '';
    this.findCharacteristic = (search) => {
        return search ? this.possibleCharacteristic.filter((c) => {
            return c.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
        }) : [];
    }

    this.mapCharacteristic = (c) => {
        return c;
    };

    /* Weitere farben */
    this.additionalColors = [];
    this.additionalColor = {};
    this.additionalColorSearch = '';
    this.findColors = (search) => {
        return search ? this.colors.filter((c) => {
            return c.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
        }) : [];
    }

    this.mapColor = (c) => {
        return c;
    };

    this.ok = () => {
        $mdDialog.hide();
    };
    this.cancel = () => {
        $mdDialog.cancel();
    };


}