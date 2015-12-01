import ClothingFormController from 'src/clothing/ClothingFormController'
import angular from 'angular';
ClothingFormController.$inject = ['$mdDialog', '$mdMedia'];
export default function ClothingFormModal($mdDialog, $mdMedia) {
    return {
        show: (e) => {
            console.log(e);
            return $mdDialog
                .show({
                    controller: ClothingFormController,
                    controllerAs: 'self',
                    templateUrl: 'src/clothing/modal.html',
                    parent: angular.element(document.body),
                    fullscreen: true,
                    targetEvent: e,
                    clickOutsideToClose: true,
                    openFrom: angular.element(e.srcElement),
                    closeTo: angular.element(e.srcElement)
                })
        }
    }
}