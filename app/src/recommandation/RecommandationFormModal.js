import RecommandationFormController from 'src/recommandation/RecommandationFormController'
import angular from 'angular';
RecommandationFormModal.$inject = ['$mdDialog', '$mdMedia'];
export default function RecommandationFormModal($mdDialog, $mdMedia) {
    return {
        show: (e) => {
            console.log(e);
            return $mdDialog
                .show({
                    controller: RecommandationFormController,
                    controllerAs: 'self',
                    templateUrl: 'src/recommandation/recommandation.html',
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