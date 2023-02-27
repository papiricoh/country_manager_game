<script setup>
import CountryData from './CountryData.vue'
import DataTable from './DataTable.vue'
import AreaGraph from './charts/AreaGraph.vue'
</script>

<script>
export default {
  data() {
    return {
      selectedParty: "",
      parties: [
        {name: "Popular Party", ideology: "Conservative", },
        {name: "Socialist Party", ideology: "Socialist", },
        {name: "Communist Party", ideology: "Communist", },
        {name: "Nationalist Party", ideology: "Nationalist", },
        {name: "Anachist Party", ideology: "Anachist", },
        {name: "Monarquist Party", ideology: "Monarquist", },
      ]
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="flex-row space-b">
    <div></div>
    <div class="box side_box">
      <div class="subtitle">List of political parties</div>
      <ul class="party_list" >
        <li v-for="party in parties">
          <div class="party_button selected" v-if="selectedParty == party.name">{{ party.name }}</div>
          <div class="party_button" v-else @click="selectedParty = party.name">{{ party.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
