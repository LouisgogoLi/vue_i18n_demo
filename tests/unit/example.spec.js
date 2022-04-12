import { config, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

import { createI18n } from "vue-i18n";
config.global.mocks = {
  $t: (text) => text,
};
const i18n = createI18n({
  legacy: false,
});

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
