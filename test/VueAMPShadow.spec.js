import { mount } from '@vue/test-utils';
import VueAMPShadow from '../src/components/VueAMPShadow.vue';

describe('VueAMPShadow.vue', () => {
  it('mount', () => {
    const requestURL = 'https://www.ampproject.org/';
    const wrapper = mount(VueAMPShadow, {
      propsData: {
        src: requestURL,
      },
    });
    expect(wrapper.is(VueAMPShadow)).toBe(true);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().src).toBe(requestURL);
  });
});
