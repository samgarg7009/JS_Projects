const form = document.querySelector("form");
//console.log(buttons)
form.addEventListener("submit", function (e) {
   e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector("#weight").value);
   const result = document.querySelector("#results");

   if(height==='' || height<0 || isNaN(height)){
    result.innerHTML='please give a valid height'
   }else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML='please give a valid weight'
   }else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
    const div = document.createElement('div')
    const addtext ="";
    if (bmi < 18.6) {
       div.innerHTML = "underweight";
    } else if (18.6 <= bmi && bmi <= 24.9) {
        div.innerHTML = "normal";
    } else if (bmi > 24.9) {
      div.innerHTML = "overweight";
    }
    
    document.querySelector('#results').appendChild(div)
   }
  });

