<template>
  <v-app>
    <Nav/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Nav,
    Footer


  }
};
</script>
