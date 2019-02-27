// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'IV3BZ-O2WRD-75Q4W-HOIXA-FTOMK-2DFLQ' // 必填
});

Page({
  data: {
    //113.948837890625 22.555470648871527
    longitude: 113.94883,
    latitude: 22.55547,
    scale: 15,   //缩放级别
    //其他目的标记点
    markers: [
      {
        id: 0,
        title: "充电宝1号",
        iconPath: "../../images/markers.png",
        longitude: 113.94892,
        latitude: 22.55559,
        width: 35,
        height: 38
      },
      {
        id: 1,
        title: "充电宝2号",
        iconPath: "../../images/markers.png",
        longitude: 113.94163,
        latitude: 22.55127,
        width: 35,
        height: 38
      },
      {
        id: 2,
        title: "充电宝3号",
        iconPath: "../../images/markers.png",
        longitude: 113.94391,
        latitude: 22.55147,
        width: 35,
        height: 38
      },
      {
        id: 3,
        title: "充电宝4号",
        iconPath: "../../images/markers.png",
        longitude: 113.94803,
        latitude: 22.55247,
        width: 35,
        height: 38
      },
    ],
  },

  onReady(e){
    
  },

  //拖动视野
  bindregionchange(e){
    //console.log(e)
    //实时获取定位点的坐标
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')){
      type: 'gcj02',
      this.mapCtx.getCenterLocation({
        success(res){
          console.log(res);
        }
      })
    }
  },
  

  //获取位置
  /*getCenterLocation(){
    var _this = this;
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log(res);
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        console.log(_this.data.longitude, _this.data.latitude);
      }
    })
  },*/

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
  
  //加载
  onLoad(){
    var _this = this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        console.log(_this.data.longitude, _this.data.latitude)
      },
    })
  },

  onShow: function(){
    this.mapCtx = wx.createMapContext('myMap');
    //this.getLocatPosition();
    //this.getCenterLocation();
  }
})