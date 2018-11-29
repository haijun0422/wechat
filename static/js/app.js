/* Try to get out of frames! */
if ( window.top != window.self ) { 
    window.top.location = self.location.href
}

$(document).ready(function() {
    
    // 澶栨帴娣诲姞 _blank
    $("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "']),a[rel='external'],a[rel='external nofollow']").attr("target", "_blank");

    // 鍑虹幇 go2top 鎸夐挳
    $(window).scroll(function () {
        var obj = $('.go2top');
        if (obj.length == 0) return false;
        900 < obj.offset().top ? obj.show() : obj.hide();
    });
    // 婊戝埌椤堕儴
    $('.go2top').click(function () {
        IFR.scrollTo( 0 );
        IFR.util.stopDefault();
    });

    // 瀵艰埅鑷姩楂樹寒
    if($(".current-menu-item").length==0){$('.menu-item-home').addClass('current-menu-item');}

    // 婊戝埌璇勮
    $('.single .entry-comment-number a').click(function() {
        IFR.scrollTo( $('#comments-box') );
        IFR.util.stopDefault();
    });

    // 椤靛簳鐗堟潈澹版槑
    $('#JS_show_license').click(function(){
        $('#JS_License').slideToggle();
    });

    // 棣栭〉鍐呭鍖哄浘鐗囬摼鎺ユ敼涓烘枃绔犻摼鎺�
    $('body.home .entry-archive').each(function() {
        var $post = $(this);
        var link = $post.find('.entry-name a').attr('href');
        $post.find('img').parent('a').attr({'href':link,'rel':'external'});
    });

    // lozy load
    $('body.home, body.archive, body.search').find(".entry-common img").lazyload({
         placeholder : IFR.blankImg_url,
         effect      : "fadeIn"
    });

    // index live entries hover
    $('.JS_index_live').hover(function(){
        $(this).addClass('entry-live-hover');
    },function(){
        $(this).removeClass('entry-live-hover');
    });
    
    // everything share
    $('a.JS_share_buttons').click(function(){

        var sns = $(this).attr('data-share');
        if( !sns ) return false;

        // comment share
        if( $(this).parent().hasClass('JS_comment_share') ){
            var $cmtBody = $('#' + $(this).parent().attr('data-id') );
            // comment rating 鍔犱簡涓€灞� div
            var $ckContent = $cmtBody.find('.ckhide');
            if( $ckContent.length >= 1 ){
                var content = $ckContent.text();
            }else{
                var content = $cmtBody.find('p').text();
            }
            var data = {
                _topic : '鍒嗕韩鑼冭瘎',
                _t : content,
                _pic : ''
            }
        }else{
            if( $('body').hasClass('single-news') ){
                var data = {
                    _topic : "鐖辫寖鍎柯疯瀵�"
                };
            }else if( $('body').hasClass('single-dasheng') ){
                var data = {
                    _topic : '鐖辫寖鍎柯峰ぇ澹�',
                    _t : $.trim($('.dasheng_content blockquote').text()) + '' + $.trim($('.dasheng_original').text()),
                    _pic : ''
                };
            }else if( $('body').hasClass('single-data') ){
                var data = {
                    _topic : '鐖辫寖鍎柯锋暟瀛�',
                    _t : '銆�' + $.trim($('.widget-data-num').text()) + $.trim($('.widget-data-percent').text()) + $.trim($('.widget-data-text').text()) + '銆�' + $.trim($('.entry-data-content').text()),
                    _pic : ''
                };
            }else if( $('body').hasClass('single-post') ){
                var data = {}
                if( typeof IFR.preCat != 'undefined' ){
                    data._topic = "鐖辫寖鍎柯�" + IFR.preCat;   // preCat is defined in header.php
                };
            }else{
                var data = {}
            }
        }
        // do share api
        IFR.share(sns,data); 
    });

    // show or hide share buttons
    $('.comment-content').hover(function(){
        var obj = $(this);
        obj.find('.JS_show_share').click(function(){
            obj.addClass('submenuOn');
        });
    },function(){
        var obj = $(this);
        obj.removeClass('submenuOn');
    });

    $(".JS_show_tip").poshytip({
        showTimeout: 1
        ,alignTo: 'target'
        ,alignX: 'center'
        ,alignY: 'top'
        ,offsetX: 5
    });
    
    // 鏀惰捣璇勮鑺傜偣
    $('.JS_close_cmt_node').click(function(){
        $( '#' + $(this).attr('data-id') ).addClass('collapsed');
        $(this).hide().parent().parent().find('.JS_open_cmt_node').show();
        return false;
    });
    // 鎵撳紑璇勮鑺傜偣
    $('.JS_open_cmt_node').click(function(){
        $( '#' + $(this).attr('data-id') ).removeClass('collapsed');
        $(this).hide().parent().parent().find('.JS_close_cmt_node').show();
        return false;
    });

    /*鎼滅储妗�*/
    $('#JS_search').bind('click', function(){
        $('#search-bar').fadeIn('fast');
        $('#search-input').focus();
        return false;
    });
/*    $('#search-bar .close').click(function(){
        $('#search-bar').fadeOut('fast');
        return false;
    });*/

 /*   $("input.JS_ajax_search").autocomplete(IFR.search_url, {
        scrollHeight: 500,
        scroll: 30,
        add_item:"鏌ョ湅瀹屾暣鎼滅储缁撴灉",
        result_function: function(){
            location.href = IFR.wp_url + '/index.php?s=' + $("#search-input").val();
        },
        formatItem: function(item) {
            if( item.type == "post" ){
                rst = '<span class="small icon-q">鏂囩珷</span><span class="post">' + item.text + '</span>';
            }else if( item.type == "term" ){
                rst = '<span class="small icon-q">鍒嗙被/鏍囩</span><span class="term">' + item.text + '</span>';
            }else{
                rst = '<span class="error">' + item.text + "</span>";
            }
            return rst;
        },
        formatResult: function(row) {
        }
    }).result(function(event, item) {
        location.href = item.url;
    });
*/

});
