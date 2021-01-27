var slider= new Vue({
  el:'#app',
  data: {
    contatore:0,
    immagini: [
      'img/img1.jpg',
      'img/img2.jpg',
      'img/img3.jpg',
      'img/img4.jpg',
      'img/img5.jpg'
    ]
  },
  methods: {
    nextPhoto(){
      if(this.contatore == (immagini.length - 1)){
                    // immagini.length - 1 cosi che parta da 0 e arrivi a 4
      this.contatore=0;//quando arriva a 5 cambia con 0
    } else{
      this.contatore++; //altrimenti continua ad andare avanti il contatore
    }
    prevPhoto(){
      if(this.contatore < 1) {
        this.counter = this.immagini.length - 1; //il contatore deve essere a 5
      }else {
        this.contatore--; //altrimenti continua ad andare indietro il contatore
      }
  },
});
// !!quando devo andare a prendere delle variabili in data devo andare
// ad utilizzare il this!!
