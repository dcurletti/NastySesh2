Template.header.helpers({
	menuItems: function () {
		return [
			{ name: 'Dashboard',
				url: ''
			},
			{ name: 'Routines',
				url: 'routines'
			},
		  { name: 'Workouts',
				url: 'workouts'
			},
		  { name: 'Exercises',
				url: 'exercises'
			}
	  ]
	},

	selected: function (routeName) {
		return ((routeName === Router.current().route.getName()) ? 'selected' : '')
	}
});

