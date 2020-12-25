const app = new Vue({
  el: "#q-app",


  data: {
    // Shared
    ResourceName: "vueLesson",
    
  },

  methods: {
    
  },

  // mounted() {
    
  // },
  // beforeDestroy() {
    
  // },



});

// Listener from Lua CL
document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    window.addEventListener("message", event => {

      if (event.data.type == "ourMessage") {
        //METHOD FIRED WHEN DATA RECEIVED

      } else if (event.data.type == "ourCloseMessage") {
        //METHOD FIRED
      }
    });
  }
};

