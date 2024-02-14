// start project
// get id element input and list li
const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");
// tarif function for add task lists
function addTask() {
    // when field none and empty display error
    if (inputBox.value === '') {
        alert("YOU MUST WRITE SOMETHIMG!⚠")
    }
    // if not=> add list that container page
    else {
        // create element to page container
        let list = document.createElement('li');
        // display value user in input 
        list.innerHTML = inputBox.value;
        // add new element created that page
        listContainer.appendChild(list);
        //new create element
        let span = document.createElement('span');
        // creat multiplied by for delet 
        span.innerHTML = '\u00d7';
        // add new element that page
        list.appendChild(span)
    }
    // when added list input value emptyed
    inputBox.value = ""
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
    // for click span for delet list
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        // saveData()
    }
}, false);
// for data saved
// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML)
// }
// function showTask(){
//     listContainer.innerHTML= localStorage.getItem("data")
// }
