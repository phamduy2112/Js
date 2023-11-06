var data = '{"tasks":{"cutgrass":false,"cleanroom":false,"GotoGym":true,"MakeDinner":false}}';

    console.log(data);
var dataJson=JSON.parse(data);
var output=document.getElementById('output');
var taskList=document.querySelector("#laskList");
console.log(taskList);
for (var key in dataJson.tasks){
    console.log(key,dataJson.tasks[key]);
    var status=!dataJson.tasks[key] ? "": "Checked";
  
        var html='<li>'+key+'<input type="checkbox" value="'+key+'"'+status+'></li>';
    taskList.innerHTML+=html;
    
}
addEvents()
function addEvents(){
    var checkboxes=document.querySelectorAll('#laskList input[type="checkbox"]');
    
    for(var index in checkboxes){
        checkboxes[index].onchange=updateJson
    }
console.log(checkboxes);

}
function updateJson(){
    var key = event.target.value;
    console.log(key,event.target.checked)
    dataJson.tasks[key] = event.target.checked
}