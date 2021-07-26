let urlstringarray = ["https://api.edamam.com/api/recipes/v2?app_id=c343fcec&app_key=e20308a62ec2088e7a82ecc8463db5ae&type=public"];
let mealelement = [],dietelement = [];
let dietrestrictionarray = []
let dishtypearray = []
let cuisinearray = []

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


// top bar generation
let topbar = createDomMani("div")
let anchorone = createDomMani("a","","href=index.html","EDAMAM FINDER")
let anchortwo = createDomMani("a","topright","href=index.html","Home")
let anchorthree = createDomMani("a","topright","href=https://www.edamam.com/about/company.jsp","About EDAMAM")
let anchorfour = createDomMani("a","icon","href=javascript:void(0);","onclick=myFunction()")
let itag = createDomMani("i","fa fa-bars")
anchorfour.append(itag)
topbar.append(anchorone,anchortwo,anchorthree,anchorfour)
document.getElementById('myTopnav').append(topbar)

//sidebar generation
let meallist = [
                  {
                    mealtype:"Breakfast",
                    mealkey:"breakfast"
                  },
                  {
                    mealtype:"Lunch",
                    mealkey:"lunch"
                  },
                  {
                    mealtype:"Dinner",
                    mealkey:"dinner"
                  },
                  {
                    mealtype:"Snack",
                    mealkey:"snack"
                  },
                  {
                    mealtype:"Teatime",
                    mealkey:"teatime"
                  },
                ]
let mealtype = createDomMani("ul","meallist")
let mealtypetitle = createDomMani("div","","Meal")
let mealanchors = meallist.map(e=>{
                                  let lielement = createDomMani("li","list-element")
                                  let labelelement = createDomMani("label","meal","for=mealtype")
                                  let pelement = createDomMani("span","",e.mealtype)
                                  let inputelement = createDomMani("input","mealinput","type=radio","name=meal",`value=${e.mealkey}`,`onchange=mealchange(value)`)
                                  labelelement.append(inputelement,pelement)
                                  lielement.append(labelelement)
                                  return lielement
                                  })
mealtype.append(mealtypetitle)
mealtype.append(...mealanchors)
document.getElementById('sidenav').append(mealtype)
function mealchange(str){
  
  mealelement = []
  mealelement.push(`&mealType=`)
  mealelement.push(`${str}`)
  
}
    let dietlist = [
                      {
                        diettype:"Balanced",
                        dietkey:"balanced"
                        },
                        {
                          diettype:"High-Fiber",
                          dietkey:"high-fiber"
                          
                        },
                        {
                          diettype:"High-Protein",
                          dietkey:"high-protein"
                        },
                        {
                          diettype:"Low-Carb",
                          dietkey:"low-carb"
                        },
                        {
                          diettype:"Low-Fat",
                          dietkey:"low-fat"
                        },
                        {
                          diettype:"Low-Sodium",
                          dietkey:"low-sodium"
                        }
                    ]
let diettype = createDomMani("ul","dietlist")
let diettypetitle = createDomMani("div","","Diet")
let dietanchors = dietlist.map(e=>{
                                  let lielement = createDomMani("li","list-element")
                                  let labelelement = createDomMani("label","diet","for=diettype")
                                  let pelement = createDomMani("span","",e.diettype)
                                  let inputelement = createDomMani("input","dietinput","type=radio","name=diettype",`value=${e.dietkey}`,`onchange=dietchange(value)`)
                                  labelelement.append(inputelement,pelement)
                                  lielement.append(labelelement)
                                  return lielement
                                  })
diettype.append(diettypetitle)
diettype.append(...dietanchors)
document.getElementById('sidenav').append(diettype)

function dietchange(str){
  dietelement = []
  dietelement.push(`&diet=`)
  dietelement.push(`${str}`)
}

