let i = 0;
let j = 0;
let main_i = 0;
window.setInterval(function () {
   if (i === 4){
      
      j = 1;
   } 
   if (j === 0) {
      if (i === 0) {
         
         document.getElementById("X570").style.zIndex = "-2";
         document.getElementById("ZaBook").style.zIndex = "-1";
      }
      else if (i === 1) {
         document.getElementById("ZaBook").style.zIndex = "-2";
         document.getElementById("G481").style.zIndex = "-1";
      }
      else if (i === 2) {
         document.getElementById("G481").style.zIndex = "-2";
         document.getElementById("A1660Ti").style.zIndex = "-1";
      }
      else if (i === 3) {
         document.getElementById("A1660Ti").style.zIndex = "-2";
         document.getElementById("W291").style.zIndex = "-1";
      }
      i++;
   }
   else if(j ===1){
      if(main_i === 5){
         main_i = 0;
      }
      if (main_i === 0) {
         document.getElementById("W291").style.zIndex = "-2";
         document.getElementById("X570").style.zIndex = "-1";
         
      }
      else if (main_i === 1) {
         document.getElementById("X570").style.zIndex = "-2";
         document.getElementById("ZaBook").style.zIndex = "-1";
         
      }
      else if (main_i === 2) {
         document.getElementById("ZaBook").style.zIndex = "-2";
         document.getElementById("G481").style.zIndex = "-1";
         
      }
      else if (main_i === 3) {
         document.getElementById("G481").style.zIndex = "-2";
         document.getElementById("A1660Ti").style.zIndex = "-1";
         
      }
      else if(main_i === 4){
         document.getElementById("A1660Ti").style.zIndex = "-2";
         document.getElementById("W291").style.zIndex = "-1";
      }
      main_i++;

   }
}, 5000);