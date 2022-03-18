let ToDoList = document.querySelector("#list");
let textInput = document.querySelector("#task");
let addBtn = document.querySelector("#liveToastBtn");

const newElement = () => {
  if (textInput.value.trim() == "") {
    return (textInput.value = "");
  }

  const liNode = document.createElement("li");
  const closeNode = document.createElement("span");

  liNode.innerHTML = textInput.value;
  closeNode.innerHTML = "X";
  ToDoList.appendChild(liNode);
  liNode.appendChild(closeNode);
  textInput.value = "";

  closeNode.addEventListener("click", deleteElement);
};

const deleteElement = (e) => {
  e.target.parentElement.remove();
};

addBtn.addEventListener("click", newElement);

ToDoList.addEventListener("click", (e) => {
  e.target.className === "checked"
    ? e.target.classList.remove("checked")
    : e.target.classList.add("checked");
});

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addBtn.click();
  }
});
