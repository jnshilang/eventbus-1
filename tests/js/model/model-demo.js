/*
 * 纯数据及业务逻辑类型的js，此文件完全由后台维护
 * */
(function (win, doc) {

	// 数据获取事件
	var e = eventbus.on("/demo/getData1", function (event) {
		log('[来自model] 收到消息"/demo/getData1"', 'green');
		var data;
		if (event) {
			data = '传递的数据为' + JSON.stringify(event);
		}

		//向总线发送数据取回成功消息，并将数据传递给总线
		eventbus.emit("/demo/dataSuccess1", data);
	});

	// 数据获取事件
	eventbus.on("/demo/getData2", function () {
		log('[来自model] 收到消息"/demo/getData2"', 'green');
		var data = [
			{name: "路人甲", sex: "男"}
		];

		//向总线发送数据取回成功消息，并将数据传递给总线
		eventbus.emit("/demo/dataSuccess2", data);
	});

	// 数据获取事件
	eventbus.on("/demo/getData3", function () {
		log('[来自model] 收到消息"/demo/getData3"', 'green');
		var data = [
			{name: "路人乙", sex: "女"}
		];

		//向总线发送数据取回成功消息，并将数据传递给总线
		eventbus.emit("/demo/dataSuccess3", data);
	});

})(window, document);