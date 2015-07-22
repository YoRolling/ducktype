/**
 * A toolkit for type checking in JavaScript 
 *
 * @author： Leo Yao
 * @update： 2015-3-26 14:50:59
 * @description：  A javascript toolkit for type checking in Javascript
 * @license ：  MIT
 * @Email :  walldr2161ly#163.com
 *
 **/
;
!(function(exports, undefined) {

    function DuckType() {
        this.description = "Duck Typing Checking";
    }

    DuckType.fn = DuckType.prototype;
	
	/**
	 * change 'obj' to String Object with Object's toString function
	 *
	 *
	 **/
    DuckType.fn.toString = function(obj) {
        return Object.prototype.toString.call(obj);
    }
	
	
	/**
	 * whether or not the `obj`  is an instance of Array;
	 *
	 * @param obj  <Object>
	 *
	 * @return is an array or not  <Boolean>
	 *
	 **/
    DuckType.fn.isArray = function(obj) {
        return this.toString(obj) === "[object Array]";
    }
	
	/**
	 * whether or not the `obj`  is an instance of Function;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a Function or not   <Boolean>
	 *
	 **/
    DuckType.fn.isFunction = function(obj) {
        return this.toString(obj) === "[object Function]";
    }
	
	/**
	 * whether or not the `obj`  is an instance of Object;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a Object or not  <Boolean>
	 *
	 **/

    DuckType.fn.isObject = function(obj) {
        return this.toString(obj) === "[object Object]";
    }
	
	
	/**
	 * whether or not the `obj`  is an instance of RegExp;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a RegExp or not <Boolean>
	 *
	 **/
    DuckType.fn.isRegExp = function(obj) {
        return this.toString(obj) === "[object RegExp]";
    }
	
	
	/**
	 * whether or not the `obj`  is an instance of Number;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a Number or not  <Boolean>
	 *
	 **/
    DuckType.fn.isNumber = function(obj) {
        return !this.isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
    }
	
	
	/**
	 * whether or not the `obj`  is Null;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a Null <Boolean>
	 *
	 **/
    DuckType.fn.isNull = function(obj) {
        return null === obj || this.toString(obj) === "[object Null]";
    }
	
	
	/**
	 * whether or not the `obj`  is undefined;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a undefined <Boolean>
	 *
	 **/
    DuckType.fn.isUndefined = function(obj) {
        return undefined === obj || this.toString(obj) === "[object Undefined]";
    }
	
	
	/**
	 * whether or not the `obj`  is an instance of Function;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a Function <Boolean>
	 *
	 **/
    DuckType.fn.isTrue = function(obj) {
        return !this.isNull(obj) && !this.isUndefined(obj);
    }
	
	
	/**
	 * whether or not the `obj`  is an instance of Function;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a Function <Boolean>
	 *
	 **/
    DuckType.fn.isNodeList = function(obj) {

        var _result = true;

        if (this.isTrue(obj)) {
            if (obj instanceof NodeList || (this.isNumber(obj.length) && !this.isUndefined(obj) && this.isFunction(obj.nextNode) && this.isFunction(obj.reset))) {
                _result = true;
            } else {

                _result = false;
            }
        } else {
            _result = false;
        }

        return _result;
    }

	
	
	/**
	 * whether or not the `obj`  is an instance of HtmlCollection;
	 *
	 * @param obj  <Object>
	 *
	 * @return is a HtmlCollection <Boolean>
	 *
	 **/
    DuckType.fn.isHtmlCollection = function(obj) {
        return obj instanceof HTMLCollection || this.toString(obj) === "[object HTMLCollection]";
    }


    if (exports["DuckType"] === null || exports["DuckType"] === undefined) {
        exports["DuckType"] = new DuckType();
    }



})(window, undefined);
