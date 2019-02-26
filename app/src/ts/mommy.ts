angular.module('family').component('mommy', {
  template: `
    <div class="family-member mommy">
      <div>Hello, I am mommy!</div>
      <div>
        <input type="button" value="Toggle son">
      </div>
    </div>
  `,
  controller: function() { }
})