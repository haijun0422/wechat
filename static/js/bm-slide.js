(function(A){A.bmSlide=function(C,E){var B={fragments:A(".S_fragment",C),container:A(".S_content",C),btn_page:A(".S_page",C),btn_next:A(".S_next",C),btn_prev:A(".S_prev",C),autoSlide:true,pauseTime:8000,mode:"left",currentPage:1,perPage:1};var D=A.extend({},B,E);D.fragments_count=D.fragments.length,D.fragmet_height=D.fragments.height(),D.fragmet_width=D.fragments.width(),D.numPages=Math.ceil(D.fragments_count/D.perPage);if(D.mode=="left"){D.stepMove=D.fragmet_width*D.perPage}else{D.stepMove=D.fragmet_height*D.perPage}D.firstPosition=0;D.lastPosition=-((D.numPages-1)*D.stepMove);C.animate=function(F){if(A(C).hasClass("S_pause")){return false}C.activeCurrentPage();if(D.mode=="left"){D.container.animate({"left":F})}else{D.container.animate({"top":F})}};C.auto=function(){if(!D.autoSlide){return false}sliderIntervalID=setInterval(function(){D.currentPage++;if(D.currentPage>D.numPages){D.currentPage=1;C.animate(D.firstPosition);return}C.animate(-((D.currentPage-1)*D.stepMove))},D.pauseTime)};C.stopAuto=function(){if(typeof(sliderIntervalID)!="undefined"){clearInterval(sliderIntervalID)}};C.activeCurrentPage=function(){D.btn_page.parent().children("[rel='"+(D.currentPage)+"']").addClass("active").siblings().removeClass("active")};C.init=function(){C.activeCurrentPage();C.auto();D.container.hover(function(){C.stopAuto()},function(){C.auto()});D.btn_page.click(function(){var F=this;if(A(F).hasClass("active")){return false}if(!F.rel||F.rel==""){return false}if(D.autoSlide){clearInterval(sliderIntervalID)}D.currentPage=F.rel;if(D.currentPage>D.numPages){D.currentPage=1;C.animate(D.firstPosition);return}C.animate(-((D.currentPage-1)*D.stepMove));C.auto()});D.btn_next.click(function(){C.stopAuto();D.currentPage++;if(D.currentPage>D.numPages){D.currentPage=D.numPages;C.animate(D.lastPosition);return}C.animate(-((D.currentPage-1)*D.stepMove));C.auto()});D.btn_prev.click(function(){C.stopAuto();D.currentPage--;if(D.currentPage<1){D.currentPage=1;C.animate(D.firstPosition);return}C.animate(-((D.currentPage-1)*D.stepMove));C.auto()})};C.init()};A.fn.bmSlide=function(C){var B=this;B.each(function(){(new A.bmSlide(B,C))});return B};A.fn.bmSlidePause=function(){var B=A(this);B.addClass("S_pause")};A.fn.bmSlideRestart=function(){var B=A(this);B.removeClass("S_pause")}})(jQuery);