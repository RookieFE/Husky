;!function(window){
   var enable = (function() {
      var local = window.localStorage;
      try{
         local.setItem("huazi","storage");
         local.removeItem("huazi");
      }catch(e){
         return false;
      }
      return true;
   })();
   var webStorage = {
      enable: enable,
      getLocalStorage: function(key) {
         if(enable && key){
            return localStorage.getItem(key);
         }else if(!key){
            var len = localStorage.length
               , result="{";
            for(var i=0; i < len; i++){
               var key = localStorage.key(i);
               result += "\""+key+"\":\""+localStorage.getItem(key)+"\","
            }
            result = result.substring(0,result.length-1)+"}";
            return JSON.parse(result)
         }
      },
      setLocalStorage: function(key,val) {
         if(enable){
            return localStorage.setItem(key,val);
         }
      },
      removeLocalStorage: function(key) {
         if(enable){
            return localStorage.removeItem(key,val);
         }
      },
      getSessionStorage: function(key) {
         if(enable && key){
            return sessionStorage.getItem(key);
         }else if(!key){
            var len = sessionStorage.length
               , result="{";
            for(var i=0; i < len; i++){
               var key = sessionStorage.key(i);
               result += "\""+key+"\":\""+sessionStorage.getItem(key)+"\","
            }
            result = result.substring(0,result.length-1)+"}";
            return JSON.parse(result)
         }
      },
      setSessionStorage: function(key,val) {
         if(enable){
            return sessionStorage.setItem(key,val);
         }
      },
      removeSessionStorage: function(key) {
         if(enable){
            return sessionStorage.removeItem(key,val);
         }
      }
   }
   window.webStorage = webStorage;
}(window);
