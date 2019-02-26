angular.module('family').component('son', {
  template: `
    <div class="family-member son" ng-show="$ctrl.show">
      <div>Hello, I am son!</div>
      <div>
        <input type="button" value="Call grandpa!" ng-click="$ctrl.callGrandpa()"></button>
      </div>
    </div>
  `,
  controller: function($rootScope) {
    this.$onInit = () => this.show = false

    $rootScope.$on('toggle:son', () => this.show = !this.show)

    this.callGrandpa = () => $rootScope.$broadcast('call:grandpa')
  }
})