<script setup>
import CountryData from './CountryData.vue'
</script>

<script>
export default {
  data() {
    return {
      country_title: 'Kingdom of ',
      country_name: 'Spain'
    }
  }
}
</script>

<template>
  <div class="home_body">
    <div class="top_box box">
      <div class="row-flex">
        <div class="title pretitle">{{ country_title }} </div>
        <div class="title">{{ country_name }}</div>
      </div>
      <CountryData></CountryData>
    </div>
    <div class="box"></div>
  </div>
</template>
