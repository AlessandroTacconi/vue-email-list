// Ciao ragazzi,
// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list
// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Create una pagina "graziosa" senza utilizzare bootstrap.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailUtente: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl).then((laMiaApi) => {
        this.emailUtente.push(laMiaApi.data.response);
      });
    }
  },
}).mount('#app');
