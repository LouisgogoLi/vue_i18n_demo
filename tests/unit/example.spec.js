import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import HelloWorld from "@/components/HelloWorld.vue";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
});

import store from "@/store";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const propsMsg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { propsMsg },
      global: {
        plugins: [i18n],
      },
    });
    expect(wrapper.text()).toMatch(propsMsg);
  });
});

describe("HomeView.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [i18n, store],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
