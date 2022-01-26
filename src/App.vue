<template>
  <el-config-provider :locale="localeElement">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </el-config-provider>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import zhTwElement from "element-plus/lib/locale/lang/zh-tw";
import enElement from "element-plus/lib/locale/lang/en";
const localeElement = ref(zhTwElement);
import { useStore } from "vuex";
const store = useStore();
const sLanguage = computed(() => {
  return store.getters.getLanguage;
});

const fnChangeLanguage = () => {
  console.log(sLanguage.value);
  if (sLanguage.value === "en") {
    localeElement.value = enElement;
  } else if (sLanguage.value === "zh_tw") {
    localeElement.value = zhTwElement;
  }
};

watch(
  () => sLanguage.value,
  () => {
    fnChangeLanguage();
  }
);

onMounted(() => {
  fnChangeLanguage();
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
