<template>
  <transition name="slide-right">
    <div class="Foo">
      <h1>{{ msg }}</h1>
      <h2>{{ msg2 }}</h2>
      <router-view class= 'view one' ></router-view>
      <router-view class='view two' name='a'></router-view>
      <router-view class='view three' name='b'></router-view>
      <router-link to='/'>go to hello</router-link>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App/' + this.$route.params.id,
        msg2 : this.$route.params.username,
        msg3: 'hello'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
      font-weight: normal;
      float:left;
      display:block;
      color:green;
      border: red 1px solid;
    }
</style>