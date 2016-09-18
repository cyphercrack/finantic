Template.accounts.helpers({
    accounts: function () {
        return Accounts.find().fetch();
    }
});
