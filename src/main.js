import {createApp} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

import App from './App.vue'
import adminComponent from './components/Admin.vue'
import CreateComponent from './components/Create.vue'
import HomeComponent from './components/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Dialog from "primevue/dialog";
//optional for column grouping

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/admins', component: adminComponent},
    {path: '/admins/:id', component: adminComponent},
    {path: '/admins/create', component: CreateComponent},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.component("DataTable", DataTable)
app.component("ColumnGroup", ColumnGroup)
// eslint-disable-next-line vue/multi-word-component-names
app.component("Column", Column)
// eslint-disable-next-line vue/multi-word-component-names
app.component("Button", Button)
// eslint-disable-next-line vue/multi-word-component-names
app.component("Dialog", Dialog)
app.component("InputText", InputText)
// eslint-disable-next-line vue/multi-word-component-names
app.component("Dropdown", Dropdown)
app.mount('#app')


