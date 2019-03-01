//index.js
import { baseApi } from "../../utils/util"
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    isAuthor: false,
    isLogin: false, //默认：没有账户  
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //微信弹窗授权成功
  Handler(e) {
    console.log(e);
    //已授权
    if (e.detail.errMsg == "getUserInfo:ok"){
      let u = JSON.parse(e.detail.rawData);
      this.setData({
        isAuthor: true
      })
      this.data.userInfo = u;
      app.globalData.userInfo = u;

      //微信登录，后台注册接口
      this.loginFn();
      //登录后，直接跳转去付押金页面
      if (!this.data.isLogin){
        wx.navigateTo({
          url: '../payDeposit/payDeposit'
        })
      }
    }
  },

  //微信登录
  loginFn(){
    let _this = this;
    //有账号
    if (this.data.isLogin){
      //console.log("去付押金")
      wx.navigateTo({
        url: '../payDeposit/payDeposit'
      })
    }
    //无账号
    else{
      wx.login({
        success(res){
          console.log(res);
          let code = res.code;
          wx.request({
            url: `${baseApi}getOppenId`, // 仅为示例，并非真实的接口地址
            data: {
              code: code
            },
            success(res){
              console.log(res.data.code);
              //0： 没账号，去注册 false  1：有账号 true
              _this.setData({
                isLogin: res.data.code ? true : false
              })
            }
          })
        }
      })
    }
  },

  sq(){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
            }
          })
        }
      }
    })

    /*wx.getSetting({
      success: (res) => {
        console.log(res);
        //未授权，打开授权页面
        if (res.authSetting['scope.userInfo'] == false || res.authSetting['scope.userLocation'] == false){
          wx.openSetting({
            success: (res) => {
              console.log(res.authSetting)
            }
          })
        }
        else{
          console.log("您已授权，不用再次授权！")
        }
      }
    })*/
  },

  
  onLoad: function () {
    this.loginFn();
  }
})
