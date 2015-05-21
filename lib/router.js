Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	yieldTemplates: {
		'header': {to: 'header'}
	}
});

Router.map(function () {
	this.route('exercises', {path:'/exercises'})
	this.route('offMenuTest', {path: '/offMenuTest'})
});

Router.route('/', {
	name: ''
});


Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('landingPage');
  } else {
    this.next();
  }
});