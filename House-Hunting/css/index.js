const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

const toggleList = document.querySelectorAll('.toggleList');
for (let i = 0; i < toggleList.length; i++) {
  toggleList[i].addEventListener("click", function(){
    var list = toggleList[i].parentNode.querySelector('.locationList')
    if (list.style.display === "none") {
      list.style.display = "block";
    }
    else {
      list.style.display = "none";
    }
  })  
}

// document.getElementById("toggleList").addEventListener("click", function() {
//     var list = document.getElementById("locationList");
//     if (list.style.display === "none") {
//       list.style.display = "block";
//     } else {
//       list.style.display = "none";
//     }
//   });

  
