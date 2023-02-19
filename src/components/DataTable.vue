<script>
export default {
  data() {
    return {
      titles: ["Imports", "Exports"],
      data: [["1a linea", "segunda linea"],
             ["3a linea", "cuarta linea"]]
    }
  }
}
</script>

<template>
  <div>
    <table class="data-table">
      <tr>
        <th v-for="title in titles">{{ title }}</th>
      </tr>
      <tr v-for="row in data">
        <td v-for="data in row">{{data}}</td>
      </tr>
    </table>
  </div>
</template>
