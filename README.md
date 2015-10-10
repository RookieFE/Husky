# Husky
前段组件库

### tab切换
依赖jquery

<pre>HTML:
\<div class="demo h-tab active" data-tab-statu="tb1">tab1\</div>
\<div class="demo h-tab " data-tab-statu="tb2">tab2\</div>
\<div class="demo h-tab ">tab3\</div>
JS:
var tabObj = new tabSwitch({
   activeClass: "active", 
   before: beforefunc,   //一个函数或者一个函数数组（与tab一一对应）  可选
   after:  afterfunc     //一个函数或者一个函数数组（与tab一一对应）  可选
});
console.log(tabObj.statu);    //当前激活的tab的statu值
tabObj.offTab();              //取消tab事件
