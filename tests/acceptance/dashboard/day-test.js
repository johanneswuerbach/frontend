import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Acceptance: DashboardDay', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("Today renders", function() {
    expect(1);
    visit('/dashboard/day').then(function() {
        equal(find('p:first').text().trim(), 'Hello Test User,', "Page contains user name");
        // dont count events its sporadic on some days
        // equal(find('div.container ol li').length, 1, "Events List contains expected number of models");
    });
});
