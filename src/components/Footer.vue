<template>
 <v-footer
 color="blue darken-4"
    dense
    dark>
  <p class="d-flex justify-center flex-grow-1"><strong>Bienvenido a Vuetify</strong> -{{  new Date().getFullYear() }} </p>
 </v-footer>
</template>

<script>
export default {
    name: 'footer-components',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    //components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>