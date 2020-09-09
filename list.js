//let addButn = document.getElementById('add');
//addButn.addEventListener("click",disp);
const logout=document.querySelector('#log');

url=document.URL;
console.log(url);
if(url==="http://127.0.0.1:5500/e-commerce/list.html?"){
  if(localStorage.getItem('session_table')!==null){
    //alert('no');
    //window.location='/app.html';
  }
  else{
    window.location.replace("main.html");
      }
}

logout.addEventListener('click',sessionlogout);

function sessionlogout(e){
    
    alert("logged out successfully");
    localStorage.removeItem('session_table');
    //window.location='/main.html';
    window.location.href="./main.html";
   
}

function disp()
{
  window.location.replace("addnewpro.html");
}

window.onload=function setTable(){
  //location.reload();
document.getElementById('list').style.display="";
let data=[];
data=JSON.parse(localStorage.getItem("pro_table"));
var i=0;
//var x=data.length;
localStorage.removeItem('pid_table');

for(i in data)
 {
  var item=data[i];
  var table = document.getElementById("list").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = item.Product_id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = item.Product_name;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = item.Product_price;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML =`<img src="${item.Image}" width="80" height="100">`;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML =`<a href="#" onClick="onEdit(this)" p-id="${item.Product_id}"><b>EDIT</b></a>`;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML =`<a href="#" onClick="onDelete(this)" pro-id="${item.Product_id}"><b>DELETE</b></a>`;
 }
}

function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("list").deleteRow(row.rowIndex);
            //formclear();
            //var p=td.target.parentElement.parentElement;
            var pid=td.getAttribute('pro-id');
            delLocalStorage(pid);
        }
      }
      
function delLocalStorage(data) {
              
        //localStorage.removeItem(data);
         let m=[];
         m=getInfo();
      
        m= m.filter(function(m,index) {
            return m.Product_id!==data
          });
      
           localStorage.setItem('pro_table',JSON.stringify(m));
           alert("item deleted");
           //document.getElementById("list-items").style.display = "";
       }

function getInfo() {
        let data; 
      
        if(localStorage.getItem('pro_table')===null){
            data=[];
        } else{
            data= JSON.parse(localStorage.getItem('pro_table'));
        
        }
        return data;
      }

      function onEdit(td) {
          
        selectedRow = td.parentElement.parentElement;
        var pid=selectedRow.cells[0].innerText;
        var name=selectedRow.cells[1].innerText;
        var price=selectedRow.cells[2].innerText;
        var image=selectedRow.querySelector('img').getAttribute('src');
         //window.pid=td.getAttribute('p-id'); 
         let pid_data=localStorage.getItem("pid_table");
           if(pid_data==null)
           {
             task1=[];
            }
           else{
               task1=JSON.parse(pid_data);
               }
           task1.push({'pid':pid,'name':name,'price':price,'image':image});
           localStorage.setItem("pid_table",JSON.stringify(task1));

         window.location="add.html";
      }