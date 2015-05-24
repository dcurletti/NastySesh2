Template.routine.helpers({
});

Template.routine.events({
	'click #addWorkout': function (e, tpl) {
		Router.go('libraryWorkouts', {query: 'workoutId='+this._id})
	}
});