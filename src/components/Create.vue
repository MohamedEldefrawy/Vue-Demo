<template>
  <div class="d-flex flex-column justify-content-center align-items-center w-100 p-5">
    <InputText placeholder="ID" type="number" v-model="newAdmin.id" class="w-50 m-2"/>
    <InputText placeholder="First Name" type="text" v-model="newAdmin.first_name" class="w-50 m-2"/>
    <InputText placeholder="Last Name" type="text" v-model="newAdmin.last_name" class="w-50 m-2"/>
    <InputText placeholder="Email" type="email" v-model="newAdmin.email" class="w-50 m-2"/>
    <Dropdown v-model="newAdmin.gender" :options="genderOption" optionLabel="name"
              placeholder="Gender" class="w-50 m-2"/>
    <Button label="Submit" @click="submit"/>
  </div>
</template>

<script>
import AdminsServices from "@/services/AdminsServices.mjs";
import {useRoute, useRouter} from "vue-router";

import {ref} from 'vue';

export default {
  name: "CreateComponent",
  setup() {
    const router = useRouter()
    const route = useRoute()

    let newAdmin = ref({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      gender: ""
    })

    const genderOption = ref([
      {
        name: "Male",
        value: "Male"
      }, {
        name: "Female",
        value: "Female"
      }
    ])

    function submit() {
      newAdmin.value.gender = newAdmin.value.gender.name;
      new AdminsServices().createAdmin(newAdmin.value).then(response => {
        if (response === 201)
          router.push({
            name: 'admins',
          })
        else
          alert("couldn't create new admin")
      })
    }

    return {
      newAdmin,
      genderOption,
      submit,
      route,
      router
    }
  }
}
</script>

<style scoped>

</style>