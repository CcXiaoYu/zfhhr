//myWarn(null, '请输入正确的手机号！', null, function () { myToast('谢谢支持！'); });
function myWarn(title, content, yesName, yesFunc) {
            var warnHTML = '<div class="H-position-fixed H-center-all H-z-index-10 H-width-100-percent H-height-100-percent" style="top: 0; right: 0; bottom: 0; left: 0; background: rgba(0,0,0,0.2);"><div class="H-alert H-theme-background-color-white H-animate-scale-big" style="width: 280px; line-height:22px; margin-top: -70px;"><div class="H-alert-title H-font-size-15 H-padding-12 H-line-height-normal" style="background: #f5f5f5;">{@title}</div><div class="H-alert-content H-padding-15 H-font-size-15" style="min-height: 60px; ">{@content}</div><div class="H-alert-buttons H-flexbox-horizontal H-border-vertical-top-after H-line-height-normal"><a class="H-flex-item H-padding-10 H-center-all H-font-size-15 H-touch-active" tapmode="">{@yes}</a></div></div></div>';
            title = title ? title : "温馨提示";
            content = content ? content : "";
            yesName = yesName ? yesName : "确定";

            var div = document.createElement("div");
            div.innerHTML = warnHTML.replace("{@title}", title).replace("{@content}", content).replace("{@yes}", yesName);
            document.body.appendChild(div);
            var yesObj = H.D(".H-alert-buttons a:first-child", div);
            yesObj.addEventListener("touchstart", function () {
                if (H.isFunction(yesFunc)) {
                    yesFunc();
                }
                H.addClass(div, "H-animate-scale-small");
                setTimeout(function () {
                    document.body.removeChild(div);
                }, 200);
            })
        }
//myAlert(null, '嗨，我是Hui，以后我就是你开发伴侣了！*_*', null, function () { myToast('谢谢支持！'); }, null, function () { myToast('我会努力的！'); });
 function myAlert(title, content, yesName, yesFunc, noName, noFunc) {
            var warnHTML = '<div class="H-position-fixed H-center-all H-z-index-10 H-width-100-percent H-height-100-percent" style="top: 0; right: 0; bottom: 0; left: 0; background: rgba(0,0,0,0.1);"><div class="H-alert H-theme-background-color-white H-animate-scale-big" style="width: 280px;line-height:22px; margin-top: -70px;"><div class="H-alert-title H-font-size-15 H-padding-12 H-line-height-normal" style="background: #f5f5f5;">{@title}</div><div class="H-alert-content H-padding-15 H-font-size-15" style="min-height: 60px; ">{@content}</div><div class="H-alert-buttons H-flexbox-horizontal H-border-vertical-top-after H-line-height-normal"><a class="H-flex-item H-padding-10 H-center-all H-font-size-15 H-touch-active" tapmode="">{@yes}</a><a class="H-flex-item H-padding-10 H-center-all H-font-size-15 H-touch-active H-border-horizontal-both-after" tapmode="">{@no}</a></div></div></div>';
            title = title ? title : "温馨提示";
            content = content ? content : "";
            yesName = yesName ? yesName : "确定";
            noName = noName ? noName : "取消";

            var div = document.createElement("div");
            div.innerHTML = warnHTML.replace("{@title}", title).replace("{@content}", content).replace("{@yes}", yesName).replace("{@no}", noName);
            document.body.appendChild(div);

            var yesObj = H.D(".H-alert-buttons a:first-child", div);
            var noObj = H.D(".H-alert-buttons a:last-child", div);
            yesObj.addEventListener("touchstart", function () {
                if (H.isFunction(yesFunc)) {
                    yesFunc();
                }
                H.addClass(div, "H-animate-scale-small");
                setTimeout(function () {
                    document.body.removeChild(div);
                }, 200);
            });

            noObj.addEventListener("touchstart", function () {
                if (H.isFunction(noFunc)) {
                    noFunc();
                }
                H.addClass(div, "H-animate-scale-small");
                setTimeout(function () {
                    document.body.removeChild(div);
                }, 200);
            })
        }
//myPrompt(null, null, null, null, function (value) { myToast(value); });
function myPrompt(title, placeholder, value, yesName, yesFunc) {
            var warnHTML = '<div class="H-position-fixed H-center-all H-z-index-10 H-width-100-percent H-height-100-percent" style="top: 0; right: 0; bottom: 0; left: 0; background: rgba(0,0,0,0.2);"><div class="H-alert H-theme-background-color-white H-animate-scale-big" style="width: 280px;line-height:26px; margin-top: -70px;"><div class="H-alert-title H-font-size-15 H-padding-12 H-line-height-normal" style="background: #f5f5f5;">{@title}</div><div class="H-alert-content H-padding-15 H-font-size-15"><input type="text" maxlength="4" class="H-width-100-percent H-border-none padding H-padding-10 H-box-sizing-border-box H-box-shadow-inset" style="border:1px solid #f1f1f1;" placeholder="{@placeholder}" value="{@value}" /></div><div class="H-alert-buttons H-flexbox-horizontal H-border-vertical-top-after H-line-height-normal"><a class="H-flex-item H-padding-10 H-center-all H-font-size-15 H-touch-active" tapmode="">{@yes}</a></div></div></div>';
            title = title ? title : "请输入下面值";
            placeholder = placeholder ? placeholder : "请输入...";
            value = value ? value : "";
            yesName = yesName ? yesName : "确定";

            var div = document.createElement("div");
            div.innerHTML = warnHTML.replace("{@title}", title).replace("{@placeholder}", placeholder).replace("{@value}", value).replace("{@yes}", yesName);
            document.body.appendChild(div);
            var yesObj = H.D(".H-alert-buttons a:first-child", div);
            yesObj.addEventListener("touchstart", function () {
                if (H.isFunction(yesFunc)) {
                    yesFunc(H.D("input", div).value);
                }
                H.addClass(div, "H-animate-scale-small");
                setTimeout(function () {
                    document.body.removeChild(div);
                }, 200);
            })
        }

//myToast('Hi,我是Hui')
function myToast(content, timeThreshold) {
            timeThreshold = Math.abs(H.isNumber(timeThreshold) ? Number(timeThreshold) : 2000);
            content = content ? content : "";

            var div = document.createElement("div");
            div.setAttribute("class", "H-toast H-position-fixed H-z-index-100000 H-theme-font-color-white H-padding-vertical-both-3 H-padding-horizontal-both-10 H-border-radius-5 H-font-size-14 H-line-height-normal");
            div.setAttribute("style", "background: rgba(0,0,0,0.5); bottom: 30px;left:50%; max-width:220px;");
            div.innerHTML = content;
            document.body.appendChild(div);
            div.style.marginLeft = -(div.clientWidth) / 2 + "px";

            setTimeout(function () {
                document.body.removeChild(div);
            }, timeThreshold);
        }