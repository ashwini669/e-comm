//let addButton = document.getElementById('addpro');
// let updateButton = document.getElementById('update');
// let resetButton = document.getElementById('reset');
 
// resetButton.addEventListener("click", formclear);

//backButton.addEventListener("click", backfunc);
// function backfunc(){
//    console.log("you clicked back button");
//     localStorage.removeItem('pid_table');
//      window.location.replace("list.html");
// }


  window.onload=function(){
    let p; 

  if(localStorage.getItem('pid_table')===null){
      p=[];
  } else{
      p= JSON.parse(localStorage.getItem('pid_table'));
  }
  var x=0;
  var pro=p[x];
  let data; 

        document.getElementById("proid").value = pro.pid;
        document.getElementById("name").value =pro.name; 
        document.getElementById("price").value = pro.price;
        document.getElementById("image").value = pro.image;
    
  //  updateButton.addEventListener("click", function()
  // {
  //   console.log("update operation");
  //    updateRecord(pro.pid);
  //  });
    window.proid=pro.pid;
  }

function updateRecord() {
  if(confirm("Are you sure to update changes??"))
    {
      let Data=[];
      Data=getdata();

  let m=[];
   m=getInfo();
  
   for(var i=0 in m)
   {
    var item=m[i];
    if(item.Product_id === proid)
    {
    item.Product_id=Data[0];
    item.Product_name=Data[1];
    item.Product_price=Data[2];
    item.Image=Data[3];
    break;
    }
   }
  
    localStorage.setItem('pro_table',JSON.stringify(m));
    alert("item updated");
    formclear();
    localStorage.removeItem('pid_table');
    window.location.replace("list.html");
  }
  else{ formclear();
        localStorage.removeItem('pid_table');
      }
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

function getdata(){
var proName = document.getElementById('name').value;
var proPrice = document.getElementById('price').value;
var proImg = document.getElementById('image').value;
var proId = document.getElementById('proid').value; 

var data=[proId,proName,proPrice,proImg];
return data;
}

function formclear(){
document.getElementById('proid').value=" ";
document.getElementById('name').value=" ";
document.getElementById('price').value=" ";
document.getElementById('image').value=" ";
localStorage.removeItem('pid_table');
window.location.replace("list.html");
}

// addButton.addEventListener("click", displayData);
// function displayData(){

//     var proName = document.getElementById('name').value;
//     var proPrice = document.getElementById('price').value;
//     var proImg = document.getElementById('image').value;
//     var proId = document.getElementById('proid').value;

//     if(proPrice!=""&&proName!=""&&proImg!=""&&proId!="")
//     {
//       let pro_data=localStorage.getItem("pro_table");
//     if(pro_data==null)
//     {
//         task=[];
//      }
//     else{
//           task=JSON.parse(pro_data);
//         }
//     task.push({'Product_name':proName,'Product_price':proPrice,'Image':proImg,'Product_id':proId});
//     localStorage.setItem("pro_table",JSON.stringify(task));

//      alert("added new product to list");
//      formclear();
//       }
//    }