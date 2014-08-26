//前台调用
function $(_this) {
    return new Base(_this);
}

//基础库
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
            return getStyle(this.elements[i], attr);
        }
        this.elements[i].style[attr] = value;
    }
    return this;
};

//添加link或style的CSS规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
    var sheet = document.styleSheets[num];
    insertRule(sheet, selectorText, cssText, position);
    return this;
};

//移除link或style的CSS规则
Base.prototype.removeRule = function (num, index) {
    var sheet = document.styleSheets[num];
    removeRule(sheet, index);
    return this;
};

//添加Class
Base.prototype.addClass = function (className) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (!hasClass(this.elements[i], className)) {
            this.elements[i].className += ' ' + className;
        }
    }
    return this;
};

//移除Class
Base.prototype.removeClass = function (className) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (hasClass(this.elements[i], className)) {
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

//设置居中
Base.prototype.center = function (width, height) {
    var top = (getInner().height - height) / 2;
    var left = (getInner().width - width) / 2;
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].style.top = top + 'px';
        this.elements[i].style.left = left + 'px';
    }
    return this;
};

//触发浏览器窗口事件
Base.prototype.resize = function (func) {
    window.onresize = func;
    return this;
};

//锁屏功能
Base.prototype.lock = function () {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].style.width = getInner().width + 'px';
        this.elements[i].style.height = getInner().height + 'px';
        this.elements[i].style.display = 'block';
    }
    return this;
};


//
Base.prototype.unlock = function () {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].style.display = 'none';
    }
    return this;
};