let dietaryrestrictions = [
                            {
                              dietresttype:"Alcohol-free",
                              dietrestkey:"alcohol-free"
                            },
                            {
                              dietresttype:"Immune-Supportive",
                              dietrestkey:"immuno-supportive"
                            },
                            {
                              dietresttype:"Celery-free",
                              dietrestkey:"celery-free"
                            },  
                            {
                              dietresttype:"Crustcean-free",
                              dietrestkey:"crustcean-free"
                            },
                            {
                              dietresttype:"Dairy-free",
                              dietrestkey:"dairy-free"
                            },
                            {
                              dietresttype:"Eggs free",
                              dietrestkey:"eggs-free"
                            },
                            {
                              dietresttype:"Fish free",
                              dietrestkey:"fish-free"
                            },
                            {
                              dietresttype:"FODMAP free",
                              dietrestkey:"fodmap-free"
                            },
                            {
                              dietresttype:"Keto friendly",
                              dietrestkey:"keto-friendly"
                            },
                            {
                              dietresttype:"Kidney friendly",
                              dietrestkey:"kidney-friendly"
                            },
                            {
                              dietresttype:"Lupine free",
                              dietrestkey:"lupine-free"
                            },
                            {
                              dietresttype:"Kosher",
                              dietrestkey:"kosher"
                            }, 
                            {
                              dietresttype:"Mustard free",
                              dietrestkey:"mustard-free"
                            },
                            {
                              dietresttype:"Low potassium",
                              dietrestkey:"low-potassium"
                            },
                            {
                              dietresttype:"Low fat",
                              dietrestkey:"low-fat-abs"
                            },
                            {
                              dietresttype:"No oil added",
                              dietrestkey:"no-oil-added"
                            },
                            {
                              dietresttype:"No sugar",
                              dietrestkey:"low-sugar"
                            },
                            {
                              dietresttype:"Paleo",
                              dietrestkey:"paleo"
                            },
                            {
                              dietresttype:"Pescatarian",
                              dietrestkey:"pecatarian"
                            },
                            {
                              dietresttype:"Pork free",
                              dietrestkey:"pork-free"
                            },
                            {
                              dietresttype:"Red meat free",
                              dietrestkey:"red-meat-free"
                            },
                            {
                              dietresttype:"Sesame free",
                              dietrestkey:"sesame-free"
                            },
                            {
                              dietresttype:"Shellfish free",
                              dietrestkey:"shellfish-free"
                            },
                            {
                              dietresttype:"Soy free",
                              dietrestkey:"soy-free"
                            },
                            {
                              dietresttype:"Sugar conscious",
                              dietrestkey:"sugar-conscious"
                            },
                            {
                              dietresttype:"Tree Nuts",
                              dietrestkey:"tree-nut-free"
                            }, 
                            {
                              dietresttype:"Vegan",
                              dietrestkey:"vegan"
                            },
                            {
                              dietresttype:"Vegetarian",
                              dietrestkey:"vegetarian"
                            },
                            {
                              dietresttype:"Wheat free",
                              dietrestkey:"wheat-free"
                            },
                            
                          ]
let dietaryresttype = createDomMani("ul","dietaryrestlist")
let dietaryresttypetitle = createDomMani("div","","Dietary restrictions")
let dietaryrestanchors = dietaryrestrictions.map(e=>{
                                  let lielement = createDomMani("li","list-element")
                                  let labelelement = createDomMani("label","dietaryrest","for=dietaryresttype")
                                  let pelement = createDomMani("span","",e.dietresttype)
                                  let inputelement = createDomMani("input","dietaryinput","type=checkbox","name=dietaryresttype",`value=${e.dietrestkey}`,`onchange=dietaryrestrictionchange(value)`)
                                  labelelement.append(inputelement,pelement)
                                  lielement.append(labelelement)
                                  return lielement
                                  })
dietaryresttype.append(dietaryresttypetitle)
dietaryresttype.append(...dietaryrestanchors)
document.getElementById('sidenav').append(dietaryresttype)


