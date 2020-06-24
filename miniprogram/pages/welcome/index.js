// miniprogram/pages/welcome/index.js
let timer1 = null;
let timer2 = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    counter: 3,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    timer1 = setTimeout(() => {
      wx.navigateTo({
        url: "../index/index",
      });
    }, 3000);
    timer2 = setInterval(() => {
      this.setData({ counter: this.data.counter - 1 });
    }, 1000);
  },
  onSkip: function () {
    wx.navigateTo({
      url: "../index/index",
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearTimeout(timer1);
    timer2 = null;
    clearInterval(timer2);
    timer2 = null;
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearTimeout(timer1);
    timer2 = null;
    clearInterval(timer2);
    timer2 = null;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
