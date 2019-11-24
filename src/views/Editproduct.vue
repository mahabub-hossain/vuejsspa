<template>
    <span>
        <section class="content">
            <div class="row">
                <div class="col-12">
                    <div class="card-body">
                        <div class="card-header"><h3>Edit Product</h3>
                        <form endtype="multipart/form-data" @submit.prevent="updateProduct()">   
                            <div class="form-group row">
                                <label for="inputname" class="col-sm-2 col-form-label">Product Name</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputname" v-model="form.name" placeholder="Product Name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inptselect" class="col-sm-2 col-form-label">Select Type</label>
                                 <div class="col-sm-8">
                                    <select class="form-control" id="inptselect" v-model="form.category">
                                     <option value="All">Select Option</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Breakfast">BreakFast</option>
                                        <option value="Dinner">Dinner</option>
                                        <option value="Coffee">Coffee</option>
                                        <option value="Snacks">Snacks</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputshort" class="col-sm-2 col-form-label">Product Short Description</label>
                                <div class="col-sm-8">
                                    <textarea  class="form-control" id="inputshort" rows="4" v-model="form.shortdes" placeholder="Product Short Description"></textarea> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputlong" class="col-sm-2 col-form-label">Product Detail Description</label>
                                <div class="col-sm-8">
                                    <textarea  class="form-control" id="inputlong" rows="6" v-model="form.longdes" placeholder="Product Long Description"></textarea> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputPrice" v-model="form.price" placeholder="Price">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputimage" class="col-sm-2 col-form-label">Image</label>
                                <div class="col-sm-8">
                                    <input @change = "changePhoto($event)" type="file" class="form-control" id="inputimage" name="photo" placeholder="Password">
                                    <img :src="updateImage()" alt="" width="80" height="80">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-8">
                                    <input type="submit" class="btn btn-success btn-md btn-block" >
                                </div>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
        </div>
        </section>
    </span>
</template>
<script>
export default {
    name:"Editproduct",
     data () {
    return {
        imgpath:process.env.VUE_APP_imgpath,
      form: new this.$form({
        name:"",
        shortdes:"",
        longdes:"",
        price:"",
        photo:"",
        category:""
      })
    }
  },
  created(){
            this.$axios.get(`http://localhost:8000/api/product/${this.$route.params.productid}`)
                .then((response)=>{
                    console.log(response.data)
                    this.form.fill(response.data.product)
                })
        },
  methods: {
    //   photoShow(event){
          
    //       let file=event.target.files[0];
    //       //console.log(file);
    //       let reader = new FileReader();
    //       reader.onload = event =>{
    //           this.form.photo=event.target.result;
    //       }
    //       reader.readAsDataURL(file);

    //   },
    changePhoto(event){
        let file = event.target.files[0];
        let reader = new FileReader();
            reader.onload = event => {
                this.form.photo = event.target.result
                console.log(event.target.result)
            };
            reader.readAsDataURL(file);
        // if(file.size>10){
        //     this.$swal({
        //         type: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!',
        //         footer: '<a href>Why do I have this issue?</a>'
        //     })
        // }else{
            
        // }
    },
    
      updateProduct(){
          this.form.post(process.env.VUE_APP_baseURL+`updateproduct/${this.$route.params.productid}`)
          .then(response => {
                console.log(response);
                    this.$router.push('/product-list')
                    this.$toast.fire({
                    icon: 'success',
                    title: 'Product Was Updated Successfully'
                    })
				});
      },
     updateImage(){
        let img = this.form.photo;
        let imgpath =process.env.VUE_APP_imgpath; 
        if(img.length>100){
            return  this.form.photo
        }else{
            return imgpath+`/${this.form.photo}`
        }
    }
  },
  
}
</script>