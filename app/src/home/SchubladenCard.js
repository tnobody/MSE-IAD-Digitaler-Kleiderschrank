export default SchubladenCard;

SchubladenCard.$inject = ['ClothingFormModal'];

function SchubladenCard(clothingFormModal) {
    return {
        restrict: 'E',
        scope: {
            category: '=',
            images: '=',
            onAdd: '@'
        },
        templateUrl: "src/home/card.html",
        compile: function () {
            return {
                pre: function ($scope) {
                    $scope.showClothingFormModal = ($e) => {
                        clothingFormModal
                            .show($e)
                            .then(() => {
                                $log.debug('Success')
                            });
                    }
                }
            }
        }
    }
}