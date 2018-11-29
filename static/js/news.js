// console
"undefined" === typeof console && (window.console = {
    log: function () {}
});
"undefined" === typeof IFR && (window.IFR = {});
"undefined" === typeof IFR.util && (window.IFR.util = {});

(function($){

    // 鏁堟灉鎻掍欢
    $.extend(
        $.easing, 
        {
            easeInOutExpo: function(a, c, d, b, e) {
                if (c == 0)
                    return d;
                if (c == e)
                    return d + b;
                if ((c /= e / 2) < 1)
                    return b / 2 * Math.pow(2, 10 * (c - 1)) + d;
                return b / 2 * (-Math.pow(2, -10 * --c) + 2) + d
             }
        }
    );

    // share 
    IFR.share = function(sns, opt ){
        var defaults = {
            _t : document.title,
            _url :  document.location.href,
            _pic : false,
            _topic : false
        };
        var o = $.extend( {},  defaults, opt );

        var _t = encodeURI( o._t );  // 寰崥鍐呭
        var _url = encodeURIComponent( o._url );    // 鎻掑叆寰崥涓殑缃戝潃
        if( o._topic )
            var _topic = encodeURI( o._topic );  // 寰崥璇濋
        if( o._pic )
            var _pic = encodeURI( o._pic ); // 鑷畾涔夊浘鐗�

        var width = 626;
        var height = 436;

        var _u = '';    // 鍒嗕韩

        var _site = '';
        switch (sns){
           case "tencent":
               if( _topic )
                   _t = '%23' + _topic + '%23 ' + _t;
               _u = 'http://v.t.qq.com/share/share.php?c=share&a=index&appkey=801180581&title='+_t+'&url='+_url+'&site='+_site;
           break;
           case "qzone":
                width = 1050;
                height = 600;
               _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + _url + '&title='+ _t;
           break;
           case "sina":
               if( _topic )
                   _t = '%23' + _topic + '%23 ' + _t;
               _u = 'http://v.t.sina.com.cn/share/share.php?title='+_t +'&url='+_url+'&appkey=3857924317&ralateUid=1642720480'; 
           break;
           case "douban":
               _u = "http://shuo.douban.com/!service/share?href=" + _url + "&name=" + _t;
           break;
          case "twitter":
            width = 800;
            height = 515;
            _u = 'http://twitter.com/home?status=' + _t + ' ' + _url;
            break;
          case "facebook":
            _u = 'http://www.facebook.com/sharer.php?u=' + _url + '&t=' + _t;
            break;
           case "mobile-sina":
               if( _topic )
                   _t = '%23' + _topic + '%23 ' + _t;
                _u = 'http://weibo.cn/ext/share?appkey=3288560582&ralateUid=1642720480&ru='+_url+'&rt='+_t;
           break;
           default:
               _u = 'http://v.t.sina.com.cn/share/share.php?title='+_t +'&url='+_url+'&source=bookmark';    
        }
        //  console.log( _u );

        if( _pic === false ){
           _u += '&pic=""';
        }else{
            var _imgs = $('.post img');
            if(_imgs.length != 0){
                for (var j = 0; j < _imgs.length; j++) {
                   _u += '&pic=' + encodeURIComponent(_imgs[j].src);
               }
            }
        }
        window.open( _u,'鍒嗕韩', 'width=' + width + ',height=' + height +  ', top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
        // 鍒嗕韩缁熻
        if( typeof shareCount === 'function' )
          shareCount();
    }

    // 宸ュ叿
    $.extend(IFR.util, {

        // ie6
        isie6: "msie" == $.browser && 7 > $.browser.version,
        isie: $.browser.msie,

        // 闃绘浜嬩欢鍐掓场
        stopBubble: function(e){
          if ( e && e.stopPropagation )
            e.stopPropagation(); 
          else
            window.event.cancelBubble = true;
          return false;
        },

        // 闃绘娴忚鍣ㄩ粯璁よ涓�
        stopDefault: function(e){
          if ( e && e.preventDefault ) 
            e.preventDefault(); 
          else
            window.event.returnValue = false; 
          return false;
        },

        // 鍒ゆ柇 ID 鏄惁瀛樺湪
        exid: function(id){
            var o = document.getElementById(id);
            if (o){
                return true;
            }else{
                return false;
            };
        },

        // 鑾峰彇闅忔満瀛楃涓�
        random: function (length, upper, lower, number) {
            !upper && (!lower && !number) && (upper = lower = number = !0);
            var a = [
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), 
                "abcdefghijklmnopqrstuvwxyz".split(""), 
                "0123456789".split("")
            ];
            //涓存椂鏁扮粍
            var b = [];
            //涓存椂瀛椾覆 
            var c = "";
            b = upper ? b.concat(a[0]) : b;
            b = lower ? b.concat(a[1]) : b;
            b = number ? b.concat(a[2]) : b;
            for (var i = 0; i < length; i++) {
                c += b[Math.round(Math.random() * (b.length - 1))];
            }
            return c;
        }

    });

    // 骞虫粦婊戝姩鍒版寚瀹氶珮搴︽垨 DOM浣嶇疆
    $.extend( IFR,{
        scrollTo: function ( to ) {
            // jquery瀵硅薄瑕佽幏鍙栧叾浣嶇疆
            if ( to.jquery ){
                to = to.offset().top;
            }
            $('html,body').animate({
                scrollTop: to
            }, {
                queue: !1,
                duration: 800,
                easing: "easeInOutExpo"
            });
        }
    });

})(jQuery);