let dishtypelist = [
                      {
                        dishtype:"Biscuits and cookies",
                      },
                      {
                        dishtype:"Bread",
                      },
                      {
                        dishtype:"Cereals",
                      },
                      {
                        dishtype:"Condiments and sauces",
                      },
                      {
                        dishtype:"Desserts",
                      },
                      {
                        dishtype:"Drinks",
                      },
                      {
                        dishtype:"Main course",
                      },
                      {
                        dishtype:"Pancake",
                      },
                      {
                        dishtype:"Preps",
                      },
                      {
                        dishtype:"Preserve",
                      },
                      {
                        dishtype:"Salad",
                      },
                      {
                        dishtype: "Sandwiches",
                      },
                      {
                        dishtype:"Side dish",
                      },
                      {
                        dishtype:"Soup",
                      },
                      {
                        dishtype:"Starter",
                      },
                      {
                        dishtype:"Sweets",
                      },

                    ]
let dishtype = createDomMani("ul","dishlist")
let dishtitle = createDomMani("div","","Dish Type")
let dishanchors = dishtypelist.map(e=>{
                                        let lielement = createDomMani("li","list-element")
                                        let labelelement = createDomMani("label","dish","for=dishtype")
                                        let pelement = createDomMani("span","",e.dishtype)
                                        let inputelement = createDomMani("input","dishinput","type=checkbox","name=dishtype",`value=${e.dishtype}`)
                                        labelelement.append(inputelement,pelement)
                                        lielement.append(labelelement)
                                        return lielement
                                      })
dishtype.append(dishtitle)
dishtype.append(...dishanchors)
document.getElementById('sidenav').append(dishtype)

let cuisinelist = [
                      {
                        cuisine:"American",
                      },
                      {
                        cuisine:"Asian",
                      },
                      {
                        cuisine:"British",
                      },
                      {
                        cuisine:"Caribbean",
                      },
                      {
                        cuisine:"Central Europe",
                      },
                      {
                        cuisine:"Chinese",
                      },
                      {
                        cuisine:"Eastern Europe",
                      },
                      {
                        cuisine:"French",
                      },
                      {
                        cuisine:"Indian",
                      },
                      {
                        cuisine:"Italian",
                      },
                      {
                        cuisine:"Japanese",
                      },
                      {
                        cuisine:"Kosher",
                      },
                      {
                        cuisine:"Mediterranean",
                      },
                      {
                        cuisine:"Mexican",
                      },
                      {
                        cuisine:"Middle Eastern",
                      },
                      {
                        cuisine:"Nordic",
                      },
                      {
                        cuisine:"South American",
                      },
                      {
                        cuisine:"South East Asian"
                      },

                    ] 

let cuisinetype = createDomMani("ul","cuisinelist")
let cuisinetitle = createDomMani("div","","Cuisine Type")
let cuisineanchors = cuisinelist.map(e=>{
                                        let lielement = createDomMani("li","list-element")
                                        let labelelement = createDomMani("label","cuisine","for=cuisinetype")
                                        let pelement = createDomMani("span","",e.cuisine)
                                        let inputelement = createDomMani("input","cuisineinput","type=checkbox","name=cuisinetype",`value=${e.cuisine}`)
                                        labelelement.append(inputelement,pelement)
                                        lielement.append(labelelement)
                                        return lielement
                                      })
cuisinetype.append(cuisinetitle)
cuisinetype.append(...cuisineanchors)
document.getElementById('sidenav').append(cuisinetype)


let maindiv = createDomMani("div","container")
let rowdiv = createDomMani("div","row")
let mainheader = createDomMani("h2","mainheader","Find recipes at the click of a button")
rowdiv.append(mainheader)
maindiv.append(rowdiv)
document.getElementById('main').append(maindiv)
let row2div = createDomMani("div","row")
let col8div = createDomMani("div","col-8")
let labelsearch = createDomMani("label","searchbar","for=searchkey")
let inputsearch = createDomMani("input","searchinput","type=text","name=searchkey","id=searchkey","placeholder=Search here...","size=30")
let isearch = createDomMani("i","fa fa-search","aria-hidden=true","onclick=search()")
col8div.append(labelsearch,inputsearch,isearch)
row2div.append(col8div)
maindiv.append(row2div)
let cardrow = createDomMani("div","row")
maindiv.append(cardrow)

