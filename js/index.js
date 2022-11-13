//fetch the data from the form

function getData(e){
   
    const data={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        city:document.getElementById("city").value,
        country:document.getElementById("country").value
    }
    
    console.log(data);
    return data;
}
function addrowTop(){
    const data=getData();
    if(data.fname!=""&&data.lname!=""&&data.country!="" &&data.city!=""){
        let row=document.querySelector("tbody");
        let x=2;
        for(let i=0;i<row.children.length;i++){
            row.children[i].firstElementChild.innerHTML=x++;
        }
        let new_row=row.insertRow(0);
        new_row.innerHTML=`<td>1</td>
                            <td>${data.fname}</td>
                            <td>${data.lname}</td>
                            <td>${data.city}</td>
                            <td>${data.country}</td>`
        console.log(typeof(new_row))
    }
    else{
        alert("please fill all value")
    }
}


function addRowBottom(){
    const data=getData();
    if(data.fname!=""&&data.lname!=""&&data.country!="" &&data.city!=""){
        let row=document.querySelector("tbody");
       let x=row.lastElementChild.firstElementChild.innerHTML;
        console.log(x);
        let new_row=row.insertRow(-1);
        new_row.innerHTML=`<td>${++x}</td>
                            <td>${data.fname}</td>
                            <td>${data.lname}</td>
                            <td>${data.city}</td>
                            <td>${data.country}</td>`
    }
    else{
        alert("please fill all value")
    }
}







 