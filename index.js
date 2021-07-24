function createDomMani(ele,eleClassName="",...arr){
    var element1=document.createElement(ele);
   
    element1.setAttribute("class",eleClassName);
    
    for(let iter=0;iter<arr.length;iter++){
        if(arr[iter].includes("=")){
        let attreibute,attributename;
        [attreibute,attributename]=arr[iter].split("=");
        element1.setAttribute(attreibute,attributename);
        }
        else{
            element1.innerHTML=arr[iter];
       }    
    }
    return element1;
}

function searchInit(){
    console.log("clicked")
    if(document.getElementById("mealtype").checked){
        console.log(document.getElementById("mealtype").value)
    }
    console.log(document.getElementsByName("mealtype").checked)
    
}

console.log(arr)




//let uri ='https://api.edamam.com/search?q=chicken&app_id=cd84854a&app_key=2885fcd6b87f52df9af52f44782056b7&from=0&to=3&calories=591-722&health=alcohol-free'

//fetch(uri)
//.then(response=>response.json())
//.then(data=>console.log(data))