function search(){

    if(inputsearch.value){
      if(urlstringarray.length>1){
        urlstringarray.pop()
        urlstringarray.pop()
      }
      console.log(urlstringarray.length)
      urlstringarray.push("&q=")
      urlstringarray.push(inputsearch.value)
    }
    console.log(urlstringarray)
    let urlstring = urlstringarray.reduce((str,e)=>str+e)
    if(mealelement.length>0){
      urlstring = urlstring + mealelement.reduce((str,e)=>str+e)
    }
    if(dietelement.length>0){
      urlstring = urlstring + dietelement.reduce((str,e)=>str+e)
    }
    if(dietrestrictionarray.length>0){
      urlstring = urlstring + dietrestrictionarray.reduce((str,e)=>str+e)
    }
    while (cardrow.firstChild) {
      cardrow.removeChild(cardrow.firstChild);
    }
    console.log(urlstring)
    fetch(urlstring)
    .then(response=>response.json())
    .then(data=>{
       data["hits"].map(e=>{
        
        let colele = createDomMani("div","col-4")
        let carddiv = createDomMani("div","card")
        let imageele = createDomMani("img","card-img-top",`src=${e["recipe"]["image"]}`)
        let cardbodyele = createDomMani("div","card-body")
        let cardtitle = createDomMani("h5","card-title",`${e["recipe"]["label"]}`)
        let linkelement = createDomMani("a","btn btn-primary",`href=${e["recipe"]["url"]}`,"target=_blank","More info")
        cardbodyele.append(cardtitle,linkelement)
        carddiv.append(imageele,cardbodyele)
        colele.append(carddiv)
        cardrow.append(colele)
                                            })
      
    })
}
/********************************************************URL test*********************/
//let uri ='https://api.edamam.com/search?q=chicken&app_id=cd84854a&app_key=2885fcd6b87f52df9af52f44782056b7&from=0&to=3&calories=591-722&health=alcohol-free'

