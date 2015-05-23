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

Router.route('/routines', {
	name: 'routines'
});

// Router.route('/workouts', {
// 	name: 'dashboard'
// });

// Router.route('/exercises', {
// 	name: 'dashboard'
// });

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