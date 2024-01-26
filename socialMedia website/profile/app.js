var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

const displaySettings = () => {
  settingsmenu.classList.toggle("settings-menu-display");
};

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
};

const logoutHandler = () => {
  localStorage.removeItem("loggedInUser");
};

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) window.location.href = "../login/index.html";

let profileUrl = "../images/profilePicDefault.jpg";

function previewImage() {
  const fileInput = document.getElementById("fileInput");
  const profilePicCover = document.getElementById("profilePicCover");

  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Set the source of the image to the selected file
      profilePicCover.src = e.target.result;
      profileUrl = e.target.result;
    };

    reader.readAsDataURL(selectedFile);
  } else {
    // Clear the image preview if no file is selected
    profilePicCover.src = "../images/profilePicDefault.jpg"; // Default image source
  }

  

}
const users = JSON.parse(localStorage.getItem("users"));

let myUser = users.find((user) => {
  return user.id === id;
});

console.log(users, "===>>> users");

console.log(myUser, "-===>> myUser");

myUser.profilePic = profileUrl;

localStorage.setItem("loggedInUser", JSON.stringify(myUser));
localStorage.setItem("users", JSON.stringify(users));

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
  profilePic,
} = loggedInUser;

const userNameHtml = document.querySelector("#userNameHtml");
const fullNameHtml = document.querySelector("#fullNameHtml");
const emailHtml = document.querySelector("#emailHtml");
// const countryHtml = document.querySelector('#countryHtml')
const dobHtml = document.querySelector("#dobHtml");
// const genderHtml = document.querySelector('#gender')
const pNumberHtml = document.querySelector("#phoneNumberHtml");
const aboutHtml = document.querySelector("#aboutHtml");
const hobbiesHtml = document.querySelector("#hobbiesHtml");
const profilePicHtml = document.querySelector("#profilePicCover");

const breakDate = (dob) => {
  year = dob.slice(0, 4);
  month = dob.slice(4, 6);
  date = dob.slice(6, 8);
  return [date, month, year];
};

breakDate(dob);

const monthName = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month - 1];
};

userNameHtml.innerHTML = userName ? `@${userName}` : "No userName Updated";
fullNameHtml.innerHTML = firstName
  ? `${firstName} ${lastName}`
  : "No fullName Updated";
emailHtml.innerHTML = email ? email : "No Email Updated";
// countryHtml.innerHTML = country ? country : "No Country Updated"
pNumberHtml.innerHTML = phoneNumber ? phoneNumber : "No Phone Number Updated";
dobHtml.innerHTML = dob ? `${date} ${monthName()} ${year}` : "No DOB Updated";
// genderHtml.innerHTML = gender ? gender : "No Gender Updated"
aboutHtml.innerHTML = about ? about : "No Description Updated";
profilePicHtml.src = profilePic ? profilePic : "../images/profilePicDefault";

// hobbiesHtml.innerHTML = hobbies ? hobbies.split(",") : "No hobbies Updated"
