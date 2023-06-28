<template>
  <v-container class="home">
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <div>
          <h1>Héroes</h1>
          <div class="icons">
            <v-icon class="icon">mdi-sword</v-icon>
            <v-icon class="icon">mdi-shield</v-icon>
            <v-icon class="icon">mdi-crosshairs</v-icon>
            <v-icon class="icon">mdi-heart-plus</v-icon>
            <v-icon class="icon">mdi-dna</v-icon>
          </div>
        </div>
        
        <v-simple-table dark class="mt-5 table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                Héroes
                </th>
                <th class="text-left">
                Nombre
            </th>
            <th class="text-left">
                Función
            </th>
            <th class="text-left">
                Título
            </th>
            <th class="text-left">
                Ataque
            </th>
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="heroe in heroes" 
              :key="heroe.nombre">
                <td><img :src="heroe.imagen" alt="" width="200" height="200"></td>
                <td>{{ heroe.nombre }}</td>
                <td>{{ heroe.funcion }}</td>
                <td>{{ heroe.titulo }}</td>
                <td>{{ heroe.ataque }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "heroes-view",
  // props: {},
  data: function () {
    return {};
  },
    computed: {
        ...mapState(['heroes'])
    },
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
.icon {
  padding: 0 10px;
  font-size: 40px;
}
.table{
    max-height: 65vh;
    overflow: auto;
}
.home{
    background: url('../assets/Fondo1.jpg');
    background-size: 100%;
    background-attachment: fixed;
    height: 100%;

}
</style>