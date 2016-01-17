import angular from 'angular';

export default ClothingFormController;

ClothingFormController.$inject = ['$mdDialog', '$log']

function ClothingFormController($mdDialog, $log) {



    this.ok = () => {
        $mdDialog.hide();
    };
    this.cancel = () => {
        $mdDialog.cancel();
    };


}