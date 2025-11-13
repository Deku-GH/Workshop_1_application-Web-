let apprenant=[];
let apprenants=[];
async function fetchdata(file) {
    let data = await fetch(file);
    let list = await data.json();
    apprenant = list;
     console.log(apprenant)
addlocalstorine()
    listApprenant();
    
   console.log(apprenant)
       
} 


fetchdata('data.json');

function addlocalstorine() {

   
    localStorage.setItem("apprenant", JSON.stringify(apprenant))
    
   apprenants = JSON.parse(localStorage.getItem("apprenant"))
    
     
  
}

// =========


let car_apprenant = document.getElementById('card_apprenant');

function listApprenant() { 
    
            addlocalstorine();
 
   
   car_apprenant.innerHTML += " "
   
      let cart = `<div class="card" style="width: 18rem;">
              <img src="${apprenants.image}"  class="card-img-top" alt="photo"height="100px" width="150"> 
              <div class="card-body">
             <h5> the name :${apprenants.fullname}</h5> 
                <p>the email ${apprenants.email}</p> 
                <small>the age :${apprenants.age}</small> 
                </div>
                   </div>
                   `
        car_apprenant.innerHTML+=cart;
    
  
      
       
        
  
     console.log("hi");

         
    
}

//  ajoute apprenant 

let btn_ajoute = document.getElementById("btn_ajoute");
 let email = document.getElementById("the_email");
 let fullnam = document.getElementById("fullname");
 let age = document.getElementById("the_Age");

btn_ajoute.addEventListener('click',()=>{
                    let obejapp
        apprenant.fullname =  fullnam.value;
           apprenant.email = email.value;
          apprenant.age= age.value;
       
           console.log(apprenant)
           addlocalstorine();
        
           listApprenant();

})