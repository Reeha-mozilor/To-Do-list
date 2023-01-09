// function add(){
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("item").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   document.getElementById("list").appendChild(li);

//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "checkbox");
//   document.getElementById("list").appendChild(x);

// }
// const nodeList= document.querySelectorAll("li");

// nodeList[1].style.backgroundColor = "red"; 

document.querySelector('#add').onclick = function(){
    if(document.querySelector('#item').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#list').innerHTML += `
            <li id="a">
                    ${document.querySelector('#item').value}
                <button class="delete">
                    <i class="fa fa-trash-o" style="font-size:18px"></i>
                </button>
                <input type="checkbox" id="checkbox" class="custom-checkbox" onchange="check(this)">
            </li>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    }
}
var list = document.querySelectorAll("input[type=checkbox]");
         for(var i=0; i<list.length; i++){
            current_tasks[i].onchange=check(current_tasks[i]); 
        }
        function check(a){
            if (a.checked){
                a.parentNode.style.textDecoration = "line-through";
                a.style.display="none"
            }else if(a.checked==false){
                a.parentNode.style.textDecoration = "none";
            }
        
        }