import ClothingFormController from 'src/clothing/ClothingFormController'
import angular from 'angular';
ClothingFormController.$inject = ['$mdDialog'];
export default function ClothingFormModal($mdDialog) {

    return {
        show: () => {
            return $mdDialog.show({
                controller: ClothingFormController,
                controllerAs: 'self',
                templateUrl: 'src/clothing/modal.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
        }
    }
}