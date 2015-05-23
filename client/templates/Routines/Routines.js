Template.routines.events({
	'submit form': function (e, tpl) {
		e.preventDefault();
		var fields = ['routineName', 'difficulty', 'description', 'frequencyType', 'workoutFrequency', 'fitnessType'];
		var routine = {};

		_.each(fields, function(field) {
			var fieldVal = tpl.$('#' +field).val();
			routine[field] = fieldVal;
		})

		console.log('got in here')

		Meteor.call('Routines.insert', routine, function (error, result) {
			console.log('something', result);
		});
	}
});