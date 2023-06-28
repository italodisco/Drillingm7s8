import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes: [
      {
        nombre: "Artanis",
        función: "Agresor",
        tpitulo: "Jerarca de los daelaam",
        ataque: "111",
        imagen: "https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg",
      },
      {
        nombre: "D.va",
        función: "Guerrero",
        tpitulo: "Piloto de MEKA",
        ataque: "22 (meca), 55 (piloto)",
        imagen: "https://static.heroesofthestorm.com/heroes/dva/skins/meka-pilot-800.jpg",
      },
      {
        nombre: "Ragnaros",
        función: "Agresor",
        tpitulo: "El señor del fuego",
        ataque: "180",
        imagen: "https://static.heroesofthestorm.com/heroes/ragnaros/skins/the-firelord-800.jpg",
      },
      {
        nombre: "Yrel",
        función: "Guerrero",
        tpitulo: "Luz de la esperanza",
        ataque: "111",
        imagen: "https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg",
      },
      {
        nombre: "Ana",
        función: "Sanadora",
        tpitulo: "Francotiradora veterana",
        ataque: "30",
        imagen: "https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg",
      },
      {
        nombre: "Auriel",
        función: "Sanadora",
        tpitulo: "Arcángel de la esperanza",
        ataque: "64",
        imagen: "https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg",
      },
      {
        nombre: "Malfurion",
        función: "Sanadora",
        tpitulo: "Archidruida",
        ataque: "60",
        imagen: "https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg",
      },
      {
        nombre: "Arthas",
        función: "Tanque",
        tpitulo: "El rey exánime",
        ataque: "95",
        imagen: "https://static.heroesofthestorm.com/heroes/arthas/skins/the-lich-king-800.jpg",
      },
      {
        nombre: "Johanna",
        función: "Tanque",
        tpitulo: "Cruzada de Zakarum",
        ataque: "99",
        imagen: "https://static.heroesofthestorm.com/heroes/johanna/skins/crusader-of-zakarum-800.jpg",
      },
      {
        nombre: "Muradin",
        función: "Tanque",
        tpitulo: "Rey de la montaña",
        ataque: "88",
        imagen: "https://static.heroesofthestorm.com/heroes/muradin/skins/mountain-king-800.jpg",
      },
      {
        nombre: "Illidan",
        función: "Asesino a cuerpo",
        tpitulo: "El traidor",
        ataque: "87",
        imagen: "https://static.heroesofthestorm.com/heroes/illidan/skins/the-betrayer-800.jpg",
      },
      {
        nombre: "Maiev",
        función: "Asesino a cuerpo",
        tpitulo: "Prelado tétrico",
        ataque: "131",
        imagen: "https://static.heroesofthestorm.com/heroes/illidan/skins/the-betrayer-800.jpg",
      },
      {
        nombre: "Abathur",
        función: "Apoyo",
        tpitulo: "Maestro de la evolución",
        ataque: "27",
        imagen: "https://static.heroesofthestorm.com/heroes/abathur/skins/evolution-master-800.jpg",
      },

      {
        nombre: "Zarya",
        función: "Apoyo",
        tpitulo: "Defensora de Rusia",
        ataque: "22",
        imagen: "https://static.heroesofthestorm.com/heroes/zarya/skins/defender-of-russia-800.jpg",
      },
      {
        nombre: "Nazeebo",
        función: "Asesino a distancia",
        tpitulo: "Médico brujo",
        ataque: "92",
        imagen: "https://static.heroesofthestorm.com/heroes/nazeebo/skins/heretic-witch-doctor-800.jpg",
      },
      {
        nombre: "Genji",
        función: "Asesino a distancia",
        tpitulo: "Ninja cibernético",
        ataque: "44",
        imagen: "https://static.heroesofthestorm.com/heroes/genji/skins/cybernetic-ninja-800.jpg",
      },
    
      {
        nombre: "Zagara",
        función:  "Asesino a distancia",
        tpitulo: "Madre de la prole del enjambre",
        ataque: "85",
        imagen: "https://static.heroesofthestorm.com/heroes/zagara/skins/broodmother-of-the-swarm-800.jpg",
      },
      

    ]
  },
  
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
