<template>
<span id="productlist">
        <div class="container">
            <v-client-table 
                :data="getallproduct"
                :columns="columns" 
                :options="options">
            </v-client-table>
        </div>
          
    </span>
    
</template>
<script>
export default {
    name:"Productlist",
       data() {
        return {
            columns: ['id', 'name', 'price','photo'],
            tableData:[],
            options: {
                headings: {
                    id: 'ID',
                    name: 'Product Name',
                     photo: 'photo',
                    price: 'price'
                },
                sortable: ['name', 'price'],
                filterable: ['name', 'price']
            }
        }
    },
    // data() {
    //     return {
    //         imgpath:process.env.VUE_APP_imgpath
    //     }
    // },
    mounted() {
        this.$store.dispatch("allproduct")
    },
    computed: {
        getallproduct(){
            return this.$store.getters.getproduct;
        }
    },
}
</script>