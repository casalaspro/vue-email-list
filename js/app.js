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
      emails: [],
    }
  },

  // METHODS

  methods: {

    provaApi(number){
      for(let i = 0; i<number; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response=>{
            this.emails.push(response.data.response);
          }))
      }
      console.log(this.emails);
    }

  },

  // CREATED HOOK

  created(){
    this.provaApi(10);
  },

}).mount('#app')