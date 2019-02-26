Page({
  /*data: { 
    markers: [{ latitude: 23.099994, longitude: 113.324520, name: 'T.I.T 创意园', desc: '我现在的位置' }], 
    covers: [
      { latitude: 23.099794, longitude: 113.324520, icaonPath: '../images/car.png', rotate: 10 }, 
      { latitude: 23.099298, longitude: 113.324129, iconPath: '../images/car.png', rotate: 90 }
    ]
  }*/
  data: {
    myLocation:[]
  },

  onReady(e){
    this.mapCtx = wx.createMapContext('myMap');
    this.getLocatPosition();
  },

  //获取位置
  getCenterLocation(){
    var _this = this;
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log(res);
        _this.setData({
          myLocation: [res.latitude, res.longitude]
        })
        console.log(_this.data.myLocation);
      }
    })
  },

  /* 定位位置 */
  getLocatPosition(){
    this.mapCtx.moveToLocation();
  },

  /* 扫码接口 */
  saomaFn(){
    wx.scanCode({
      success(res){
        console.log(res);
      }
    })
  },
  

  onShow: function(){
   
  }
})