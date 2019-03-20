import Vue from 'vue';
// import Vuex from 'vuex';
import store from '@/store';
// import Main from '@/views/Main';
import LotteryNumber from '@/components/LotteryNumber';
import es6Promise from 'es6-promise';

es6Promise.polyfill();

describe('LotteryNumber.vue', () => {
  it('추첨번호 6개와 보너스 번호가 모두 다른가?', () => {
    const vm = new Vue({
      template: '<lottery-number></lottery-number>',
      components: {
        LotteryNumber,
      },
      store,
    }).$mount();

    let list = vm.$store.getters.lotteryNumber.slice(0);
    list.push(vm.$store.getters.lotteryBonus);

    const set = new Set();
    list.map(num => set.add(num));

    expect(set.size).to.equal(7);
  });
});
