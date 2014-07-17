# eventbus 事件总线

使用订阅发布模式，对前端JavaScript代码进行分层处理，方便UI类js与业务类js分离。view 和 controller 由前端开发人员书写，model 由后台开发人员书写，双方仅需要在开发前约定消息名称及数据格式，便于团队协作开发。


# Example

### 引入基础方法库及各层js

	<script type="text/javascript" src="eventbus.js"></script>
	<script type="text/javascript" src="view.js"></script>
	<script type="text/javascript" src="controller.js"></script>
	<script type="text/javascript" src="model.js"></script>


### view.js

```js
// 向总线订阅 demo/data 消息
eventbus.on("demo/data", function(data){
	console.log(data);
});
```

### controller.js

```js
// 点击按钮向总线发布 demo/loadData 消息
var btn = document.getElementById("myBtn");
btn.onclick = function(){
	eventbus.emit("demo/loadData", {foo: bar});
};
```

### model.js

```js	
// 向总线订阅 demo/loadData 消息
eventbus.on("demo/loadData", function(btnData){
	$.ajax({
		...
		data: btnData.foo,  // bar
		success: function(data){
			// 向总线发布 demo/data 消息
			eventbus.emit("demo/data", data);
		}
	});
});
```

# API

#### eventbus.on(topic, callback)


#### eventbus.emit(topic, data)


#### eventbus.all(topic1, topic2, ... , callback)


#### e.off()

```js
var e = eventbus.on("topic", function(){
	e.off(); // 在topic消息发布一次后注销订阅
});
```

# Debug

	执行 eventbus.debug() 会在控制台输出 eventbus 的所有消息清单