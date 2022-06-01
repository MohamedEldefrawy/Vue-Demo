<template>
  <div class="d-flex flex-column justify-content-center align-items-center w-100 p-5">
    <InputText placeholder="ID" type="number" v-model="this.newAdmin.id" class="w-50 m-2"/>
    <InputText placeholder="First Name" type="text" v-model="this.newAdmin.first_name" class="w-50 m-2"/>
    <InputText placeholder="Last Name" type="text" v-model="this.newAdmin.last_name" class="w-50 m-2"/>
    <InputText placeholder="Email" type="email" v-model="this.newAdmin.email" class="w-50 m-2"/>
    <Dropdown v-model="this.newAdmin.gender" :options="genderOptions" optionLabel="name"
              placeholder="Gender" class="w-50 m-2"/>
    <Button label="Submit" @click="submit"/>
  </div>
</template>

<script>
import AdminsServices from "@/services/AdminsServices.mjs";
// eslint-disable-next-line no-unused-vars
import axiFos from "axios";

export default {
  name: "CreateComponent",
  data() {
    return {
      adminService: new AdminsServices(),
      newAdmin: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: ""
      },
      genderOptions: [{
        name: "Male",
        value: "Male"
      }, {
        name: "Female",
        value: "Female"
      }]
    }
  },
  methods: {
    submit() {
      this.newAdmin.gender = this.newAdmin.gender.name;
      this.adminService.createAdmin(this.newAdmin).then(response => {
        if (response === 201)
          this.$router.push('/admins');
        else
          alert("couldn't create new admin")
      })
    }
  }
}
</script>

<style scoped>

</style>