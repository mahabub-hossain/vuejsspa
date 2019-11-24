<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Register Here</div>
                    <div class="card-body">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6">
                                    <input id="email" type="text" class="form-control" v-model="register.name" placeholder="Write Your Name"  required autocomplete="name" autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="register.email" placeholder="Write Your Email"  required autocomplete="email" autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="register.password" placeholder="Write Your Password" required autocomplete="current-password">
                                        <span class="invalid-feedback" role="alert">
                                            <strong></strong>
                                        </span>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-3">
                                    <button type="submit" @click='registerIt' class="btn btn-primary">Register</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
		data() {
			return {
				register:{
					name:"",
					email:"",
					password:""
				}
			}
		},
		methods:{
			registerIt() {
				this.$axios.post('http://localhost:8000/api/register/',this.register)
				.then(response => {
					let token=response.data.user.token;
					localStorage.setItem('token',token);
                    console.log(token);
				});
			}
		}
	}
</script>