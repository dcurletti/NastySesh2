Meteor.methods({
	'Routines.insert': function (params) {
		console.log('server callback')
		return Routines.insert(params);
	}
});

Meteor.users.allow({
    'insert': function () {
        return true;
    },
    'update': function () {
        return true;
    }
});