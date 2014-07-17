/*
 * 纯操作DOM类型的js，此文件完全由前端维护
 * */
(function (win, doc) {

	// 数据取回成功事件1
	var e1 = eventbus.on("/test/dataSuccess1", function (data) {
		var dom = $("#dom1"), html = "";
		for (var i = 0; i < data.length; i++) {
			var person = data[i];
			html += '<p>姓名：' + person.name + '，性别：' + person.sex + '</p>';

		}
		dom.append(html);
		e1.off();  // 移除监听
	});

	// 数据取回成功事件2
	eventbus.on("/test/dataSuccess2", function (data) {
		var dom = $("#dom2"), html = "";
		for (var i = 0; i < data.length; i++) {
			var person = data[i];
			html += '<p>姓名：' + person.name + '，性别：' + person.sex + '</p>';

		}
		dom.append(html);
	});

	// 多个前置条件
	var all = eventbus.all("/test/dataSuccess1", "/test/dataSuccess2", function (data1, data2) {
		$("body").append("<p>/test/dataSuccess1， /test/dataSuccess2 事件正确返回1</p>");
		all.off();  // 移除监听
	});

	eventbus.all("/test/dataSuccess1", "/test/dataSuccess2", function (data1, data2) {
		$("body").append("<p>/test/dataSuccess1， /test/dataSuccess2 事件正确返回2</p>");
	});

	// 多个前置条件
	var all2 = eventbus.all("/test/dataSuccess1", "/test/dataSuccess2", "/test/dataSuccess3", function (data1, data2) {
		$("body").append("/test/dataSuccess1， /test/dataSuccess2， /test/dataSuccess3 事件正确返回");
	});

})(window, document);