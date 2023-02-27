<script setup>
import HomePage from './components/HomePage.vue'
import ResourcesData from './components/ResourcesData.vue'
import PoliticsPage from './components/PoliticsPage.vue'
</script>

<script>
export default {
  data() {
    return {
      page: 'home'
    }
  }
}
</script>

<template>
<main>
  <div class="master_div">
    <div>
      <ResourcesData></ResourcesData>
    </div>
    <div class="main_div">
      <div class="tabs_bar">
        <div v-if="page == 'home'" class="tab_icon active">
          <font-awesome-icon icon="fa-solid fa-house" />
        </div>
        <div v-else @click="page = 'home'" class="tab_icon">
          <font-awesome-icon icon="fa-solid fa-house" />
        </div>
        <div v-if="page == 'diplomacy'" class="tab_icon active">
          <font-awesome-icon icon="fa-solid fa-globe" />
        </div>
        <div v-else @click="page = 'diplomacy'" class="tab_icon">
          <font-awesome-icon icon="fa-solid fa-globe" />
        </div>
        <div v-if="page == 'economy'" class="tab_icon active">
          <font-awesome-icon icon="fa-solid fa-money-bill" />
        </div>
        <div v-else @click="page = 'economy'" class="tab_icon">
          <font-awesome-icon icon="fa-solid fa-money-bill" />
        </div>
        <div v-if="page == 'politics'" class="tab_icon active">
          <font-awesome-icon icon="fa-solid fa-check-to-slot" />
        </div>
        <div v-else @click="page = 'politics'" class="tab_icon">
          <font-awesome-icon icon="fa-solid fa-check-to-slot" />
        </div>
        <div v-if="page == 'config'" class="tab_icon active">
          <font-awesome-icon icon="fa-solid fa-wrench" />
        </div>
        <div v-else @click="page = 'config'" class="tab_icon">
          <font-awesome-icon icon="fa-solid fa-wrench" />
        </div>
      </div>
      <div class="tab_data"> <!-- MAIN TAB -->
        <div v-if="page == 'home'">
          <HomePage></HomePage>
        </div>
        <div class="all_heigh" v-if="page == 'politics'">
          <PoliticsPage></PoliticsPage>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

