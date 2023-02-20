<script>
export default {
  data() {
    return {
      table_title: "Commerce",
      titles: ["Imports", "Exports"],
      data: [["1a linea", "segunda linea"],
             ["3a linea", "cuarta linea"]]
    }
  },
  props: {
    table_title: String,
    titles: Array,
    data: Array
  }
}
</script>

<template>
  <div>
    <table class="data-table">
      <tr>
        <th :colspan="titles.length">{{ table_title }}</th>
      </tr>
      <tr>
        <th v-for="title in titles">{{ title }}</th>
      </tr>
      <tr v-for="row in data">
        <td v-for="data in row">{{data}}</td>
      </tr>
    </table>
  </div>
</template>
