Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	yieldTemplates: {
		'header': {to: 'header'}
	}
});

Router.route('/', {
	name: 'dashboard'
});

Router.route('/library', {
	name: 'library'
});

Router.route('/routines', {
	name: 'routines',
	data: function () {	return Routines.find({}, {limit: 10}) }
});

Router.route('/workouts', {
	name: 'workouts',
	data: function () {	return Workouts.find({}, {limit: 10}) }
});

Router.route('/library/routines', {
	name: 'libraryRoutines'
});

Router.route('/library/workouts', {
	name: 'libraryWorkouts',
	data: function () { return Workouts.find({}, {limit: 10}) }
});

Router.route('/routines/:routineId', {
	name: 'routine',
	data: function () { return Routines.findOne(this.params.routineId) }
});

Router.route('/:workout_id/:exercise_id', {

})

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('landingPage');
  } else {
    this.next();
  }
});