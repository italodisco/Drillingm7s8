
<template>
    <div>
        <v-app-bar
        color="blue darken-4"
        dense
        dark
        >
        <div class="d-flex justify-center flex-grow-1">
                <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="light-blue"
      class="ma-2 white--text"
      @click="$router.push('/')"
    >
      Home
      <v-icon
        right
        dark
      >
        mdi-home
      </v-icon>
    </v-btn>
          
        </div>

        </v-app-bar>
    </div>
</template>


<script>
export default {
    name: 'nav-components',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
   // components: {}
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>