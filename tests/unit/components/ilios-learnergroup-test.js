import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('ilios-learnergroup', 'IliosLearnergroupComponent', {
  // specify the other units that are required for this test
  needs: ['component:expander-box', 'component:ilios-groupmembers', 'component:ilios-relatedcourses']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
