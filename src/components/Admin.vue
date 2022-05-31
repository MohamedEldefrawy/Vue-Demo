<template>
  <table class="table table-bordered table-hover text-center">
    <thead>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Age</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(admin,index) in admins" :key="index">
      <tr>
        <td>{{ admin.name }}</td>
        <td>{{ admin.address }}</td>
        <td>{{ admin.age }}</td>
        <td>
          <button @click="$emit('onDelete',{'index':index,'type':'admin'})" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "adminComponent",
  props: ['admins'],
}
</script>

<style scoped>

</style>