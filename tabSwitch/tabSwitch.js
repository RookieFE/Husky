/**
 * author: huazi
 * date: 2015-10-10
 * @param  {[Object]} config    [config.activeClass] [config.before] [config.after]
 * @return {[boolean]}
 */
var tabSwitch = function(config) {
  if(typeof config.activeClass != 'string') return false;

  var self = this;

  this.statu  = $("."+config.activeClass).data("tab-statu");


  var callback = function(cb,index){
    if(cb != undefined && Object.prototype.toString.call(cb) === '[object Array]'){
      cb.length-1 >= index ? cb[index]() : {};
    }else if(cb != undefined){
      cb();
    }
  }

  $(".h-tab").each(function(index,obj){
    $(obj).on("click.husky",function(){
      callback(config.before,index);

      $("."+config.activeClass).removeClass(config.activeClass);
      $(obj).addClass(config.activeClass);

      callback(config.after,index);
      self.statu = $(obj).data("tab-statu");
    });
  });
}

tabSwitch.prototype.getStatu = function() {
  return this.statu;
}
tabSwitch.prototype.offTab = function() {
  $(".h-tab").off(".husky");
}