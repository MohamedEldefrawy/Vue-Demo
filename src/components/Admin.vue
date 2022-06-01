<template>
  <div>
    <DataTable :value="this.admins" :paginator="true" :rows="10"
               paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
               :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
      <Column field="id" header="ID"></Column>
      <Column field="first_name" header="First Name"></Column>
      <Column field="last_name" header="Last Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="gender" header="Gender"></Column>
      <ColumnGroup>
        <
      </ColumnGroup>
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

export default {
  name: "adminComponent",
  data() {
    return {
      admins: []
    }
  },
  created() {
    let adminService = new AdminsServices();
    adminService.getAdmins().then(data => {
      this.admins = data;
    });
  }
}
</script>

<style scoped>

</style>