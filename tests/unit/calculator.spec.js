import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 4;
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9);
  })

  it('should subtract 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3);
  })

  it('should multiply 3 by 5 and get 15', () =>{
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  })
})
