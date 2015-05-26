Template.dashboard.helpers({
    hasCurrentRoutine: function () {
        return !!(Meteor.user().currentRoutine);
    },
    currentRoutine: function () {
        return Meteor.user().currentRoutine;
    }
});