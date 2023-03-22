document.title = "Apple";


document.getElementById("app").innerHTML = html1

fetchData.forEach((el,index)=>{
    fruitsImage = ` <figure class="mb-4"><img class="img-fluid rounded" src="${el.image}" alt="..." /></figure>`;

if(index === 1){
    document.getElementById("nav-heading").innerHTML = el.title;
    document.getElementById("post").innerHTML = ` Welcome to ${el.title} Post`;
    document.getElementById("fruits-image").innerHTML = fruitsImage;

}
if(index === 5){
    document.getElementById("paragraph 1").innerHTML = el.apple.p1;
    document.getElementById("paragraph 2").innerHTML = el.apple.p2;
    document.getElementById("paragraph 3").innerHTML = el.apple.p3;
    document.getElementById("heading").innerHTML = el.apple.h1;
    document.getElementById("paragraph 4").innerHTML = el.apple.p4;
    document.getElementById("paragraph 5").innerHTML = el.apple.p5;
}
}); 
window.onpopstate = function() {
    location.reload(true);
  };