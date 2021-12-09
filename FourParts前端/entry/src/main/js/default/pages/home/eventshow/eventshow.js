import prompt from '@system.prompt';
import router from '@system.router';
import fetch from '@system.fetch';

export default {
	data: {
		type: 0,
		id: "",
		winfo1: {
			status: "",
			message: "",

			tasks: [{
						id: "",
						name: "",
						type: "",
						description: "",
						deadline: "",
					}],
		},
		winfo2: {
			status: "",
			message: "",

			tasks: [{
						id: "",
						name: "",
						type: "",
						description: "",
						deadline: "",
					}],
		},
		winfo3: {
			status: "",
			message: "",

			tasks: [{
						id: "",
						name: "",
						type: "",
						description: "",
						deadline: "",
					}],
		},
		winfo4: {
			status: "",
			message: "",

			tasks: [{
						id: "",
						name: "",
						type: "",
						description: "",
						deadline: "",
					}],
		},
		receive: '',
		get_data: {},
	},
	goback() {
		router.back();
	},
	//	launch() {
	//		router.push ({
	//			uri:'pages/home/eventdetails/eventdetails', // 指定要跳转的页面
	//		})
	//	},
    onInit(){
//onAttached(){
		// 下面为 type1 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/1',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo1 = resp.data; //将获取到的数据赋值给winfo
				this.winfo1 = JSON.parse(this.winfo1) //将数据转化为JS对象
				this.status = this.winfo1.status;
				this.tasks = this.winfo1.tasks;
				for (var i in this.todolist) {
					this.winfo1.tasks.name = this.tasks[i]["name"];
					this.winfo1.tasks.type = this.tasks[i]["type"];
					this.winfo1.tasks.description = this.tasks[i]["description"];
					this.winfo1.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo1) //打印出数据
			},
			fail: (resp) => {
				this.winfo1 = resp.data;
				console.log("数据失败" + this.winfo1)
			}
		})

		// 下面为 type2 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/2',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo2 = resp.data; //将获取到的数据赋值给winfo
				this.winfo2 = JSON.parse(this.winfo2) //将数据转化为JS对象
				this.status = this.winfo2.status;
				this.tasks = this.winfo2.tasks;
				for (var i in this.todolist) {
					this.winfo2.tasks.id = this.task[i]["id"];
					this.winfo2.tasks.name = this.tasks[i]["name"];
					this.winfo2.tasks.type = this.tasks[i]["type"];
					this.winfo2.tasks.description = this.tasks[i]["description"];
					this.winfo2.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo2) //打印出数据
			},
			fail: (resp) => {
				this.winfo1 = resp.data;
				console.log("数据失败" + this.winfo2)
			}
		})
		// 下面为 type3 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/3',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo3 = resp.data; //将获取到的数据赋值给winfo
				this.winfo3 = JSON.parse(this.winfo3) //将数据转化为JS对象
				this.status = this.winfo3.status;
				this.tasks = this.winfo3.tasks;
				for (var i in this.todolist) {
					this.winfo3.tasks.name = this.tasks[i]["name"];
					this.winfo3.tasks.type = this.tasks[i]["type"];
					this.winfo3.tasks.description = this.tasks[i]["description"];
					this.winfo3.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo3) //打印出数据
			},
			fail: (resp) => {
				this.winfo1 = resp.data;
				console.log("数据失败" + this.winfo3)
			}
		})
		// 下面为 type4 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/4',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo4 = resp.data; //将获取到的数据赋值给winfo
				this.winfo4 = JSON.parse(this.winfo4) //将数据转化为JS对象
				this.status = this.winfo4.status;
				this.tasks = this.winfo4.tasks;
				for (var i in this.todolist) {
					this.winfo4.tasks.name = this.tasks[i]["name"];
					this.winfo4.tasks.type = this.tasks[i]["type"];
					this.winfo4.tasks.description = this.tasks[i]["description"];
					this.winfo4.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo4) //打印出数据
			},
			fail: (resp) => {
				this.winfo4 = resp.data;
				console.log("数据失败" + this.winfo4)
			}
		})
	},
	onReady(){
		console.info("page准备")
	},

	onShow(){
		console.log("PageShow显示")
		// 下面为 type1 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/1',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo1 = resp.data; //将获取到的数据赋值给winfo
				this.winfo1 = JSON.parse(this.winfo1) //将数据转化为JS对象
				this.status = this.winfo1.status;
				this.tasks = this.winfo1.tasks;
				for (var i in this.todolist) {
					this.winfo1.tasks.name = this.tasks[i]["name"];
					this.winfo1.tasks.type = this.tasks[i]["type"];
					this.winfo1.tasks.description = this.tasks[i]["description"];
					this.winfo1.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo1) //打印出数据
			},
			fail: (resp) => {
				this.winfo1 = resp.data;
				console.log("数据失败" + this.winfo1)
			}
		})

		// 下面为 type2 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/2',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo2 = resp.data; //将获取到的数据赋值给winfo
				this.winfo2 = JSON.parse(this.winfo2) //将数据转化为JS对象
				this.status = this.winfo2.status;
				this.tasks = this.winfo2.tasks;
				for (var i in this.todolist) {
					this.winfo2.tasks.id = this.task[i]["id"];
					this.winfo2.tasks.name = this.tasks[i]["name"];
					this.winfo2.tasks.type = this.tasks[i]["type"];
					this.winfo2.tasks.description = this.tasks[i]["description"];
					this.winfo2.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo2) //打印出数据
			},
			fail: (resp) => {
				this.winfo1 = resp.data;
				console.log("数据失败" + this.winfo2)
			}
		})
		// 下面为 type3 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/3',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo3 = resp.data; //将获取到的数据赋值给winfo
				this.winfo3 = JSON.parse(this.winfo3) //将数据转化为JS对象
				this.status = this.winfo3.status;
				this.tasks = this.winfo3.tasks;
				for (var i in this.todolist) {
					this.winfo3.tasks.name = this.tasks[i]["name"];
					this.winfo3.tasks.type = this.tasks[i]["type"];
					this.winfo3.tasks.description = this.tasks[i]["description"];
					this.winfo3.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo3) //打印出数据
			},
			fail: (resp) => {
				this.winfo1 = resp.data;
				console.log("数据失败" + this.winfo3)
			}
		})
		// 下面为 type4 的获取网络的代码
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/read/4',
			responseType: "json",
			success: (resp) => {
				console.log("请求成功");
				this.winfo4 = resp.data; //将获取到的数据赋值给winfo
				this.winfo4 = JSON.parse(this.winfo4) //将数据转化为JS对象
				this.status = this.winfo4.status;
				this.tasks = this.winfo4.tasks;
				for (var i in this.todolist) {
					this.winfo4.tasks.name = this.tasks[i]["name"];
					this.winfo4.tasks.type = this.tasks[i]["type"];
					this.winfo4.tasks.description = this.tasks[i]["description"];
					this.winfo4.tasks.deadline = this.task[i]["deadline"];
				}
				console.log("数据" + this.winfo4) //打印出数据
			},
			fail: (resp) => {
				this.winfo4 = resp.data;
				console.log("数据失败" + this.winfo4)
			}
		})
	},
	openDialog(e) {
		this.id = e,
		console.info(e),
		console.info("开始显示"),
		this.$element('dialogId').show(),
		console.info("显示成功")
	},
	confirmClick() {
		console.info(this.id);
		fetch.fetch({
			url: 'http://s293a77752.qicp.vip/task/delete/' + this.id,
			success: (resp) => {
				this.get_data = JSON.parse(resp.data),
				this.receive = this.get_data["message"]; //令获取到的数据赋给winfo
				//					console.log("返回的数据："+this.get_data)//打印出数据
				console.log("message：" + this.receive) //打印出数据
				prompt.showToast({
					message: this.receive,
				})
			},
			fail: (resp) => {
				this.receive = resp.data;
				console.log("删除失败：" + this.receive["message"])
			},
		})
		this.onInit()
		this.$element('dialogId').close()
		router.push ({
			uri:'pages/home/home', // 指定要跳转的页面
		})

	},
//	显示任务描述
	Desc_show(get_desc){
		prompt.showDialog({
			message: get_desc,
		})
	}
}
