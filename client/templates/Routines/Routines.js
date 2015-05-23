Template.routines.events({
	'submit form': function (e, tpl) {
		e.preventDefault();
		var fields = ['routineName', 'difficulty', 'description', 'frequencyType', 'workoutFrequency', 'fitnessType'];
		var routine = {};

		_.each(fields, function(field) {
			var fieldVal = tpl.$('#' +field).val();
			routine[field] = fieldVal;
		})

		Meteor.call('Routines.insert', routine, function (error, result) {
			if (result) {
				Router.go('routine', {routine_id: result});
			};
		});
	}
});