var settingsmenu = document.querySelector(".settings-menu")
var darkBtn = document.getElementById("dark-btn")


const displaySettings = ()=>{
    settingsmenu.classList.toggle("settings-menu-display")
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}

const logoutHandler = () => {
    localStorage.removeItem('loggedInUser')
}

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) window.location.href = "../login/index.html";

//create shortcuts for loggedInUser properties key
const {
  userName,
  firstName,
  lastName,
  email,
  country,
  phoneNumber,
  dob,
  gender,
  about,
  hobbies,
  id,
} = loggedInUser;

let combinedDate;
let genderInput;



const userNameInput = document.querySelector("#userNameInput");
const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const emailInput = document.querySelector("#emailInput");
const countryInput = document.querySelector("#countryInput");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
const dateInput = document.querySelector("#dateInput");
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");
var genderInputs = document.getElementsByName("gender");
// const genderInput = document.querySelector('#genderInput')
const aboutInput = document.querySelector("#aboutInput");
const hobbiesInput = document.querySelector("#hobbiesInput");

// const imageInput = document.querySelector('#imageInput')

// gender value
function getGenderValue() {
  for (i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      genderInput = genderInputs[i].value;
    }
  }
}

// Create options from 1 to 31
for (let i = 1; i <= 31; i++) {
  let loopvalue = i < 10 ? "0" + i : i;

  const option = document.createElement("option");
  option.value = loopvalue;
  option.text = loopvalue;
  dateInput.add(option);
}

// Create options from 1900 to 2024
for (let i = 2024; i >= 1910; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  yearInput.add(option);
}

function combineDate() {
  combinedDate = `${yearInput.value}${monthInput.value}${dateInput.value}`;
  console.log(combinedDate);
}



// if(profileUrl) {
//     profilePictureHtml.src = profileUrl
// }

const breakDate = (dob) => {
  year = dob.slice(0, 4);
  month = dob.slice(4, 6);
  date = dob.slice(6, 8);
  return [date, month, year];
};

breakDate(dob);

userNameInput.value = userName ? userName : "";
firstNameInput.value = firstName ? firstName : "";
lastNameInput.value = lastName ? lastName : "";
emailInput.value = email ? email : "";
countryInput.value = country ? country : "";
phoneNumberInput.value = phoneNumber ? phoneNumber : "";
dateInput.value = date ? date : "";
monthInput.value = month ? month : "";
yearInput.value = year ? year : "";
aboutInput.value = about ? about : "";
hobbiesInput.value = hobbies ? hobbies : "";
// imageInput.value = profileUrl ? profileUrl : '';

const updateSettingsHandler = () => {
  getGenderValue();
  combineDate();

  console.log(id)
  // for loggedin user
  const userObj = {
    id: id,
    userName: userNameInput.value,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    country: countryInput.value,
    phoneNumber: phoneNumberInput.value,
    gender: genderInput,
    dob: combinedDate,
    about: aboutInput.value,
    hobbies: hobbiesInput.value.split(","),
    
  };

  console.log(userObj, "=====>>> userObj");

  const users = JSON.parse(localStorage.getItem("users"));

  let myUser = users.find((user) => {
    return user.id === id;
  });

  console.log(myUser);
  (myUser.userName = userNameInput.value),
    (myUser.firstName = firstNameInput.value),
    (myUser.lastName = lastNameInput.value),
    (myUser.email = emailInput.value),
    (myUser.country = countryInput.value),
    (myUser.phoneNumber = phoneNumberInput.value),
    (myUser.gender = genderInput),
    (myUser.dob = combinedDate),
    (myUser.about = aboutInput.value),
    (myUser.hobbies = hobbiesInput.value.split(",")),
    
    console.log(users, "===>>> users");

  console.log(myUser, "-===>> myUser");

  localStorage.setItem("loggedInUser", JSON.stringify(userObj));
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = '../login/index.html'
};

const quitSettings = () => {
  window.location.href = "../home/index.html";
  console.log("cancel button pressed");
};
