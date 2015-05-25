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
	},
	'mousedown .routine': function (e, tpl) {
		$(e.currentTarget).addClass('selected')
	},
	'click .routine': function (e, tpl) {
		var routineId = e.currentTarget.dataset.id
		Router.go('routine', {routineId: routineId})
	}
});