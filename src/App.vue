<template>

  <img alt="Vue logo" src="./assets/logo.png">

  <div class="row mb-2">
    <div class="col-sm-12 col-md-4 col-lg-4">
      <button @click="onFormClicked" class="btn btn-dark">Form</button>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4">
      <button @click="onStudentsClicked" class="btn btn-dark">Students</button>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4">
      <button @click="onAdminsClicked" class="btn btn-dark">Admins</button>
    </div>
  </div>

  <template v-if="isFormClicked">
    <form-component @onSendClicked="saveData"/>
  </template>


  <template v-if="isStudentsClicked">
    <student-component @onDelete="deleteItem" :students="students"/>
  </template>

  <template v-if="isAdminsClicked">
    <admin-component :admins="admins" @onDelete="deleteItem"/>
  </template>
</template>

<script>
import formComponent from './components/Form.vue'
import adminComponent from './components/Admin.vue'
import studentComponent from './components/Student.vue'

export default {
  name: 'App',
  data() {
    return {
      isFormClicked: true,
      isAdminsClicked: false,
      isStudentsClicked: false,
      admins: [],
      students: [],
    }
  },
  components: {
    formComponent,
    adminComponent,
    studentComponent
  },
  methods: {
    onFormClicked() {
      this.isFormClicked = true;
      this.isAdminsClicked = false;
      this.isStudentsClicked = false;
    },
    onStudentsClicked() {
      this.isFormClicked = false;
      this.isAdminsClicked = false;
      this.isStudentsClicked = true;
    },
    onAdminsClicked() {
      this.isFormClicked = false;
      this.isAdminsClicked = true;
      this.isStudentsClicked = false;
    },
    saveData(data) {
      if (data.selectionValue === "1") {
        this.admins.push(data);

      } else if (data.selectionValue === "2") {
        this.students.push(data);
      } else {
        alert("Invalid data");
        console.log(data)
      }
    },
    deleteItem(data) {
      if (data.type === "admin") {
        this.admins.splice(data.index, 1);
      } else {
        this.students.splice(data.index, 1);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