//fetch(uri)
//.then(response=>response.json())
//.then(data=>console.log(data))
/********************************************************URL test*********************/
/*********************************************************html code*******************

<div class="main">

<div class="container">
    <div class="row">
        <h2> Find recipes at the click of a button</h2>
    </div>
    
    <div class="row">
      <label for="searchkey"><input style="border-radius: 15px;"  type="text" name="searchkey" id="searchkey"  placeholder="   Search here..." size="40"></label><i class="fa fa-search" aria-hidden="true" onclick="searchInit()"></i>
    </div>
    
    

    <div class="row ">
      <div class="col-3 ">
        <a class="btn btn-light" data-toggle="collapse" href="#collapseMeal" role="button" aria-expanded="false" aria-controls="collapseMeal">
          Meal (Choose One)
        </a>
        <div class="collapse" id="collapseMeal">
          <div class="card card-body">
           <ul style="list-style-type: none;">
             <li> <a href="#" class="btn btn-secondary" style="margin: 5px;" name="" onclick="update(event)" >Breakfast</a></li>
             <li> <a href="#" class="btn btn-secondary" style="margin: 5px;" name="" onclick="update(event)" >Lunch</a></li>
             <li> <a href="#" class="btn btn-secondary" style="margin: 5px;" name="" onclick="update(event)" >Dinner</a></li>
             <li> <a href="#" class="btn btn-secondary" style="margin: 5px;" name="" onclick="update(event)" >Snack</a></li>
             <li> <a href="#" class="btn btn-secondary" style="margin: 5px;" name="" onclick="update(event)" >Teatime</a></li>	
           </ul>
          </div>
        </div>
       </div> 
       
      <div class="col-3">
       <a class="btn btn-light" data-toggle="collapse" href="#collapseDiet" role="button" aria-expanded="false" aria-controls="collapseDiet">
        Diet (Choose One)
      </a>
      <div class="collapse" id="collapseDiet">
        <div class="card card-body">
         <ul style="list-style-type: none;">
           <li><input type="checkbox" name="" id=""> <label for="">Balanced</label></li>
           <li><input type="checkbox" name="" id=""> <label for="">High-Fiber</label></li>
           <li><input type="checkbox" name="" id=""> <label for="">High-Protein</label></li>
           <li><input type="checkbox" name="" id=""> <label for="">Low-Carb</label></li>
           <li><input type="checkbox" name="" id=""> <label for="">Low-Fat</label></li>	
           <li><input type="checkbox" name="" id=""> <label for="">Low-Sodium</label></li>	
         </ul>
        </div>
      </div>
      </div>
      <div class="col-4">
        <a class="btn btn-light" data-toggle="collapse" href="#collapseDietRest" role="button" aria-expanded="false" aria-controls="collapseDietRest">
          Dietary restrictions (None/One/Many)
        </a>
        <div class="collapse" id="collapseDietRest">
          <div class="card card-body">
           <ul style="list-style-type: none;">
             <li><input type="checkbox" name="" id=""> <label for="">Balanced</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">High-Fiber</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">High-Protein</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Low-Carb</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Low-Fat</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Low-Sodium</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Alcohol-free</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Immune-Supportive</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Celery-free</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Crustcean-free</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Dairy</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Eggs</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Fish</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">FODMAP</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Gluten</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Keto</label></li>	
             <li><input type="checkbox" name="" id=""> <label for="">Kidney friendly</label></li>		
             <li><input type="checkbox" name="" id=""> <label for="">Kosher</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Low potassium</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Lupine-free</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Mustard-free</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">No oil added</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">No-sugar</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Paleo</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Peanuts</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Pescatarian</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Pork-free</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Red meat-free</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Sesame-free</label></li>
             <li><input type="checkbox" name="" id=""> <label for="">Shellfish</label></li>
           </ul>
          </div>
        </div>
        </div>
        <div class="col-3">
          <a class="btn btn-light" data-toggle="collapse" href="#collapseCuisine" role="button" aria-expanded="false" aria-controls="collapseCuisine">
            Cuisine Type (None/One/Many)
          </a>
          <div class="collapse" id="collapseCuisine">
            <div class="card card-body">
             <ul style="list-style-type: none;">
               <li><input type="checkbox" name="" id=""> <label for="">Alcohol-cocktail</label></li>
               <li><input type="checkbox" name="" id=""> <label for="">Biscuits and cookies</label></li>
               <li><input type="checkbox" name="" id=""> <label for="">Bread</label></li>
               <li><input type="checkbox" name="" id=""> <label for="">Cereals</label></li>
               <li><input type="checkbox" name="" id=""> <label for="">Condiments and sauces</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Drinks</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Desserts</label></li>
               <li><input type="checkbox" name="" id=""> <label for="">Egg</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Main course</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Omelet</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Pancake</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Preps</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Preserve</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Salad</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Sandwiches</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Soup</label></li>	
               <li><input type="checkbox" name="" id=""> <label for="">Starter</label></li>	
             </ul>
            </div>
          </div>
         </div>
        <div class="col-5">
          <a class="btn btn-light" data-toggle="collapse" href="#collapseDish" role="button" aria-expanded="false" aria-controls="collapseDish">
            Dish Type (None/One/Many)
          </a>
          <div class="collapse" id="collapseDish">
            <div class="card card-body">
             <ul style="list-style-type: none;">
               <li><input type="checkbox" value="Alcohol-cocktail" id="dishtype"> <label for="dishtype">Alcohol-cocktail</label></li>
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Biscuits and cookies</label></li>
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Bread</label></li>
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Cereals</label></li>
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Condiments and sauces</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Drinks</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Desserts</label></li>
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Egg</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Main course</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Omelet</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Pancake</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Preps</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Preserve</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Salad</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Sandwiches</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Soup</label></li>	
               <li><input type="checkbox" value="" id="dishtype"> <label for="dishtype">Starter</label></li>	
             </ul>
            </div>
          </div>
         </div>
         
      </div>
      
       
    </div>
</div>


/********************************************************URL test*********************/

/********************************************************URL test*********************/
//let uri ='https://api.edamam.com/search?q=chicken&app_id=cd84854a&app_key=2885fcd6b87f52df9af52f44782056b7&from=0&to=3&calories=591-722&health=alcohol-free'

//fetch(uri)
//.then(response=>response.json())
//.then(data=>console.log(data))
/********************************************************URL test*********************/


