<template>
  <div class="p-4 m-2">
    <Button label="New" icon="pi pi-plus" class="p-button-success m-5" @click="openNew"/>
    <DataTable :value="admins" :paginator="true" :rows="10"
               paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
               :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
      <Column field="id" header="ID"></Column>
      <Column field="first_name" header="First Name"></Column>
      <Column field="last_name" header="Last Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="gender" header="Gender"></Column>
      <Column header="Action" :exportable="false" style="min-width:8rem">
        <template #body="slotProps">
          <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                  @click="deleteProduct(slotProps.data)"/>
        </template>
      </Column>
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" class="p-button-text"/>
      </template>
      <template #paginatorend>
        <Button type="button" icon="pi pi-cloud" class="p-button-text"/>
      </template>
    </DataTable>
  </div>
</template>

<script>
import AdminsServices from '../services/AdminsServices.mjs'
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";

export default {
  name: "adminComponent",
  setup() {
    // eslint-disable-next-line no-undef
    const admins = ref([]);

    // eslint-disable-next-line no-undef
    let admin = ref({});

    // eslint-disable-next-line no-undef
    let productDialog = ref(false);

    // eslint-disable-next-line no-undef
    let deleteProductDialog = ref(false);

    const router = useRouter()
    const route = useRoute()


    function deleteProduct(admin) {
      this.admin = admin
      new AdminsServices().deleteAdmin(admin.id).then(response => {
        if (response === 200) {
          this.admins = this.admins.filter(val => val.id !== this.admin.id);
          alert("deleted successfully..");
        } else
          alert("Couldn't delete record..");
      });
    }

    function editProduct(product) {
      this.product = {...product};
      this.adminDialog = true;
    }

    function confirmDeleteProduct(product) {
      this.product = product;
      console.log(this.product);
      this.deleteAdminDialog = true;
    }

    function openNew() {
      router.push({
        name: 'create',
      })
    }

    onMounted(() => {
      new AdminsServices().getAdmins().then(data => {
        admins.value.push(...data);
      }).catch((error) => {
        alert(error);
      });
    });

    return {
      admins,
      admin,
      productDialog,
      deleteProductDialog,
      deleteProduct,
      editProduct,
      confirmDeleteProduct,
      openNew,
      route,
      router
    }
  }
}
</script>

<style scoped>

</style>