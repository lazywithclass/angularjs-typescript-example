angular.module('family').component('grandpa', {
  template: `
    <div class="family-member grandpa" ng-class="{ called: $ctrl.called }">
      <div>Hello, I am grandpa!</div>
      <div>
        <input type="button" value="Toggle mommy" ng-click="$ctrl.toggleMommy()">
      </div>
    </div>
  `,
  controller: function($timeout, Store) {
    Store.subscribe(() => {
      this.called = Store.getState().grandpa.called
      $timeout(() => this.called = false, 1000)
    })

    this.toggleMommy = () => Store.dispatch({ type: 'toggle:mommy' })
  }
})