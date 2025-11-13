let apprenant = [];
let apprenants = [];
let list={
        name_squid:"squid 1",
        fullname: "mouad sertati",
        age:22,
        email:"mouadsertati@gmail.com",
        image:"image/1.jpg"
};
let count = 0;
async function fetchdata(file) {
    let data = await fetch(file);
    let lists = await data.json();
    apprenant[0] = lists;
  

    apprenants = JSON.parse(localStorage.getItem("apprenant"))
    addlocalstorine();
    



}



fetchdata('data.json');

function addlocalstorine() {


    localStorage.setItem("apprenant", JSON.stringify(apprenant))

    apprenants = JSON.parse(localStorage.getItem("apprenant"))

listApprenant();

}

// =========


let car_apprenant = document.getElementById('card_apprenant');

function listApprenant() {



    car_apprenant.innerHTML += " "

    let cart = `<div class="card" style="width: 18rem;">
              <img src="${apprenants[n].image}"  class="card-img-top" alt="photo"height="100px" width="150"> 
              <div class="card-body">
             <h5> the name :${apprenants[n].fullname}</h5> 
                <p>the email ${apprenants[n].email}</p> 
                <small>the age :${apprenants[n].age}</small> 
                </div>
                   </div>
                   `
    car_apprenant.innerHTML += cart;






    console.log("hi");



}

//  ajoute apprenant 

let btn_ajoute = document.getElementById("btn_ajoute");
let email = document.getElementById("the_email");
let fullnam = document.getElementById("fullname");
let age = document.getElementById("the_Age");

let n = 0;
btn_ajoute.addEventListener('click', () => {
    n++;
    list.fullname = fullnam.value;
    list.email = email.value;
    list.age = age.value;
    apprenant[n] = list

    console.log(apprenant)
    addlocalstorine();

   

})