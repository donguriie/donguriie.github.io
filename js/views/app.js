var app = app || {};

app.AppView = Backbone.View.extend({
  el:"#repos",
  initialize:function(){
    this.listenTo(app.Repos,"add",this.add);
    jQuery.getJSON(API_URL+"/repos",function(data){
      jQuery.each(data,function(index,itemData){
        itemData._index = index;
        app.Repos.add(itemData);
      });
    });
  },
  add:function(repo){
    var view = new app.RepoView({model:repo});
    jQuery(this.el).append(view.render().el);
  }
});
