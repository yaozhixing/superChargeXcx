// pages/getlocation/getlocation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  getLoctionFn(){
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        console.log(res);
        let { latitude, longitude } = res;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 18,
          name: '测试位置',
          address: "福田区福田新村28栋404",
          success: function(res){
            console.log(res)
          },
          fail: function (err) {
            console.log(err)
          },
          complete: function (info) {
            console.log(info)
          }
        })
      },
      fail: function (err) {
        console.log(err)
      },
      complete: function (info) {
        console.log(info)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})