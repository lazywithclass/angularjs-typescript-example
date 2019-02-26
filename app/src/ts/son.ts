angular.module('family').component('son', {
  template: `
    <div class="family-member son">
      <div>Hello, I am son!</div>
      <div>
        <input type="button" value="Call grandpa!"></button>
      </div>
    </div>
  `,
  controller: function() { }
})