Template.routines.helpers({
    addingToSet: function () {
        return !!(Router.current().params.query.addToSet);
    }
});

Template.routines.events({
	'submit form': function (e, tpl) {
		e.preventDefault();
		var fields = ['routineName', 'difficulty', 'description', 'frequencyType', 'workoutFrequency', 'fitnessType'];
		var routine = {};

		_.each(fields, function(field) {
			var fieldVal = tpl.$('#' +field).val();
			routine[field] = fieldVal;
		});

		Meteor.call('Routines.insert', routine, function (error, result) {
			if (result) {
				Router.go('routine', {routine_id: result});
			}
		});
	},
	'mousedown .routine': function (e, tpl) {
		$(e.currentTarget).addClass('selected')
	},
	'click .routine': function (e, tpl) {
		var routineId = e.currentTarget.dataset.id;
		Router.go('routine', {routineId: routineId})
	},
    'click i': function (e, tpl) {
        e.stopPropagation();
        var curTarget = $(e.currentTarget);
        var routineId = curTarget.parent().data('id');
        addRoutine(routineId)
    }
});

var addRoutine = function addRoutine (routineId) {
    var destination = Router.current().params.query.addToSet;
    var routine = Routines.findOne(routineId);
    if (destination === 'currentRoutine') {
        Meteor.users.update(Meteor.user()._id,
            {$set: {currentRoutine: routine }},
            {},
            function (error, result) {
                Router.go('dashboard');
                console.log('meow');
            }
        )
    }
};