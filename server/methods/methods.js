Meteor.methods({
	'Routines.insert': function (params) {
		console.log('server callback')
		Routines.insert(params);
	}
})