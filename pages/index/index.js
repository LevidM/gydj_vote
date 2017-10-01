Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenModal: true
    
  },

  listenerButton: function () {
    this.setData({
      hiddenModal: !this.data.hiddenModal
    })
  },

  listenerConfirm: function () {
    this.setData({
      hiddenModal: true
    })
  },

  listenerCancel: function () {
    this.setData({
      hiddenModal: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var logo_data = [
      {
        logo_img_l: "/images/logo/1.png",
        logo_title_l: "深圳市博敏电子有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "1",

        logo_img_r: "/images/logo/2.png",
        logo_title_r: "深圳市创世纪机械有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "2",
      },
      {
        logo_img_l: "/images/logo/3.png",
        logo_title_l: "深圳市东方亮彩精密技术有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "3",

        logo_img_r: "/images/logo/4.png",
        logo_title_r: "深圳市高斯宝电气技术有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "4",
      },
      {
        logo_img_l: "/images/logo/5.png",
        logo_title_l: "深圳光韵达光电科技股份有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "5",

        logo_img_r: "/images/logo/6.png",
        logo_title_r: "深圳市今天国际物流技术股份有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "6",
      },
      {
        logo_img_l: "/images/logo/7.png",
        logo_title_l: "深圳市康冠技术有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "7",

        logo_img_r: "/images/logo/8.png",
        logo_title_r: "深圳科士达科技股份有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "8",
      },
      {
        logo_img_l: "/images/logo/9.png",
        logo_title_l: "深圳市蓝海华腾技术股份有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "9",

        logo_img_r: "/images/logo/10.png",
        logo_title_r: "深圳领威科技有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "10",
      },
      {
        logo_img_l: "/images/logo/11.png",
        logo_title_l: "深圳市三利谱光电科技股份有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "11",

        logo_img_r: "/images/logo/12.png",
        logo_title_r: "深圳市三诺数字科技有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "12",
      },
      {
        logo_img_l: "/images/logo/13.png",
        logo_title_l: "蛇口南顺面粉有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "13",

        logo_img_r: "/images/logo/14.png",
        logo_title_r: "深圳市深铃车业有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "14",
      },
      {
        logo_img_l: "/images/logo/15.png",
        logo_title_l: "深南电路股份有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "15",

        logo_img_r: "/images/logo/16.png",
        logo_title_r: "深圳市深赛尔股份有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "16",
      },
      {
        logo_img_l: "/images/logo/17.png",
        logo_title_l: "深圳市同方电子新材料有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "17",

        logo_img_r: "/images/logo/18.png",
        logo_title_r: "深圳市新纶科技股份有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "18",
      },
      {
        logo_img_l: "/images/logo/19.png",
        logo_title_l: "深圳新宙邦科技股份有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "19",

        logo_img_r: "/images/logo/20.png",
        logo_title_r: "深圳怡钛积科技股份有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "20",
      },
      {
        logo_img_l: "/images/logo/21.png",
        logo_title_l: "亿和精密金属制品（深圳）有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "21",

        logo_img_r: "/images/logo/22.png",
        logo_title_r: "深圳市赢合科技股份有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "22",
      },
      {
        logo_img_l: "/images/logo/23.png",
        logo_title_l: "深圳市证通电子股份有限公司",
        logo_poll_l: "88888票",
        logo_num_l: "23",

        logo_img_r: "/images/logo/24.png",
        logo_title_r: "深圳中科强华科技有限公司",
        logo_poll_r: "88888票",
        logo_num_r: "24",
      },
    ];

    this.setData({
      logo_key:logo_data
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var man_data = [
      {
        man_img_l: "/images/man/1.png",
        man_name_l:"王合球",
        man_title_l: "深圳欧陆通电子有限公司董事长",
        man_poll_l: "88888票",
        man_num_l: "1",

        man_img_r: "/images/man/2.png",
        man_name_r:"刘国民",
        man_title_r: "深圳市深赛尔股份有限公司董事长",
        man_poll_r: "88888票",
        man_num_r: "2",
      },
      {
        man_img_l: "/images/man/3.png",
        man_name_l:"刘骏",
        man_title_l: "深圳市日联科技有限公司董事长",
        man_poll_l: "88888票",
        man_num_l: "3",

        man_img_r: "/images/man/4.png",
        man_name_r:"李荣",
        man_title_r: "深圳市贝加电子材料有限公司董事长",
        man_poll_r: "88888票",
        man_num_r: "4",
      },
      {
        man_img_l: "/images/man/5.png",
        man_name_l:"邱文渊",
        man_title_l: "深圳市蓝海华腾技术股份有限公司总经理",
        man_poll_l: "88888票",
        man_num_l: "5",

        man_img_r: "/images/man/6.png",
        man_name_r:"张建军",
        man_title_r: "深圳市三利谱光电科技股份有限公司总经理",
        man_poll_r: "88888票",
        man_num_r: "6",
      },
      {
        man_img_l: "/images/man/7.png",
        man_name_l:"张耀华",
        man_title_l: "亿和精密金属制品（深圳）有限公司总裁",
        man_poll_l: "88888票",
        man_num_l: "7",

        man_img_r: "/images/man/8.png",
        man_name_r:"陈德庆",
        man_title_r: "深圳市和宏实业股份有限公司总裁",
        man_poll_r: "88888票",
        man_num_r: "8",
      },
      {
        man_img_l: "/images/man/9.png",
        man_name_l: "侯若洪",
        man_title_l: "深圳光韵达光电科技股份有限公司董事长",
        man_poll_l: "88888票",
        man_num_l: "9",

        man_img_r: "/images/man/10.png",
        man_name_r:"顾进跃",
        man_title_r: "深圳市威勒科技股份有限公司总经理",
        man_poll_r: "88888票",
        man_num_r: "10",
      },
      {
        man_img_l: "/images/man/11.png",
        man_name_l:"曾胜强",
        man_title_l: "深圳市证通电子股份有限公司总裁",
        man_poll_l: "88888票",
        man_num_l: "11",

        man_img_r: "/images/man/12.png",
        man_name_r:"薛广洲",
        man_title_r: "深圳中科强华科技有限公司副总经理",
        man_poll_r: "88888票",
        man_num_r: "12",
      },

    ]

    this.setData({
      man_key: man_data
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */


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

