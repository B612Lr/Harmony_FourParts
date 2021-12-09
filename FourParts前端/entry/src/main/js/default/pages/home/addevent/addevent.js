import prompt from '@system.prompt'
import router from '@system.router'
import fetch from '@system.fetch';


export default {
	data: {
		eventtitle: "",
		task_type: 1,
		description: "",
		deadline: "2021-12-08",
		receive:"",
		get_data:{},
	},
	geteventTitle(e) {
		this.eventtitle = e.value;
		console.info("eventtitle=" + this.eventtitle);
	},
	geteventType(e) {
//		this.task_type = parseInt(e.newValue, 10);
		this.task_type = e.newValue;
		console.info("eventtype=" + this.task_type)
	},
	getDate(e) {
		//		this.deadline = e.year + '-' + (e.month + 1) + '-' + e.day;
		if (e.month + 1 < 10) {
			e.month = '0' + (e.month + 1);
		}
		else if (e.month + 1 > 9) {
			e.month = (e.month + 1);
		}
		if (e.day < 10) {
			e.day = '0' + e.day
		}
		this.deadline = e.year + '-' + e.month + '-' + e.day;
		console.info("deadlline=" + this.deadline)
	},
	//	备注/描述
	getRemark(e) {
		this.description = e.value;
		console.info("description=" + this.description)

	},
	onCreate() {
		if (this.eventtitle.length == 0) {
			prompt.showToast({
				message: this.$t('请输入代办事项')
			})
			return;
		}
		else {
			//			let event = this.data;
			let event = {
				name: this.eventtitle,
				task_type: this.task_type,
				desc: this.description,
				deadline: this.deadline,
			};
			fetch.fetch({
				url: 'http://s293a77752.qicp.vip/task/create',
				responseType: "json",
				data: JSON.stringify(event),
				headers: {
					"content-type": "application/json",
				},
				method: 'POST',
				success:(resp)=>
				{	this.get_data = JSON.parse(resp.data),
					this.receive = this.get_data["message"];  //令获取到的数据赋给winfo
//					console.log("返回的数据："+this.get_data)//打印出数据
					console.log("message："+this.receive)//打印出数据
					prompt.showToast({
						message: this.receive,
					})
				},
				fail:(resp)=>
				{
					this.receive = resp.data;
					console.log("获取数据失败："+this.receive["message"])
				},

			})
			console.log(JSON.stringify(event));
			router.push ({
				uri:'pages/home/home', // 指定要跳转的页面
			})

		}
	},
}
