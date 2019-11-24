<template>

    <span id="productlist">
          
          <section class="content">
            <div class="row">
                <div class="col-12">
                    <div class="card-body">
                        <div class="card-header">
                            <h3>Product List</h3>
                            <div class="card-tools">
                                <button class="btn btn-primary pull-right">
                                    <router-link to="/add-product" style="color:#fff"> Create Product</router-link>
                                </button>
                            </div><br>
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Serial</th>
                                        <th>Name</th>
                                        <th>Short Description</th>
                                        <th>Photo</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product,index) in getallproduct" :key="product.id">
                                        <td>{{index+1}}</td>
                                        <td>{{product.name}}</td>
                                        <td>{{product.shortdes}}</td>
                                        <td><img :src="imgpath+'/'+product.photo" width="100" height="80"></td>
                                        <td>{{product.price}}</td>
                                        <td>
                                            <router-link :to="`/edit-product/${product.id}`"><i class=" btn btn-primary btn-sm fa fa-edit"> </i></router-link>
                                          
                                         <i class="btn btn-danger btn-sm fa fa-trash"></i>
                                        </td>
                                    </tr>
                                </tbody>
                        
                            </table>
                        </div>
                    </div>
                </div>
            </div>
          </section>
    </span>
</template>
<script>
export default {
    name:"Productlist",
    data() {
        return {
            imgpath:process.env.VUE_APP_imgpath
        }
    },
    mounted() {
        this.$store.dispatch("allproduct")
    },
    computed: {
        getallproduct(){
            return this.$store.getters.getproduct
        }
    },
}
</script>