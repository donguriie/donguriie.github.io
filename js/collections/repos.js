var app = app || {};
var RepoList = Backbone.Collection.extend({
    model: app.Repo
});
app.Repos = new RepoList();
