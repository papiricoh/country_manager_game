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
      date_year: 1900
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
        <CountryData></CountryData>
      </div>
    </div>
    <div class="box fullscreen flex-column">
      <div class="flex-data">
        <div class="chart_container">
          <AreaGraph></AreaGraph>
        </div>
        <div class="box data-box">
          <div class="box">
            <DataTable></DataTable>
          </div>
          <div class="box">
            <DataTable></DataTable>
          </div>
          <div class="box">
            <DataTable></DataTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
