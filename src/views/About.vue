<template>
  <div class="about">
    <h1>{{ $t("this_is_an_about_page") }}</h1>
  </div>
  <el-date-picker
    type="date"
    v-model="dateValue"
    placeholder="Pick a date"
    style="width: 100%"
  ></el-date-picker>
</template>

<script setup>
import { ref } from "vue";
const dateValue = ref("");
</script>
