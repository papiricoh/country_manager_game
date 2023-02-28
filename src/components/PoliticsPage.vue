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
    getPartyByName(name) {
      for (let index = 0; index < this.parties.length; index++) {
        if(name == this.parties[index].name) {
          return this.parties[index];
        }
      }
      return null;
    },
    getPartyTitle() {
      var party = this.getPartyByName(this.selectedParty)
      if(party != null) {
        return party.name;
      }
      return "Party Screen";
    }
  }
}
</script>

<template>
  <div class="flex-row space-b">
    <div class="party_data box">
      <div class="title">{{ getPartyTitle() }}</div>
    </div>
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
