var app = app || {};

app.Repo = Backbone.Model.extend({
  defaults:{
    _index:0,
    id:0,
    name:"",
    language:"",
    git_url:"",
    html_url:"",
    homepage:"",
    created_at:"",
    updated_at:"",
    pushed_at:"",
    default_branch:"master",
    size:0,
    private:false,
    fork:false,
    has_issues:false,
    has_downloads:false,

    fullname:"",
    description:"",
    stargazers_count:0,
    watchers_count:0,
    forks_count:0,

    loaded:false
  }
});
