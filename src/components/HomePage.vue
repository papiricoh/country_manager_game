<script setup>
import CountryData from './CountryData.vue'
import DataTable from './DataTable.vue'
import AreaGraph from './charts/AreaGraph.vue'
</script>

<script>
export default {
  data() {
    return {
      country_title: 'Kingdom of ',
      country_name: 'Spain',
      date_month: 1,
      date_year: 1900,

      historic_gdp: [120000000, 100000000, 100000000, 180000000],
      historic_pops: [800000, 2000000, 100000, 12800000]
    }
  },
  methods: {
    nextTurn() {
      this.date_month = this.date_month + 1;
      if(this.date_month > 12) {
        this.date_month = 1;
        this.date_year = this.date_year +1;
      }
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
      <div class="row-flex"> <!-- Next turn button-->
        <div>Month: {{ date_month }}, Year: {{ date_year }}</div>
        <div @click="nextTurn()" class="next_turn_box">
          <font-awesome-icon icon="fa-solid fa-forward" />
        </div>
        <CountryData :country_population="historic_pops[historic_pops.length - 1]" :country_gdp="historic_gdp[historic_gdp.length - 1]"></CountryData>
      </div>
    </div>
    <div class="box fullscreen flex-column">
      <div class="flex-data">
        <div class="chart_container">
          <AreaGraph :series="[{name: country_name + '\'s GDP' , data: historic_gdp}, {name: country_name + '\'s Population' , data: historic_pops}]"></AreaGraph>
        </div>
        <div class="box data-box">
          <div class="box">
            <DataTable :table_title="'County Market'" :data="[['Wheat', 'Import', 10000],
             ['Energy', 'Export', 100000]]" :titles="['Product', 'Type', 'Total Value']"></DataTable>
          </div>
          <div class="box">
            <DataTable :table_title="'Top Companies'" :data="[['NationalTelecom', 'Public', 201030]]" :titles="['Name', 'Type', 'Market Cap']"></DataTable>
          </div>
        </div>
      </div>
      <div class="flex-data">
        <div>
          <!-- Internal economy resume -->
          
        </div>
        <div>
          <!-- Internal economy graph -->
        </div>
      </div>
    </div>
  </div>
</template>
