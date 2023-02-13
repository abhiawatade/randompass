import characters from "./assets/chracters.js";

const passGen = document.getElementById("pass");
const passOne = document.getElementById("pass-one");
const passTwo = document.getElementById("pass-two");
const passLength = document.getElementById("pass-length");

function genratePassword() {
  let passwordOne = "";
  let passwordlength = passLength.value;
  for (let i = 0; i < passwordlength; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomIndexOne];
  }
  return passwordOne;
}

passGen.addEventListener("click", function () {
  passOne.textContent = genratePassword();
  passTwo.textContent = genratePassword();
});

passOne.addEventListener("click", function () {
  //   passOne.select();
  //   passOne.setSelectionRange(0, 99999);
  //   navigator.clipboard.writeText(passOne.innerText);

  //   const str = document.getElementById("pass-one").innerText;
  //   const el = document.createElement("textarea");
  //   el.value = str;
  //   el.setAttribute("readonly", "");
  //   document.body.appendChild(el);
  //   el.select();
  //   el.setSelectionRange(0, 99999);
  //   document.execCommand("copy");
  //   document.body.removeChild(el);

  var copyText = document.getElementById("pass-one").innerText;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
});

passTwo.addEventListener("click", function () {
  var copyText = document.getElementById("pass-one").innerText;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
});
