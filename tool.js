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