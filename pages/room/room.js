Page({
  data:{
     cateid:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.data.cateid=options.cateid
     wx.setNavigationBarTitle({
       title: option.ganem_name,
       success: function(res) {
         // success
       }
     })
     this.onPullDownRefresh()
  },

    onPullDownRefresh:function(){
        var   that =this;
         wx.request({
           url: 'http://www.douyutv.com/api/v1/live/'+ this.data.cate_id +'?offset='+ this.data.roomList.length +'&limit=20',
       data: {},
           method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
           // header: {}, // 设置请求的 header
           success: function(res){
             // success
           },
           fail: function() {
             // fail
           },
           complete: function() {
             // complete
           }
         })
    },
  onReady:function(){
    // 页面渲染完成
     
  },
  onShow:function(){
    // 页面显示
     
  },
  onHide:function(){
    // 页面隐藏
     
  },
  onUnload:function(){
    // 页面关闭
     
  }
})