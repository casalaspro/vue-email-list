// console.log("HI VUE!")
/*

Descrizione:
Utilizzando Vue
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

const { createApp } = Vue;

createApp({

  // DATA

  data(){
    return{
      prova: true,
    }
  },

  // METHODS

  methods: {

    provaApi(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response=>{
            console.log(response.data.response);
          }))
    }

  },

  // CREATED HOOK

  created(){
    this.provaApi();
  },

}).mount('#app')