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

// const userName = document.getElementById('userName')

// userName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).userName

const postInput = document.querySelector("#postarea");

const postContentArea = document.querySelector(".allPosts");

const submitBtn = document.querySelector("#submitBtn");

let imageUrl;
let oldPost;
let oldPostIndex;

const postsLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];

// postsLocalStorage.reverse().filter((ele)=> ele.userDetail.email == JSON.parse(localStorage.getItem('loggedInUser')).email)

const postDisplayHandler = () => {
  postContentArea.innerHTML = "";

  const postsLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];

  console.log(postsLocalStorage, "===>>>postsLocalStorage");

  postsLocalStorage.reverse().forEach((post) => {
    let textHTML;
    if (post?.imgData) {
      textHTML = `<div class="post-container">
      <div class="user-profile">
      <img src="../images/profile-pic.png" alt="profile-pic">
      <div class="post-user">
          <h3>Alison</h3>
          <span>June 24 2021, 13:40 pm</span>
      </div>
  </div>

  <p class="post-text">${post?.textData}</p>

  <div class="post-image-cont">
  <img src="${post.imgData}" alt="" id="post-image">

</div>
 

  <div class="post-row">
      <div class="activity-icons">
          <span><img src="../images/like-blue.png" alt="">120</span>
          <span><img src="../images/comments.png" alt="">10</span>
          <span><img src="../images/share.png" alt="">3</span>
      </div>
  </div>
  </div>
            `;
    } else {
      textHTML = `<div class="post-container">
      <div class="user-profile">
                <img src="../images/profile-pic.png" alt="profile-pic">
                <div class="post-user">
                    <h3>Alison</h3>
                    <span>June 24 2021, 13:40 pm</span>
                </div>
            </div>
                    <p class="post-text">${post?.textData}</p>
            
                                <div class="post-row">
                                    <div class="activity-icons">
                                        <span><img src="../images/like-blue.png" alt="">120</span>
                                        <span><img src="../images/comments.png" alt="">10</span>
                                        <span><img src="../images/share.png" alt="">3</span>
                                    </div>
                                    </div>
                                </div>`;
    }
    postContentArea.innerHTML += textHTML;
  });
};

postDisplayHandler();

// <a href="#" class="btn btn-primary">Go somewhere</a>

const imageOpenerHandler = () => {
    event.preventDefault();
  imageUrl = prompt("Post the link of your image");
  console.log(imageUrl);
};

const postSubmitHandler = () => {
  let postObj;
  console.log(postInput.value, "===>>>postInput");
  if (imageUrl) {
    console.log(imageUrl, "====>>imageUrl");
    postObj = {
      id: Date.now(),
      textData: postInput.value,
      imgData: imageUrl,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
    };
  } else {
    postObj = {
      id: Date.now(),
      textData: postInput.value,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
    };
  }

  postsLocalStorage.push(postObj);

  localStorage.setItem("posts", JSON.stringify(postsLocalStorage));

  imageUrl = "";

  postInput.value = "";

  postDisplayHandler();
};

const editHandler = (postId) => {
  console.log("edit handler working properly", postId);
  const postsLocalStorage = JSON.parse(localStorage.getItem("posts"));
  console.log(postsLocalStorage, "====>> postsLocalStorage");

  const findPost = postsLocalStorage.find((post) => post.id === postId);
  const findPostIndex = postsLocalStorage.findIndex(
    (post) => post.id === postId
  );

  console.log(findPost, "====>>> findPost");

  oldPost = findPost;
  oldPostIndex = findPostIndex;

  postInput.value = findPost.textData;

  submitBtn.innerHTML = "Update";

  submitBtn.setAttribute("onclick", "updatePostHandler()");
};
const deleteHandler = (postId) => {
  console.log("delete handler working properly", postId);
  const forDelete = JSON.parse(localStorage.getItem("posts"));
  const filteredData = forDelete.filter((post) => post.id != postId);
  console.log(filteredData, "===>> filteredData");
  localStorage.setItem("posts", JSON.stringify(filteredData));
  postDisplayHandler();
};

const updatePostHandler = () => {
  console.log("update post handler working");

  let postObj;
  console.log(postInput.value, "===>>>postInput");
  if (imageUrl) {
    console.log(imageUrl, "====>>imageUrl");
    postObj = {
      textData: postInput.value,
      imgData: imageUrl,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
    };
  } else {
    postObj = {
      textData: postInput.value,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
    };
  }

  console.log(postObj, "====>>>postObj");

  const newUpdatePostData = {
    id: oldPost?.id,

    textData: postObj.textData || oldPost.textData,

    //textData: condition ? implement1 : implement2

    imgData: postObj.imgData || oldPost.imgData,

    userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
  };

  console.log(newUpdatePostData, "===>>>>newUpdatePostData");

  const postsLocalStorage = JSON.parse(localStorage.getItem("posts"));

  postsLocalStorage.splice(oldPostIndex, 1, newUpdatePostData);

  console.log(postsLocalStorage, "===>>> postLocalStorage");

  localStorage.setItem("posts", JSON.stringify(postsLocalStorage));

  postDisplayHandler();

  submitBtn.innerHTML = "Submit";

  submitBtn.setAttribute("onclick", "postSubmitHandler()");
};
