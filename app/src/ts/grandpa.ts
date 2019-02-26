angular.module('family').component('grandpa', {
  template: `
    <div class="family-member grandpa">
      <div>Hello, I am grandpa!</div>
      <div>
        <input type="button" value="Toggle mommy">
      </div>
    </div>
  `,
  controller: function() { }
})