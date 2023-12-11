const userName = document.getElementById("userName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const dob = document.getElementById("dob");
const popUpHtml = document.getElementById("popup")

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//checking if user is already logged in
if (loggedInUser) window.location.href = "../home/index.html";

const signupHandler = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users, "-====>>> users");

//   checking fields (Required data)
  if (!userName.value || !email.value || !password.value || !cPassword.value){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Please fill all fields</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`

    return
  } 

  //check password length
  if (password.value.length < 8){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Password length should be alteast 8 characters</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } 

  //matching password and cPassword
  if (password.value != cPassword.value){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Confirm password should be same as password</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } ;

  const userNameFound = users.find((user) => {
    if (user.userName === userName.value) return user;
  });

  if (userNameFound){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Username already taken</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } ;

  const userEmailFound = users.find((user) => {
    if (user.email === email.value) return user;
  });

  if (userEmailFound){
    popUpHtml.innerHTML = ""
    popUpHtml.innerHTML =  `<img src="../images/Close.gif" alt="tick">
    <h2 style = "color:#DE2413">Oops!</h2>
    <p>Email already used</p>
    <button type="button" id="ok" onclick="closePopUp()">OK</button>`
    return
  } ;

  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    email: email.value,
    password: password.value,
    cPassword: cPassword.value,
  };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  setTimeout(() => {
    window.location.href = "../login/index.html";
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
