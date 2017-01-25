import Vue from 'vue'
import Common from 'src/components/Common'

describe('Common.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Common)
    })
    expect(vm.$el.querySelector('.common h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
