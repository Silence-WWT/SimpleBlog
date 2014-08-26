//前台调用
function $(_this) {
    return new Base(_this);
}

function Base(_this) {
    //创建数组用于保存获取的的节点和节点数组
    this.elements = [];
    if (_this != undefined) {
        this.elements[0] = _this;
    }
}

//获取ID节点
Base.prototype.getId = function (id) {
    this.elements.push(document.getElementById(id));
    return this;
};

//获取name节点数组
Base.prototype.getName = function (name) {
    var names = document.getElementsByName(name);
    for (var i = 0; i < names.length; i ++) {
        this.elements.push(names[i]);
    }
    return this;
};

//获取元素节点数组
Base.prototype.getTagName = function (tagName) {
    var tags = document.getElementsByTagName(tagName);
    for (var i = 0; i < tags.length; i ++) {
        this.elements.push(tags[i]);
    }
    return this;
};

//获取CLASS节点数组
Base.prototype.getClassName = function (className, idName) {
    var node = null;
    if (arguments.length == 2) {
        node = document.getElementById(idName);
    } else {
        node = document;
    }
    var all = node.getElementsByClassName(className);
    for (var i = 0; i < all.length; i ++) {
        if (all[i].className == className) {
            this.elements.push(all[i]);
        }
    }
    return this;
};

//获取某一个节点
Base.prototype.getElement = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
};

//设置CSS
Base.prototype.css = function (attr, value) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (arguments.length == 1) {
            if (typeof window.getComputedStyle != 'undefined') {    //W3C
                return window.getComputedStyle(this.elements[i], null)[attr];
            } else if(typeof this.elements[i].currentStyle != 'undefined') {    //IE
                return this.elements[i].currentStyle[attr];
            } else {
                alert('get style failed!');
            }
        }
        this.elements[i].style[attr] = value;
    }
    return this;
};

//添加link或style的CSS规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
    var sheet = document.styleSheets[num];
    if (typeof sheet.insertRule != 'undefined') {   //W3c
        sheet.insertRule(selectorText + '{' + cssText + '}', position);
    } else if (typeof sheet.addRule != 'undefined') {   //IE
        sheet.addRule(selectorText, cssText, position);
    }
    return this;
};

//移除link或style的CSS规则
Base.prototype.removeRule = function (num, index) {
    var sheet = document.styleSheets[num];
    if (typeof sheet.deleteRule != 'undefined') {   //W3c
        sheet.deleteRule(index);
    } else if (typeof sheet.removeRule != 'undefined') {   //IE
        sheet.removeRule(index);
    }
    return this;
};

//添加Class
Base.prototype.addClass = function (className) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (!this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
            this.elements[i].className += ' ' + className;
        }
    }
    return this;
};

//移除Class
Base.prototype.removeClass = function (className) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
        }
    }
    return this;
};

//设置innerHTML
Base.prototype.html = function (str) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (arguments.length == 0) {
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
};

//设置onclick事件
Base.prototype.click = function (func) {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].onclick = func;
    }
    return this;
};

//设置鼠标移入移出方法
Base.prototype.hover = function (over, out) {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
};

//设置显示
Base.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].style.display = 'block';
    }
    return this;
};

//设置隐藏
Base.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].style.display = 'none';
    }
    return this;
};