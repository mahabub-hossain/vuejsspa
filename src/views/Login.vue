<template>
    <div>
        <!-- Start Slider Area -->
        <div class="slider__area slider--one">
            <div class="slider__activation--1">
                <!-- Start Single Slide -->
                <div class="slide fullscreen bg-image--1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="slider__content">
                                    <div class="slider__inner">
                                        <h2>খাইয়াম</h2>
                                        <h1>food delivery & service</h1>
                                        <div class="slider__input">
                                            <input type="email" placeholder="Phone Email" v-model="login.email">
                                            <input  class="res__search" type="password" placeholder="Password" v-model="login.password">
                                            <div class="src__btn">
                                                <a type="submit" @click='logItIn'>Login</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Slide -->
            </div>
        </div>
        <!-- End Slider Area -->

    </div><!-- //Main wrapper -->
</template>
<script>
	export default {
		data() {
			return {
				login:{
					email:"",
					password:""
				}
			}
		},
		methods:{
			logItIn(){
				this.$axios.post('http://localhost:8000/api/login/',this.login)
				.then(response => {
					let newToken=response.data.user.api_token;
                    let type = response.data.user.user_type;
                    localStorage.setItem('token',newToken);
                    localStorage.setItem('type',type);

					// window.token=newToken;
					// let user=response.data.user;	
					// localStorage.setItem('token',newToken);
					// localStorage.setItem('user',JSON.stringify(user));
					// window.axios.defaults.params={api_token:newToken}
					// Event.$emit('login',user);
					this.$router.push('/admin-dashboard');
				});
			}
		}
	}
</script>