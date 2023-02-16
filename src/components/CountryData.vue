<script>
export default {
  data() {
    return {
      country_gdp: 1200000.00,
      country_population: 1000,
    }
  }
}
</script>

<template>
  <div class="country_data">
    <div class="data">Country GPD: <b>${{ country_gdp.toFixed(2).toLocaleString() }}</b></div>
    <div class="data">Country Population: <b>{{ country_population.toFixed(0) }}</b></div>
    <div class="data">GPD PerCapita: <b>${{ (country_gdp/country_population).toFixed(2).toLocaleString() }}</b></div>
  </div>
</template>
