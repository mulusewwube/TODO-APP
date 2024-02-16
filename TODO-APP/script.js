const addBtn = document.querySelector(".click");
const deleteBtns = document.querySelectorAll(".delete");
const listItems = document.querySelectorAll(".list");

addBtn.addEventListener("click", () => {
  const taskName = document.querySelector(".newitem input").value;

  if (taskName.length === 0) {
    alert("Please write here!!!!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("list");

  const listName = document.createElement("span");
  listName.id = "listname";
  listName.textContent = taskName;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete", "del-btn");
  deleteBtn.innerHTML = "<i class='bx bxs-message-square-x'></i>";

  listItem.appendChild(listName);
  listItem.appendChild(deleteBtn);
  document.querySelector("#tag").appendChild(listItem);

  document.querySelector(".newitem input").value = "";
});

for (const deleteBtn of deleteBtns) {
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentNode.remove();
  });
}

for (const listItem of listItems) {
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("comple");
  });
}
