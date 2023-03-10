import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHouse, faGlobe, faMoneyBill, faWrench, faCheckToSlot, faForward)

const app = createApp(App);

app.use(VueApexCharts);

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
