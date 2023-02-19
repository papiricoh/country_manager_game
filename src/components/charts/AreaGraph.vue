<script>
export default {
  data() {
    return {
        series: [{
            name: "STOCK ABC",
            data: [1000, 1000, 1000]
        }],
        chartOptions: {
            chart: {
                type: 'area',
                height: 900,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            toolbar: {
                show: false,
            },
            
            title: {
                text: 'Country GDP',
                align: 'left',
            },
            labels: [1, 2, 3, 4, 5],
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                show: false,
            }
        },
    }
  }
}
</script>

<template>
<div id="chart">
    <apexchart type="area" width="800" height="400" :options="chartOptions" :series="series"></apexchart>
</div>
</template>
