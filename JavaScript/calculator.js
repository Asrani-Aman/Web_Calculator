/*document.write("jai shree ram");*/
// Todo: Make M+ M- and MC functional
let string = "";
document.querySelector('input').value = '0';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      string='';
    }
    else if(e.target.innerHTML == "AC"){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "icon/sun.png"
  }
  else{
    icon.src = "icon/moon.png"
  }
}