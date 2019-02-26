Page({
	data:{
		
	},
	
	loginFn(){
		wx.login({
		  success(res) {
			if (res.code) {
			  // 发起网络请求
			  wx.request({
				url: 'https://test.com/onLogin',
				data: {
				  code: res.code
				}
			  })
			} else {
			  console.log('登录失败！' + res.errMsg)
			}
		  }
		})
	},
	
	onLoad:function(options){
		console.log(options)
		
	},
	
	onReady: function(){
		
	},
	
	onShow: function(){
		/*wx.showActionSheet({
			itemList:['A','B','c'],
			success: function(res){
				console.log(res.tapIndex)
			},
			fail: function(res){
				console.log(res.errMsg)
			}
		})*/
		
		/*wx.showLoading({
		  title: '加载中',
		})
		
		setTimeout(function () {
		  wx.hideLoading()
		}, 2000)*/
		
		/*wx.showToast({
			title: '成功',
			icon: 'success',
			duration: 2000
		})*/
	},
	
	onHide: function(){
		
	},
	
	onUnload: function(){
		
	},
	
	onPullDownRefresh: function(){
		
	},
	
	onReachBottom: function(){
		
	},
	
	onShareAppMessage: function(){
		
	}

})