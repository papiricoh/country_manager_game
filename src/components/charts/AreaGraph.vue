<script>
export default {
    data() {
        return {
            series: [{
                name: "STOCK ABC",
                data: [1000, 1000, 1000]
            }],
            labels: [1209999, 1400000, 1424423],
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
                    curve: 'smooth'
                },
                toolbar: {
                    show: false,
                },
                
                title: {
                    text: 'Country GDP',
                    align: 'left',
                },
                xaxis: {
                    type: 'integer',
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    show: true,
                }
            },
        }
    },
    methods: {
        generateLabels() {
            let options = this.chartOptions;
            //options['labels'] = this.labels;
            let longest = 0;
            for (let index = 0; index < this.series.length; index++) {
                if(this.series[index].data.length > longest) {
                    longest = this.series[index].data.length;
                }
                
            }
            let new_labels = [];
            for (let index = 0; index < longest + 1; index++) {
                new_labels[index] = index + 1;
            }
            options['labels'] = new_labels;
            return options;
        }
    },
    props: {
        series: Array
    }
}
</script>

<template>
<div id="chart">
    <apexchart type="area" width="800" height="400" :options="generateLabels()" :series="series"></apexchart>
</div>
</template>
