// pages/ordering/ordering.js
let app = getApp();
console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* id:'',
    imageURL:'',
    title:'',
    desc:'', */
    number:null,
    orderShow:false,
    payShow:false,
    goods:[
      { id:1,
        imageURL:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.91jm.com%2F2019%2F07%2FgRV695qd50VN.jpg&refer=http%3A%2F%2Fimg.91jm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624026985&t=6edbd52a66aa655f4748962baaefe334",
        price:18.8,
        desc:"金奖茉莉初雪茶",
        title:"一周好茶，花茶系列",
      },
      { id:2,
        imageURL:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=720173170,538798692&fm=26&gp=0.jpg",
        price:18.8,
        desc:"金奖茉莉初雪茶",
        title:"一周好茶，花茶系列",
      },
      { id:3,
        imageURL:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=720173170,538798692&fm=26&gp=0.jpg",
        price:18.8,
        desc:"金奖茉莉初雪茶",
        title:"一周好茶，花茶系列",
      },
      { id:4,
        imageURL:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=720173170,538798692&fm=26&gp=0.jpg",
        price:18.8,
        desc:"金奖茉莉初雪茶",
        title:"一周好茶，花茶系列",
      },
      { id:5,
        imageURL:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=720173170,538798692&fm=26&gp=0.jpg",
        price:18.8,
        desc:"金奖茉莉初雪茶",
        title:"一周好茶，花茶系列",
      },
      { id:6,
        imageURL:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3260236025,588857862&fm=26&gp=0.jpg",
        price:20.0,
        desc:"金奖大撒大撒DVD法尔茉莉初雪茶",
        title:"霸气芝士芒果",
      },
    ],  
    chooseshop:1,
    shopping:[
      {id:1,data:"霸气玉油柑"},
      {id:2,data:"奈雪樱花季"},
      {id:3,data:"奈雪必点"},
      {id:4,data:"霸气鲜果茶"},
      {id:5,data:"宝藏鲜奶茶"},
      {id:6,data:"霸气玉油柑"},
      {id:7,data:"奈雪樱花季"},
      {id:8,data:"奈雪必点"},
      {id:9,data:"霸气鲜果茶"},
      {id:10,data:"宝藏鲜奶茶"},
      {id:11,data:"霸气玉油柑"},
      {id:12,data:"奈雪樱花季"},
      {id:13,data:"奈雪必点"},
      {id:14,data:"霸气鲜果茶"},
      {id:15,data:"宝藏鲜奶茶"},
    ]
  },
  showOrder(e) {
    /* let { id,imageURL, title,desc} = e.currentTarget.dataset;
      let data = this.data.data;
      // 自定义一个事件，并且传值
      this.triggerEvent('myevent',{params: data[index]},{}) */
    this.setData({ orderShow: true });
    //console.log(e.detail.params)
    console.log(e);

  },
  
  onCloseOrder() {
    this.setData({ orderShow: false });
  },
  gotoshop(){
    wx.switchTab({
      url: "/pages/ordering/ordering"
    })
  }, 
  clickshop(e){
    var who =e.target.id
    console.log(e)
    this.setData({
      chooseshop:who
    })
  },
  /*add(){
    this.setData({
      orderShow:true,
    })
    let list = getApp().globalData.cartList || [];
    wx.showToast({
      title:"添加成功",
      icon:'success',
      duration:500
    })
    for(let i =0 ;i < list.length; i++){
      if(list[i].id== e.target.id){
        ++ list[i].count;
        return;
      }
    }
    e.target.isChecked = true;
    e.target.count = 1;
    list.push(e); 
  },*/
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function (e) {
   
  }
})