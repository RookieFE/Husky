;function getLocation(successCB, errorCB, options){
    //获取地图提供的js api
    $.ajax({
        url: 'http://api.map.baidu.com/api?v=1.4&callback=?',
        dataType: "jsonp"
    }).always(function() {
        setTimeout(handleError,5000);
        window.navigator.geolocation
            ? window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, $.extend({
            enableHighAccuracy : true
        }, options))
            : (errorCB && errorCB("浏览器不支持html5来获取地理位置信息"))
    });
    function handleSuccess(position){
        //获取当前手机经纬度坐标，并将其转化成百度坐标
        //0 gps  2 google 4 baidu
        var lng = position.coords.longitude,
            lat = position.coords.latitude,
            xyUrl = "http://api.map.baidu.com/ag/coord/convert?from=0&to=2&x=" + lng + "&y=" + lat + '&callback=?'
        $.ajax({
            url: xyUrl,
            success: function (data) {
                var gc = new BMap.Geocoder()
                gc.getLocation(new BMap.Point(data.x, data.y), function(rs){    //data.x data.y为加密后的百度坐标，传入Point后可解析成详细地址
                    successCB && successCB(rs,data)
                });
            },
            dataType: "jsonp"
        }).always(function(data) {
            var gc = new BMap.Geocoder(data)
            gc.getLocation(new BMap.Point(data.x, data.y), function(rs){    //data.x data.y为加密后的百度坐标，传入Point后可解析成详细地址
                successCB && successCB(rs,data)
            })
        })
    }
    function handleError(e){
        errorCB && errorCB(arguments)
        return false;
    }
}
(function(){
    var locaEl = $(".h-location");
    if (locaEl) {
        locaEl.on("click",function(){
            getLocation(function(rs){
                var city = rs.addressComponents.city.slice(0, -1);
                if(locaEl){
                    locaEl.on("click",function(){
                        alert(1);
                        locaEl.text(city);
                    })
                }
                result = city;
            }, function(rs){
                if(locaEl){
                    locaEl.text("定位失败");
                }
                result = rs;
            });
        });
    }
})();
function getLocationCity(callback){
    getLocation(function(rs){
        result = rs.addressComponents.city.slice(0, -1);
        callback(null,result);
    }, function(rs){
        callback(rs,null);
    });
}