// let addButton = document.getElementById('addpro');
// addButton.addEventListener("click", displayData);

// function dis()
// {
//     window.location.replace("list.html");
// }

function displayData(){

    var proName = document.getElementById('name').value;
    var proPrice = document.getElementById('price').value;
    var proImg = document.getElementById('image').value;
    var proId = document.getElementById('proid').value;

    if(proPrice!=""&&proName!=""&&proImg!=""&&proId!="")
    {
      let pro_data=localStorage.getItem("pro_table");
    if(pro_data==null)
    {
        task=[];
     }
    else{
          task=JSON.parse(pro_data);
        }
    task.push({'Product_name':proName,'Product_price':proPrice,'Image':proImg,'Product_id':proId});
    localStorage.setItem("pro_table",JSON.stringify(task));

     alert("added new product to list");
     formclear();
     window.location.replace("list.html");
      }
     
   }

   function formclear(){
    document.getElementById('proid').value=" ";
    document.getElementById('name').value=" ";
    document.getElementById('price').value=" ";
    document.getElementById('image').value=" ";
    }