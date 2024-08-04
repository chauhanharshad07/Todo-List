let addUser = document.getElementById("adduser");
let userData = document.getElementById("username");
let recordDisplay = document.getElementById("record");
let btntext = addUser.innerText;
// console.log(recordDisplay);

let userArray = [];
let edit_id = null;
let objstr = localStorage.getItem("user");
if(objstr!==null){
    userArray =JSON.parse(objstr);
}

displayInfo();

addUser.addEventListener("click",function(){
    let Uname =userData.value;
    if(edit_id != null){
        userArray.splice(edit_id,1,{ name:Uname });
        edit_id = null;
    }else{
        userArray.push({ name:Uname });
    }
    SaveInfo(userArray);
    userData.value = "";
    addUser.innerText = btntext;
});
 
function SaveInfo(){
    let str = JSON.stringify(userArray);
    localStorage.setItem("user",str);
    displayInfo()
}
function displayInfo(){
    let statement ="";
    userArray.forEach((users, i) => {
        statement += `<tr>
            <td scope="row">${i + 1}</td>
            <td>${users.name}</td>
            <td>  
                <i class="btn text-white fa fa-edit btn-info mx-2" onclick="editUser(${i})"></i>
                <i class="btn btn-danger text-white fa fa-trash" onclick="deleteUser(${i})"></i>
            </td>
        </tr>`;
    });
    recordDisplay.innerHTML = statement;
}
function editUser(id) {
    edit_id = id;
    userData.value = userArray[id].name;
    addUser.innerHTML = "Save Changes";
}
function deleteUser(id){
    userArray.splice(id,1);
    SaveInfo(userArray);    
}







