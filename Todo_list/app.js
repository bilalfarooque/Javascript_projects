const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
let listBox = document.querySelector(".list-box");
let btnVal = 0;

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please write something to add");
  } else if (addBtn.getAttribute("data") === "edited") {
    btnVal = inputBox.value;
    editor(btnVal)
    addBtn.textContent = "Add";
    inputBox.value = "";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    // add close box
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7";
    li.appendChild(deleteBtn);
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);
  }
  //   clear the input
  inputBox.value = "";

  //save data

  saveData();
});

//For DOM trees which represent HTML documents, the returned tag name is always in the canonical upper-case form. For example, tagName called on a <div> element returns "DIV"

//whenever click class active is added into list ul
listBox.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.tagName === "BUTTON") {
      btnVal = e.target.parentElement.childNodes[0].textContent;
      inputBox.value = btnVal;
      console.log(btnVal);
      addBtn.textContent = "Edit";
      addBtn.setAttribute("data", `edited`);

      editor = (newBtnVal) =>{
        console.log(newBtnVal)
        e.target.parentElement.childNodes[0].textContent = newBtnVal;
        addBtn.setAttribute("data", "new")
      }

    }
  },
  false
);

//saving data to avoid lost on reload
function saveData() {
  localStorage.setItem("data", listBox.innerHTML);
}

//show data saved

function showData() {
  listBox.innerHTML = localStorage.getItem("data");
}

showData();
