const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const  passGen = document.getElementById("pass") 
const passOne = document.getElementById("pass-one")
const passTwo = document.getElementById("pass-two")
const passLength = document.getElementById("pass-length")


function genratePassword (){
let passwordOne = "";
let passwordlength = passLength.value;
for(let i = 0 ; i < passwordlength;i++){
    let randomIndexOne = Math.floor(Math.random()*characters.length)
    passwordOne += characters[randomIndexOne]
}
return passwordOne;
}

passGen.addEventListener("click",function(){
 
    passOne.textContent = genratePassword()
    passTwo.textContent = genratePassword()
})