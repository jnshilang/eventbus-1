/*
 * 纯数据及业务逻辑类型的js，此文件完全由后台维护
 * */
(function (win, doc) {

	// 数据获取事件
	var e = eventbus.on("/test/getData1", function (event) {
		var data = [
			{name: "tom", sex: "male"},
			{name: "jack", sex: "male"},
			{name: "alice", sex: "female"}
		];

		//向总线发送数据取回成功消息，并将数据传递给总线
		eventbus.emit("/test/dataSuccess1", data);
	});

	// 数据获取事件
	eventbus.on("/test/getData2", function () {
		var data = [
			{name: "路人甲", sex: "male"},
			{name: "路人乙", sex: "male"},
			{name: "路人丙", sex: "female"}
		];

		//向总线发送数据取回成功消息，并将数据传递给总线
//		setTimeout(function () {
			eventbus.emit("/test/dataSuccess2", data);
//		}, 2000);
	});

})(window, document);