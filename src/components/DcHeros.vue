<template>
    <div class="m-auto">
    <h1 class="text-2xl text-center">Dc Heros {{ herosCount }}</h1>
    <ul>
        <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
        <div>
            {{ hero.name }}
        </div>
        <button @click="removeHero(index)">x</button> 
        </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
        <input class="border rounded-lg mx-1" v-model="newHero" placeholder="Type Hero Name Here" />
        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
    </form>
    </div>
</template>

<script>
export default {  
  computed: {
    herosCount() {
      return this.dcHeros.length;
    }
  }, 
  methods: {
    addHero() {
      if (this.newHero !== '') {
        this.dcHeros.unshift({name: this.newHero});
        this.newHero = '';
      }
    },
    removeHero(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },
  data() {
    return {
      newHero: "",
      dcHeros: [
        {name: "SuperGirl"},
        {name: "Flash"},
        {name: "Batman"},
        {name: "Arrow"},
        {name: "SuperMan"},
      ]
    };
  }
}
</script>

<style>

</style>