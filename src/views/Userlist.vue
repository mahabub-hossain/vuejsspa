<template>
  <div class="container">
      <v-client-table 
          :data="tableData"
          :columns="columns" 
          :options="options">
      </v-client-table>
  </div>
</template>
<script>
export default {
  name: "Userlist",
     data() {
        return {
            columns: ['id', 'name', 'email'],
            tableData: [],
            options: {
                headings: {
                    id: 'ID',
                    name: 'User Name',
                    email: 'Email'
                },
                sortable: ['name', 'email'],
                filterable: ['name', 'email']
            }
        }
    },
  mounted() {
      this.$axios.get('http://localhost:8000/api/userlist/').then((response) => {
          console.log(response.data)
          this.tableData = response.data
        })
      
  },
 methods: {
    getAlluser(){
        this.$axios.get('http://localhost:8000/api/userlist/').then((response) => {
          console.log(response.data)
        })
    },
  },
};
</script>
<style>
.VuePagination {
  text-align: center!important;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}

</style>