(function(){if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}var D={sugNum:5,sugBaseUrl:"http://www.weixinju.com/api.php?",sugBaseParam:"&op=search_ajax",sugScriptId:"sug",checkInterval:500};var C={};var E=[];function F(H){var I=this;I.options=H;I.isFocus=false;I.currentSugKw="";I.searchBox=I.options.wrap;I.inputField=I.options.input;I.btn=I.options.btn;E.push(I);I.init()}F.hideAll=function(){for(var H=0;H<E.length;H++){E[H].hide()}};F.status={currentSuggest:null,isRequesting:false,isClosed:false,intervalRequest:true,curWord:""};window.baidu=window.baidu||{};baidu.sug=function(H){if(H.q!=""){C[H.q]=H}if(F.status.currentSuggest){F.status.currentSuggest.render(H)}F.status.isRequesting=false};function G(H){if(H){H.preventDefault();H.stopPropagation()}}function B(I){var H=0;if(I.offsetParent){for(;;){H+=I.offsetTop;if(!I.offsetParent){break}I=I.offsetParent}}else{if(I.y){H+=I.y}}return H}F.prototype={init:function(){var H=this;H.sugDiv=$("<div/>");H.sugDiv.attr("id","suggestDiv");H.sugDiv.attr("class","suggest-div");H.sugContent=$("<div/>");H.sugContent.attr("class","suggest-content");H.sugDiv.append(H.sugContent);H.searchBox.append(H.sugDiv);H.hide();H.bindEvents()},hide:function(){this.sugDiv.css("display","none");this.searchBox.css("marginBottom",this.sugDiv.offsetHeight+"px")},show:function(){var H=this;H.sugDiv.css("display","block");H.searchBox.css("marginBottom",this.sugDiv.offsetHeight+"px")},clear:function(){this.sugContent.html("");this.curItem=null;this.searchBox.css("marginBottom",this.sugDiv.offsetHeight+"px")},render:function(N){var L=this;if(!N||N.s.length==0){L.clear();L.hide();L.currentSugKw="";L.oriOnsubmit&&(L.searchBox[0].onsubmit=L.oriOnsubmit);return}else{if(L.currentSugKw==N.s){return}else{L.clear();for(var J=0;J<N.s.length&&J<D.sugNum;J++){var M=$("<div/>");M.attr("class","suggest-item");var O=N.s[J];var K=new RegExp("(.*?)"+N.q+"(.*)","ig");var I=K.exec(O);if(I){if(I[1]){var H=$("<b/>");H.html(I[1]);M.append(H)}M.html(N.q);if(I[2]){var H=$("<b/>");H.html(I[2]);M.append(H)}}else{var H=$("<b/>");H.html(O);M.append(H)}M.bind("click",L.sugItemClickHandler(O));M.bind("mouseover",function(){L.selectItem($(this))});L.sugContent.append(M)}L.initKey();L.currentSugKw=N.s;L.show()}}},selectItem:function(I){var H=this;H.oriOnsubmit=H.oriOnsubmit||H.searchBox[0].onsubmit;H.searchBox[0].onsubmit=function(){return false};H.curItem&&H.curItem.removeClass("selected");H.curItem=I;I&&I.addClass("selected")},initKey:function(){var H=this;if(H.keyinited){return}H.keyinited=true;H.inputField.bind("keydown",function(L){F.status.intervalRequest=true;F.status.isRequesting=false;if(H.currentSugKw==""){return}if(L.which==40){F.status.intervalRequest=false;F.status.isRequesting=true;if(H.curItem){var J=H.curItem.next();if(J.size()>0){H.selectItem(J)}else{H.selectItem(null)}}else{H.selectItem($(H.sugContent.children().first()))}I()}if(L.which==38){L.preventDefault();F.status.intervalRequest=false;F.status.isRequesting=true;if(H.curItem){var K=H.curItem.prev();if(K.size()>0){H.selectItem(K)}else{H.selectItem(null)}}else{H.selectItem($(H.sugContent.children().last()))}I()}if(L.which==13){F.status.intervalRequest=false;F.status.isRequesting=true;H.curItem&&H.curItem.click()}function I(){if($(H.sugContent).find(".selected")[0]){H.inputField.val($(H.sugContent).find(".selected").html().replace(/<[^>].*?>/g,""))}else{H.inputField.val(F.curWord)}}}).bind("keyup",function(){if(F.status.intervalRequest){F.curWord=H.inputField.val()}})},checkInput:function(I){if(!I.isFocused){return}var H=I.inputField.attr("value");H=(H.toLowerCase()).trim();if(H==""){I.render();I.hide()}else{var J=C[H];if(J){I.render(J)}else{if(!F.status.isRequesting){F.status.isRequesting=true;I.sendRequest(H)}}}setTimeout(function(){I.checkInput(I)},D.checkInterval)},sendRequest:function(J){if(false){baidu.sug(data);return}else{var I=D.sugBaseUrl+"tags="+J+D.sugBaseParam;var H=$("#"+D.sugScriptId);if(F.status.intervalRequest){H&&H.remove();H=$("<script/>");H.attr("id",D.sugScriptId);H.attr("src",I);$("body").append(H)}}},bindEvents:function(){var H=this;H.inputField.bind("focus",function(I){H.isFocused=true;F.status.currentSuggest=H;setTimeout(function(){H.checkInput(H)},20)});H.inputField.bind("blur",function(I){F.status.currentSuggest=null;H.isFocused=false});$("body").bind("click",function(I){F.hideAll()});H.btn.click(function(){H.searchBox[0].onsubmit=H.oriOnsubmit||H.searchBox[0].onsubmit;H.searchBox.submit()})},sugItemClickHandler:function(I){var H=this;return function(J){H.isFocused=false;H.hide();G(J);if(H.options.onItemClicked){H.options.onItemClicked(I)}}}};function A(I){I=I.trim();if(C[I]){return C[I]}for(var H in datas.cache){if(I.indexOf(H)>=0&&datas.cache[H].s.length==0){return{q:I,s:[]}}}return null}window.mi=window.mi||{};window.mi.Suggest=F})();function init(D){var B=$(".search form");var A={wrap:B,input:$(".search_box"),btn:$(".search_submit"),onItemClicked:function(E){B[0].onsubmit=function(){};B[0].word.value=E;setTimeout(function(){B.submit()},200)}};function C(){if((B.attr("word").value).trim()==""){return false}else{mi.Suggest.status.currentSuggest=null;return true}}new mi.Suggest(A)}if($(".search").size()){init("")};