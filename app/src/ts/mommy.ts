angular.module('family').component('mommy', {
  template: `
    <div class="family-member mommy" ng-show="$ctrl.show">
      <div>Hello, I am mommy!</div>
      <div>
        <input type="button" value="Toggle son" ng-click="$ctrl.toggleSon()">
      </div>
    </div>
  `,
  controller: function($rootScope) {
    this.$onInit = () => this.show = false

    $rootScope.$on('toggle:mommy', () => this.show = !this.show)

    this.toggleSon = () => $rootScope.$broadcast('toggle:son')
  }
})