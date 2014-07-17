/*
 * 纯事件绑定类型的js，此文件由前端维护
 * */
(function(win, doc){

	var btn1 = $("#btn1");

	// 绑定事件，在点击按钮时向总线发送消息
	btn1.click(function(){
		eventbus.emit("/test/getData1", {
			action : "test"
		});
	});

	var btn2 = $("#btn2");

	// 绑定事件，在点击按钮时向总线发送消息
	btn2.click(function(){
		eventbus.emit("/test/getData2");
	});

})(window, document);