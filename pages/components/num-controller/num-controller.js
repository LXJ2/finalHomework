// pages/components/num-controller/num-controller.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nameId: {
      type: String
    },
    num: {
      type: Number,
      value: 0
    },
    int: {
      type: Number,
      value: 1
    },
    min: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    numChange() {
      this.triggerEvent('numChange', {
        num: this.properties.num,
        nameId: this.properties.nameId
      })
    },
    add() {
      this.setData({
        num: this.properties.num + this.properties.int
      })
      this.numChange()
    },
    sub() {
      this.setData({
        num: this.properties.num - this.properties.int
      })
      this.numChange()
    }
  }
})