/* ============= JAVASCRIPT ============*/
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();
const inputName = document.querySelector(".name");
const inputAddress = document.querySelector(".address");
const inputAge = document.querySelector(".age");
const inputFee = document.getElementById(".fee");
const listContainer = document.getElementById("list-container");


const arrayUser = [
  {
    name: "toan",
    address: "hcm",
    age: 27,
    fee: 15
  },
  {
    name: "tham",
    address: "qn",
    age: 26,
    fee: 20
  },
  {
    name: "vi",
    address: "qn",
    age: 27,
    fee: 0
  },
  // {
  //   name: "via",
  //   address: "an",
  //   age: 27,
  //   fee: 0
  // },
 
];

// =====Init=====
clearList();
renderUser(arrayUser);

var userStudent = function (name, address, age, fee) {
  this.name = name;
  this.address = address;
  this.age = age;
  this.fee = fee;
   
};

function clearList() {
  listContainer.innerHTML = "";
}

function resetInput() {
  inputName.value = "";
  inputAddress.value = "";
  inputAge.value = "";
  inputFee.value = "";
}

function renderUser(array) {
  array.forEach((e) => {
    let li = document.createElement("li");
    li.classList.add("li-item");
    li.innerHTML = `${e.name} ${e.address} ${e.age} ${e.fee}`;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  });
}

function addTask() {
  if (
    inputName.value === "" ||
    inputAddress.value === "" ||
    inputAge.value === "" ||
    inputFee.value === "" 

  ) {
    alert("You must write something!");
  } else {
    var user = new userStudent(
      inputName.value,
      inputAddress.value,
      inputAge.value,
      inputFee.value
    );
    arrayUser.push(user);
  }
  clearList();
  renderUser(arrayUser);
  resetInput();
}


listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    // saveData();
  } else if (e.target.tagName === "SPAN") {
    var parentElement  = e.target.parentNode;
    var str = parentElement.innerHTML;
    var arrParent = str.split(" ");
    var arrEx = arrayUser;
    arrEx.forEach((e) => {
      if (e.name === arrParent[0]) {
        var index = arrayUser.indexOf(e);
        arrayUser.splice(index,1);
      }
    });
    clearList();
    renderUser(arrayUser);
  }
});


// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

/* ============= JQUERY ============*/
// var htmlList

// function renderList(htmlList) {
//     $(".list").html(htmlList);
// }

// $("btn-add").on("click", function () {
//     var addyourtext = $("input-value").val();
//     htmlList = htmlList + <li
//     class= "list-item">$(addyourtext) </li>
//     renderList(htmlList);
// }
// )
