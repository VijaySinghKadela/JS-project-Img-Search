let array = [
   {name:"apple" , Image:"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"mango" , Image:"https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"banana", Image:"https://plus.unsplash.com/premium_photo-1664527307725-362b589c406d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"pineapple",Image:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"kiwi",Image:"https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"watermelon", Image:"https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   {name:"orange", Image:"https://images.unsplash.com/photo-1552089123-2d26226fc2b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showTheCards(){
   let clutter = '';
   array.forEach(function(obj){
      clutter += ` <div class="box">
      <img class="cursor-pointer" src="${obj.Image}" alt="Image" >
      <div class="caption">Lorem, ipsum.</div>
  </div>`;
   });
   document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){
   let input = document.querySelector('#searchinput');
   
   input.addEventListener('focus', function(){
      document.querySelector('.overlay').style.display = 'block';
   
   })

   input.addEventListener('blur', function(){
      document.querySelector('.overlay').style.display = 'none';
   
   })

   input.addEventListener('input',function(){
      let filteredArray = array.filter(obj => obj.name.toLowerCase().startsWith(input.value))
      let clutter = '';
      filteredArray.forEach(function(obj){
         clutter += `<div class="res flex px-8 py-3">
         <i class="ri-search-line font-semibold mr-5"></i>
         <h3 class="font-semibold">${obj.name}</h3>
     </div>`;
      })

      document.querySelector('.searchdata').style.display = 'block';
      document.querySelector('.searchdata').innerHTML = clutter;


   })





}

showTheCards()
handleSearchFunctionality()
