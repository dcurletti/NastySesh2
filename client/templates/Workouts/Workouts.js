Template.workouts.helpers({
	getId: function () {
		return this.id || this.workoutId;
	}
});

Template.workouts.events({
	'click .workout': function (e, tpl) {
		var workoutId = e.currentTarget.dataset.id;
		Router.go('workout', {workoutId: workoutId});
	}
});