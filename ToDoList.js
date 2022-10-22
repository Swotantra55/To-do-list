var inputField = document.querySelector(".input-field");
var table = document.querySelector(".table");


var addBtn = document.querySelector(".add-btn")
addBtn.addEventListener("click", function() {
addTask();
});

inputField.addEventListener("keypress", function(e) {
    //one change here was keypress instead of keyup and e.preventDefault was added 
    if (e.key == "Enter") {
        // alert("No Enter!");
        e.preventDefault();
        addTask();
        
//    addBtn.click(); = addTask();
 }
}
 );
//onsubmit="addTask(); return false"
// inputField.onkeypress = function(e) {
//     var key = e.charCode || e.keyCode || 0;     
//     if (key == 13) {
//       addTask();
//       e.preventDefault();
//     }
//   }
//The above code works as well



function addTask() {
    var task = inputField.value;
    console.log(task);

    var tblRow = document.createElement("tr");

    var tblData = document.createElement("td");
    tblData.appendChild(document.createTextNode(task));
    tblRow.appendChild(tblData);

    var tblDataCBtn = document.createElement("td");
    var CompleteBtn = document.createElement("button");
    CompleteBtn.appendChild(document.createTextNode("Done"));
    tblDataCBtn.appendChild(CompleteBtn);
    tblRow.appendChild(tblDataCBtn);

    var tblDataDel = document.createElement("td");
    var DelBtn = document.createElement("button");
    DelBtn.appendChild(document.createTextNode("Delete"));
    tblDataDel.appendChild(DelBtn);
    tblRow.appendChild(tblDataDel);

    table.appendChild(tblRow);
    inputField.value="";



    CompleteBtn.addEventListener("click", function() 
    {
        tblData.style.textDecoration = "line-through";
    });
    DelBtn.addEventListener('click', function() {
        table.removeChild(tblRow);
    })
}
// const list = document.getElementById('demo');
// const firstName = 'jane'
// const entry = document.createElement('li');
// entry.appendChild(document.createTextNode(firstName));
// list.appendChild(entry);