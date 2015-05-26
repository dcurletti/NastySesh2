Template.workouts.helpers({
	getId: function () {
		return this._id || this.workoutId;
	},
    addingToSet: function () {
        return !!(Router.current().params.query.addToSet);
    }
});

Template.workouts.events({
	'click .workout': function (e, tpl) {
		var workoutId = e.currentTarget.dataset.id;
		Router.go('workout', {workoutId: workoutId});
	},
    'click i': function (e, tpl) {
        e.stopPropagation();
        var curTarget = $(e.currentTarget);
        var workoutId = curTarget.parent().data('id');
        addWorkout(workoutId)
    },
    'click .back': function (){
        window.history.back();
    }
});

var addWorkout = function (workoutId) {
    var params = Router.current().params.query.addToSet;
    var addTo = 'currentRoutine';
    var workout = Workouts.findOne(workoutId)
    Meteor.users.update(Meteor.user()._id,
        {$set: {currentRoutine: workout }
        }
    )
};