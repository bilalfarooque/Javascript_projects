const email = document.getElementById("email");
const password = document.getElementById("password");
const popUpHtml = document.getElementById("popup")

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


if (loggedInUser) window.location.href = "../home/index.html";

const loginHandler = () => {
  const users = JSON.parse(localStorage.getItem("users"));

  //checking fields
  if (!email.value || !password.value){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Please fill all fields</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } ;

  if (!users){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Users not created</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } ;

  const foundUser = users.find((user) => {
    if (user.email === email.value) return user;
  });

  if (!foundUser){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>User not created</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } ;


  if (foundUser.password !== password.value){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Incorrect Password</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } ;
;

  console.log("Login Successfully");

  localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

  setTimeout(() => {
    window.location.href = "../home/index.html";
  }, 2000);
};


//pop-up
let popup = document.getElementById("popup");

function openPopUp() {
  popup.classList.add("open-popup");
}

function closePopUp() {
  popup.classList.remove("open-popup");
}
