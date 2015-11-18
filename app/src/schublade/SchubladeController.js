export default SchubladeController;

SchubladeController.$inject = ['$stateParams']

function SchubladeController($stateParams) {
    this.category = $stateParams.category;
};