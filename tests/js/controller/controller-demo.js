/*
 * 纯事件绑定类型的js，此文件由前端维护
 * */
(function(win, doc){


	// 绑定事件，在点击按钮时向总线发送消息
	$('#btns').find("input[type='button']").click(function(){
		var topic = $(this).val();
		eventbus.emit(topic, {
			data : topic
		});
	});

})(window, document);