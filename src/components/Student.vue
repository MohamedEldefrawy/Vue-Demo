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
    <template v-for="(student,index) in students" :key="index">
      <tr>
        <td>{{ student.name }}</td>
        <td>{{ student.address }}</td>
        <td>{{ student.age }}</td>
        <td>
          <button @click="$emit('onDelete',{'index':index,'type':'student'})" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "studentComponent",
  props: ['students'],
}
</script>

<style scoped>

</style>