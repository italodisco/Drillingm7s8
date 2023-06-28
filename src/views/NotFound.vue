<template>
  <div>
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow"> La página que buscas no existe </v-col>
        <v-col class="shrink">
          <v-btn><router-link to="/">Volver a Inicio</router-link></v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>