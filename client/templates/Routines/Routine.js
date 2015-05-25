Template.routine.helpers({
	routineWorkouts: function () {
		return Workouts.find();
	}
});

Template.routine.events({
	'click #addWorkout': function (e, tpl) {
		Router.go('libraryWorkouts', {query: 'workoutId='+this._id})
	}
});