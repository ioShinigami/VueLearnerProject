const app = new Vue({
  el: "#q-app",


  data: {
    // Shared
    ResourceName: "vueLesson",
    displayUI: true,
    clothingTop: '',
    clothingWhiteList: '',
    

    randomTable: {
      ['1'] : {
        id: '1',
        name: 'HI'
      },
      ['2'] : {
        id: '2',
        name: 'STRING',
        function: ''
      },
      ['3'] : {
        id: '3',
        name: 'NEW'
      },
    },
    openValue: '',
    openValue2: null,

    thisString: "HI THIS IS OUR PROJECT",
    ourNumber: 6,
    ourArray: ['1', '2', '3']
  },

  methods: {
    ourFunction(data) {
      if (data == "STRING") { 
       this.newFunctiion()
      } else {
        console.log(data)
        console.log('OUR FUNCTION IS FIRING');
      }
    },
    newFunctiion() {

    },




  },



  // mounted() {
  //   console.log('WE ARE LOADING HERE')
  // },
  // beforeDestroy() {
    
  // },



});

// // Listener from Lua CL
// document.onreadystatechange = () => {
//   if (document.readyState == "complete") {
//     window.addEventListener("message", event => {

//       if (event.data.type == "ourMessage") {
//         //METHOD FIRED WHEN DATA RECEIVED
//         app.displayUI = true

//       } else if (event.data.type == "ourCloseMessage") {
//         //METHOD FIRED
//         app.displayUI = false
//       }
//     });
//   }
// };

