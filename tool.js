//跨浏览器获取视口大小
function getInner () {
    if (typeof window.innerWidth != 'undefined') {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}

//跨浏览器获取Style
function getStyle(element, attr) {
    if (typeof window.getComputedStyle != 'undefined') {    //W3C
        return window.getComputedStyle(element, null)[attr];
    } else if(typeof element.currentStyle != 'undefined') {    //IE
        return element.currentStyle[attr];
    }
}

//判断Class是否存在
function hasClass (element, className) {
    return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

//跨浏览器添加link规则
function insertRule(sheet, selectorText, cssText, position) {
    if (typeof sheet.insertRule != 'undefined') {   //W3c
        sheet.insertRule(selectorText + '{' + cssText + '}', position);
    } else if (typeof sheet.addRule != 'undefined') {   //IE
        sheet.addRule(selectorText, cssText, position);
    }
}

//跨浏览器删除link规则
function removeRule(sheet, index) {
    if (typeof sheet.deleteRule != 'undefined') {   //W3c
        sheet.deleteRule(index);
    } else if (typeof sheet.removeRule != 'undefined') {   //IE
        sheet.removeRule(index);
    }
}

//获取Event对象
function getEvent(evt) {
    return evt||window.event;
}

//取消默认行为
function preventDefault(evt) {
    var event = getEvent(evt);
    if (typeof event.preventDefault != 'undefined') {   //W3C
        event.preventDefault();
    } else {    //IE
        event.returnValue = false;
    }
}

//跨浏览器事件绑定
function addEvent(object, type, func) {
    if (typeof object.addEventListener != 'undefined') {    //W3C
        object.addEventListener(type, func, false);
    } else if (typeof object.attachEvent != 'undefined') {  //IE
//        object.attachEvent('on' + type, function () {
//            func.call(object, window.event);
//        });
        if (!object.events) object.events = {};
        if (!object.events[type]) {
            object.events[type] = [];
            if (object['on' + type]) object.events[type][0] = func;
        } else {
            if (addEvent.equal(object[type], func)) return false;
        }

        object.events[type][addEvent.ID++] = func;
        object['on' + type] = addEvent.exec;

    }
}

addEvent.ID = 1;

addEvent.exec = function (evt) {
    var event = getEvent(evt);
    var events = this.events[event.type];
    for (var i = 0; i < events.length; i++) {
        events[i].call(this, event);
    }
};

//同一个注册函数进行屏蔽
addEvent.equal = function (events, func) {
    for (var i = 0; i < events.length; i++) {
        if (events[i] = func) return true;
    }
};

//跨浏览器移除事件
function removeEvent (object, type, func) {
    if (typeof object.removeEventListener != 'undefined') {     //W3c
        object.removeEventListener(type, func, false);
    } else if (typeof object.detachEvent != 'undefined') {      //IE
//        object.detachEvent('on' + type, func);
        for (var i = 0; i< object.events[type].length; i++) {
            if (object.events[type][i] == func) {
                delete  object.events[type][i];
            }
        }
    }
}