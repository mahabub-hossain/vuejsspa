<template>
   <div id="app">
            <header class="htc__header bg--white" v-if="isAdmin=='user'">
            <!-- Start Mainmenu Area -->
            <div id="sticky-header-with-topbar" class="mainmenu__wrap sticky__header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-sm-4 col-md-6 order-1 order-lg-1">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="images/logo/foody.png" alt="logo images">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-sm-4 col-md-2 order-3 order-lg-2">
                            <div class="main__menu__wrap">
                                <nav class="main__menu__nav d-none d-lg-block">
                                    <ul class="mainmenu">
                                        <li><router-link to="/">Home</router-link></li>
                                         <!--<li class="drop"><a href="menu-list.html">Menu</a>
                                            <ul class="dropdown__menu">
                                                <li><a href="menu-list.html">Menu List</a></li>
                                                <li><a href="menu-details.html">Menu Details</a></li>
                                            </ul>
                                        </li>-->
                                         <!--<li><a href="gallery.html">Gallery</a></li>-->
                                        <li><router-link to="/about">About</router-link></li>
                                        

                                         <!--<li class="drop"><a href="blog-mesonry.html">Blog</a>
                                            <ul class="dropdown__menu">
                                                <li><a href="blog-mesonry.html">Blog Mesonry</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>-->
                                         <li><router-link to="/user" >User</router-link></li>
                                          <!--<li class="drop"><a href="#">Pages</a>
                                            <ul class="dropdown__menu">
                                                <li><a href="service.html">Service</a></li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="contact.html">Contact Page</a></li>
                                            </ul>
                                        </li>-->
                                        <li><router-link to="/logout" v-if="isLoggedIn">Logout {{isAdmin}}</router-link></li>
                                           <!--<li><a href="contact.html">Contact</a></li> 
                                        <li><a>Settings</a></li>-->
                                         <li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
                                         
                                    </ul>
                                </nav>
                                
                            </div>
                        </div>
                        <div class="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                            <div class="header__right d-flex justify-content-end">
                                <div class="log__in">
                                    <a class="accountbox-trigger" @click="isregister=!isregister"><i class="zmdi zmdi-account-o"></i></a>
                                </div>
                                <div class="shopping__cart">
                                    <a class="minicart-trigger" @click="isActive=!isActive" href="#"><i class="zmdi zmdi-shopping-basket"></i></a>
                                    <div class="shop__qun">
                                        <span>03</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Mobile Menu -->
                        <div class="mobile-menu d-block d-lg-none"></div>
                    <!-- Mobile Menu -->
                </div>
            </div>
            <!-- End Mainmenu Area -->
        </header>
          <header class="htc__header bg--white" v-if="isAdmin=='admin'">
            <div id="sticky-header-with-topbar" class="mainmenu__wrap sticky__header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-sm-4 col-md-6 order-1 order-lg-1">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="images/logo/foody.png" alt="logo images">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-sm-4 col-md-2 order-3 order-lg-2">
                            <div class="main__menu__wrap">
                                <nav class="main__menu__nav d-none d-lg-block">
                                    <ul class="mainmenu">
                                        <li><router-link to="/add-product">Add Food</router-link></li>
                                        <li><router-link to="/product-list">Product List</router-link></li>
                                        <li><router-link to="/about">Order</router-link></li>
                                         <li><router-link to="/user" >User</router-link></li>
                                        <li><router-link to="/logout" v-if="isLoggedIn">Logout {{isAdmin}}</router-link></li>
                                         <li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
                                         
                                    </ul>
                                </nav>
                                
                            </div>
                        </div>
                        <div class="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                            
                        </div>
                    </div>
                    <!-- Mobile Menu -->
                        <div class="mobile-menu d-block d-lg-none"></div>
                    <!-- Mobile Menu -->
                </div>
            </div>
            <!-- End Mainmenu Area -->
        </header>
           <router-view />
                 <div class="cartbox-wrap" :class="{isvisible:isActive}">
                 <div class="body-overlay" @click="isActive=!isActive"></div>
          <div class="cartbox text-right">
              <button class="cartbox-close" @click="isActive=!isActive"><i class="zmdi zmdi-close"></i></button>
              <div class="cartbox__inner text-left">
                  <div class="cartbox__items">
                      <!-- Cartbox Single Item -->
                      <div class="cartbox__item">
                          <div class="cartbox__item__thumb">
                              <a href="product-details.html">
                                  <img src="images/blog/sm-img/1.jpg" alt="small thumbnail">
                              </a>
                          </div>
                          <div class="cartbox__item__content">
                              <h5><a href="product-details.html" class="product-name">Vanila Muffin</a></h5>
                              <p>Qty: <span>01</span></p>
                              <span class="price">$15</span>
                          </div>
                          <button class="cartbox__item__remove">
                              <i class="fa fa-trash"></i>
                          </button>
                      </div><!-- //Cartbox Single Item -->
                      <!-- Cartbox Single Item -->
                      <div class="cartbox__item">
                          <div class="cartbox__item__thumb">
                              <a href="product-details.html">
                                  <img src="images/blog/sm-img/2.jpg" alt="small thumbnail">
                              </a>
                          </div>
                          <div class="cartbox__item__content">
                              <h5><a href="product-details.html" class="product-name">Wheat Bread</a></h5>
                              <p>Qty: <span>01</span></p>
                              <span class="price">$25</span>
                          </div>
                          <button class="cartbox__item__remove">
                              <i class="fa fa-trash"></i>
                          </button>
                      </div><!-- //Cartbox Single Item -->
                      <!-- Cartbox Single Item -->
                      <div class="cartbox__item">
                          <div class="cartbox__item__thumb">
                              <a href="product-details.html">
                                  <img src="images/blog/sm-img/3.jpg" alt="small thumbnail">
                              </a>
                          </div>
                          <div class="cartbox__item__content">
                              <h5><a href="product-details.html" class="product-name">Mixed Fruits Pie</a></h5>
                              <p>Qty: <span>01</span></p>
                              <span class="price">$30</span>
                          </div>
                          <button class="cartbox__item__remove">
                              <i class="fa fa-trash"></i>
                          </button>
                      </div><!-- //Cartbox Single Item -->
                  </div>
                  <div class="cartbox__total">
                      <ul>
                          <li><span class="cartbox__total__title">Subtotal</span><span class="price">$70</span></li>
                          <li class="shipping-charge"><span class="cartbox__total__title">Shipping Charge</span><span class="price">$05</span></li>
                          <li class="grandtotal">Total<span class="price">$75</span></li>
                      </ul>
                  </div>
                  <div class="cartbox__buttons">
                      <a class="food__btn" href="cart.html"><span>View cart</span></a>
                      <a class="food__btn" href="checkout.html"><span>Checkout</span></a>
                  </div>
              </div>
          </div>
      </div>
        <div class="accountbox-wrapper" :class="{isvisible:isregister}">
         <div class="body-overlay" @click="isregister=!isregister"></div>
              <div class="accountbox text-left">
                  <ul class="nav accountbox__filters" id="myTab" role="tablist">
                      <li>
                          <a class="active" id="log-tab" data-toggle="tab" href="#log" role="tab" aria-controls="log" aria-selected="true">Login</a>
                      </li>
                      <li>
                          <a id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
                      </li>
                  </ul>
                  <div class="accountbox__inner tab-content" id="myTabContent">
                      <div class="accountbox__login tab-pane fade show active" id="log" role="tabpanel" aria-labelledby="log-tab">
                          <form action="#">
                              <div class="single-input">
                                  <input class="cr-round--lg" type="text" placeholder="User name or email">
                              </div>
                              <div class="single-input">
                                  <input class="cr-round--lg" type="password" placeholder="Password">
                              </div>
                              <div class="single-input">
                                  <button type="submit" class="food__btn"><span>Go</span></button>
                              </div>
                              <div class="accountbox-login__others">
                                  <h6>Or login with</h6>
                                  <div class="social-icons">
                                      <ul>
                                          <li class="facebook"><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                          <li class="twitter"><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                          <li class="pinterest"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div class="accountbox__register tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <form action="#">
                              <div class="single-input">
                                  <input class="cr-round--lg" type="text" placeholder="User name">
                              </div>
                              <div class="single-input">
                                  <input class="cr-round--lg" type="email" placeholder="Email address">
                              </div>
                              <div class="single-input">
                                  <input class="cr-round--lg" type="password" placeholder="Password">
                              </div>
                              <div class="single-input">
                                  <input class="cr-round--lg" type="password" placeholder="Confirm password">
                              </div>
                              <div class="single-input">
                                  <button type="submit" class="food__btn"><span>Sign Up</span></button>
                              </div>
                          </form>
                      </div>
                      <span class="accountbox-close-button"  @click="isregister=!isregister"><i class="zmdi zmdi-close"></i></span>
                  </div>
              </div>
          </div><!-- //Login Form -->
      <!-- Cartbox -->
  
  </div>
</template>
<script>
export default {
      data:function(){
          return{
              isActive:false,
              isregister:false,
          }
      },
        computed: {
              isLoggedIn(){ return this.$localStorage.token !== ""; },
              isAdmin(){ return this.$localStorage.type;}

        },
        
        methods: {
          dsafdgfh(){
            //  this.status='hi';
             console.log('status');
          },
        },
    }

</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
