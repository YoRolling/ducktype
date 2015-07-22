QUnit.test("Array test", function(assert) {
    assert.ok(DuckType.isArray([]), "Passed!");
});

QUnit.test("Function test", function(assert) {
    assert.ok(DuckType.isFunction(function() {}), "Passed!");
});

QUnit.test("Object test", function(assert) {
    assert.ok(DuckType.isObject({}), "Passed!");
});


QUnit.test("Fucntion Object test", function(assert) {
    assert.ok(DuckType.isObject(function() {}), "Passed!");
});

QUnit.test("RegExp test", function(assert) {
    assert.ok(DuckType.isRegExp(/test/gi), "Passed!");
});

QUnit.test("RegExp constructor test", function(assert) {
    assert.ok(DuckType.isRegExp(new RegExp("test","gi")), "Passed!");
});

QUnit.test("Number test", function(assert) {
    assert.ok(DuckType.isNumber(12), "Passed!");
    assert.ok(DuckType.isNumber("12e+58"), "Passed!");
});


QUnit.test("Null test", function(assert) {
    assert.ok(DuckType.isNull(null), "Passed!");
});

QUnit.test("Undefined test", function(assert) {
    assert.ok(DuckType.isUndefined(undefined), "Passed!");
});

QUnit.test("Nodelist test", function(assert) {
    assert.ok(DuckType.isNodeList(document.getElementById("qunit").childNodes), "Passed!");
    assert.ok(DuckType.isNodeList(document.getElementsByTagName("div")), "Passed!");
});

QUnit.test("HtmlCollection test", function(assert) {
    assert.ok(DuckType.isHtmlCollection(document.getElementsByTagName("div")), "Passed!");
});
