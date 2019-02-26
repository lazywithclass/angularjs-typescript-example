angular.module('family').component('grandpa', {
  template: `
    <div class="family-member grandpa" ng-show="$ctrl.show" ng-class="{ called: $ctrl.called }">
      <div>Hello, I am grandpa!</div>
      <div>
        <input type="button" value="Toggle mommy" ng-click="$ctrl.toggleMommy()">
      </div>
    </div>
  `,
  controller: function($rootScope, $timeout) {
    this.$onInit = () => this.show = true

    $rootScope.$on('call:grandpa', () => {
      this.called = true
      $timeout(() => this.called = false, 1000)
    })

    this.toggleMommy = () => $rootScope.$broadcast('toggle:mommy')
  }
})