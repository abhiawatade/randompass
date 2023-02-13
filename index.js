const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function genratePassword (){
let passwordOne = "";

// let passwordlength = ("How long do you want your password to be?");
for(let i = 0 ; i < 15;i++){
    let randomIndexOne = Math.floor(Math.random()*characters.length)
    passwordOne += characters[randomIndexOne]

}
console.log(passwordOne )

}
genratePassword()
genratePassword()
