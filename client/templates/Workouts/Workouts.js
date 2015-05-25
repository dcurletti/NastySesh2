Template.workouts.helpers({
	getId: function () {
		return this._id || this.workoutId;
	}
});

Template.workouts.events({
	'click .workout': function (e, tpl) {
		var workoutId = $(e.currentTarget).data('id');
		Router.go('workout', {workoutId: workoutId});
	}
});