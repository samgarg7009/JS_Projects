const clk = document.getElementById('clock')

setInterval(function() {
   let date = new Date()
   clk.innerHTML = date.toLocaleTimeString()
},1000);

const d = new Date()
const date = document.createElement('div')
date.style.backgroundColor = 'orange'
date.style.padding = '20px 35px'
date.style.marginTop = '10px'
date.style.borderRadius = '10px'
date.innerHTML = d.toDateString()
document.querySelector(".banner").appendChild(date);