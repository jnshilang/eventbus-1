/*
 * 纯操作DOM类型的js，此文件完全由前端维护
 * */
(function (win, doc) {

	// 数据取回成功事件1
	var e1 = eventbus.on("/demo/dataSuccess1", function (data) {
		log('[来自view] 收到消息："/demo/dataSuccess1"，返回数据为：' + data, 'blue');
	});

	// 数据取回成功事件2
	var e2 = eventbus.on("/demo/dataSuccess2", function (data) {
		for (var i = 0; i < data.length; i++) {
			var person = data[i];
			log('[来自view] 收到消息："/demo/dataSuccess2"，返回数据为：姓名：' + person.name + '，性别：' + person.sex, 'blue');
		}
	});

	// 数据取回成功事件3
	var e3 = eventbus.on("/demo/dataSuccess3", function (data) {
		for (var i = 0; i < data.length; i++) {
			var person = data[i];
			log('[来自view] 收到消息："/demo/dataSuccess2"，返回数据为：姓名：' + person.name + '，性别：' + person.sex, 'blue');
		}
	});

	// 多个消息才会触发
	var e4 = eventbus.all("/demo/dataSuccess1", "/demo/dataSuccess2", function (data1, data2) {
		log('[来自view] /demo/dataSuccess1， /demo/dataSuccess2 消息全部发送完毕。仅订阅一次！', 'red');
		e4.off();
	});

	// 多个消息才会触发
	var e5 = eventbus.all("/demo/dataSuccess1", "/demo/dataSuccess2",  "/demo/dataSuccess3", function () {
		log('[来自view] /demo/dataSuccess1， /demo/dataSuccess2， /demo/dataSuccess3 消息全部发送完毕。仅订阅一次！', 'red');
		e5.off();
	});

})(window, document);