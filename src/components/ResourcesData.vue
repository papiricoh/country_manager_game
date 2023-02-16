
<script>
export default {
  data() {
    return {
      influence_points: 200,
      personal_money: 10000,
      diplomatic_points: 100,
      authority_points: 200
    }
  }
}
</script>

<template>
  <div class="resources_data">
    <div>Personal Money: <b>${{ personal_money.toLocaleString() }}</b></div>
    <div>Influence Points: <b>{{ influence_points }}</b></div>
    <div>Diplomatic Points: <b>{{ diplomatic_points }}</b></div>
    <div>Authority Points: <b>{{ authority_points }}</b></div>
  </div>
</template>
