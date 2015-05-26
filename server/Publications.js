Meteor.publish('userAccountInfo', function (userId) {
    return Meteor.users.find(userId, {
        fields: {
            emails: 1,
            profileName: 1,
            currentRoutine: 1
        }});
});