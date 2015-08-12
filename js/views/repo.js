var app = app || {};
app.RepoView = Backbone.View.extend({
  tagName:"li",
  template:_.template(jQuery("#item-template").html()),
  initialize:function(){
  },
  render:function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
