angular.module('family').component('son', {
  template: `
    <div class="family-member son" ng-show="$ctrl.show">
      <div>Hello, I am son!</div>
      <div>
        <input type="button" value="Call grandpa!" ng-click="$ctrl.callGrandpa()"></button>
      </div>
    </div>
  `,
  controller: function(Store) {
    Store.subscribe(() => this.show = Store.getState().son.show)
    this.callGrandpa = () => Store.dispatch({ type: 'call:grandpa' })
  }
})