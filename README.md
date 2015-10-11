# Husky
前段组件库
### tab切换
依赖jquery
<pre>HTML:
&lt;div class="demo h-tab active" data-tab-statu="tb1"&gt;tab1&lt;/div&gt;
&lt;div class="demo h-tab " data-tab-statu="tb2"&gt;tab2&lt;/div&gt;
&lt;div class="demo h-tab "&gt;tab3&lt;/div&gt;
JS:
var tabObj = new tabSwitch({
   activeClass: "active", 
   before: beforefunc,   //一个函数或者一个函数数组（与tab一一对应）  可选
   after:  afterfunc     //一个函数或者一个函数数组（与tab一一对应）  可选
});
console.log(tabObj.statu);    //当前激活的tab的statu值
tabObj.offTab();              //取消tab事件
</pre>

### H5定位
依赖jquer
<pre>html方式绑定类名即可: &lt;div class="h-location"&gt;点我定位&lt;/div&gt;    
js方式，传递一个回调到getLocationCity即可:
getLocationCity(function(err,result){    
   if(err){console.log(err); return false;}
      console.log("定位到的城市是："+result);
   })
}
</pre>
