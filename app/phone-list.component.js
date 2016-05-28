'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
    '<p>Total number of phones: {{$ctrl.phones.length}}</p>'+
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'LG K7™',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'Samsung Galaxy S7™',
          snippet: 'The Next, Next Generation tablet.'
        }

      ];
    }
  });

angular.
module('phonecatApp').
component('greetUser', {
  template: 'Hello, {{$ctrl.user}}!',
  controller: function GreetUserController() {
    this.user = 'world';
  }
});
