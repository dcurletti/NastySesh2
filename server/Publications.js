Meteor.publish('userAccountInfo', function () {
    return Meteor.users.find({}, {
        fields: {
            emails: 1,
            profileName: 1,
            currentRoutine: 1
        }});
});