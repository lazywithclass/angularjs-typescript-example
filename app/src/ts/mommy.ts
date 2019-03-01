angular.module('family').component('mommy', {
  template: `
    <div class="family-member mommy" ng-show="$ctrl.show">
      <div>Hello, I am mommy!</div>
      <div>
        <input type="button" value="Toggle son" ng-click="$ctrl.toggleSon()">
      </div>
    </div>
  `,
  controller: function(Store) {
    Store.subscribe(() => this.show = Store.getState().mommy.show)
    this.toggleSon = () => Store.dispatch({ type: 'toggle:son' })
  }
})