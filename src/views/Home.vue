<template>
  <div class="home">
    <div>
      <select @change="handleChangeLanguage" v-model="sLanguage">
        <option value="zh_tw">中文</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </div>
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld :propsMsg="$t('propsI18nValue')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    const sLanguage = computed(() => {
      return store.getters.getLanguage;
    });
    const { locale } = useI18n();
    locale.value = sLanguage.value;

    const handleChangeLanguage = (e) => {
      store.dispatch("handSetLanguageState", e.target.value);
      locale.value = e.target.value;
    };

    return {
      sLanguage,
      handleChangeLanguage,
    };
  },
};
</script>
