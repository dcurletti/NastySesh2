Meteor.methods({
	'Routines.insert': function (params) {
		console.log('server callback')
		return Routines.insert(params);
	}
})