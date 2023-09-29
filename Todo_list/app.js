const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
let listBox = document.querySelector(".list-box");

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please write something to add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    // add close box
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  //   clear the input
  inputBox.value = "";
});

//For DOM trees which represent HTML documents, the returned tag name is always in the canonical upper-case form. For example, tagName called on a <div> element returns "DIV"

//whenever click class active is added into list ul
listBox.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
},false);
