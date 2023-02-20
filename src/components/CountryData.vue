<script>
export default {
  data() {
    return {
      country_gdp: 1200000.00,
      country_population: 100201,
    }
  },
  props: {
    country_gdp: Number,
    country_population: Number
  }
}
</script>

<template>
  <div class="country_data">
    <div class="data">Country GPD: <b>${{ Number(country_gdp).toLocaleString() }}</b></div>
    <div class="data">Country Population: <b>{{ Number(country_population).toFixed(0) }}</b></div>
    <div class="data">GPD PerCapita: <b>${{ Number(country_gdp/country_population).toLocaleString() }}</b></div>
  </div>
</template>
