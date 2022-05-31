<template>
  <div class="container">
    <div class="p-5 m-auto w-50">
      <div class="row mb-2">
        <div class="col-12 input-group mb-3">
          <input v-model="inputData.name" type="text" class="form-control" placeholder="name"
                 aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 input-group mb-3">
          <input v-model="inputData.address" type="text" class="form-control" placeholder="address"
                 aria-label="Address"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="row mb-2">
        <div class=" col-12 input-group mb-3">
          <input v-model="inputData.age" type="number" class="form-control" placeholder="age" aria-label="age"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12">
          <select v-model="inputData.selectionValue" class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example">
            <option selected>Select Role</option>
            <option value="1">Admin</option>
            <option value="2">Student</option>
          </select>
        </div>

      </div>
      <div class="row mb-2">
        <div class=" col-12 input-group mb-3">
          <input type="button" @click="$emit('onSendClicked',inputData)" class="btn btn-dark" value="send">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "formComponent",
  emits: ["onSendClicked"],
  data() {
    return {
      inputData: {
        name: "",
        address: "",
        age: 0,
        selectionValue: 0
      },
    }
  },
  methods: {}
}
</script>
<style scoped>

</style>