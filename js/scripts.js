
const currentDate = new Date();
const year = currentDate.getFullYear();
const day = currentDate.getDate();
let month;

switch(new Date().getDay()){
    case 0:
        month = "January"; 
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month ="March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June"
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
       
}




const html = `       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
    <a class="navbar-brand" href="#!">Fruits Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Blog</a></li>
        </ul>
    </div>
</div>
</nav>
<!-- Page header with logo and tagline-->
<header class="py-5 bg-light border-bottom mb-4">
<div class="container">
    <div class="text-center my-5">
        <h1 class="fw-bolder">Welcome to Fruits Blog!</h1>  
        <p class="lead mb-0">Fruit in a day is the healthy way!</p>
    </div>
</div>
</header>
<!-- Page content-->
<div class="container">
<div class="row">
    <!-- Blog entries-->
    <div class="col-lg-8">
        <!-- Featured blog post-->

        <div id="fruits-card">

        </div>
        
        <!-- Nested row for non-featured blog posts-->
        <div class="row">
         <div class="col-lg-6">
            <div id="first-column">

            </div>

            </div>
            <div class="col-lg-6">
            <div id="second-column">
            </div>
            </div>
         


        </div>
        <!-- Pagination-->
        <nav aria-label="Pagination">
            <hr class="my-0" />
            <ul class="pagination justify-content-center my-4">
                <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                <li class="page-item"><a class="page-link" href="#!">15</a></li>
                <li class="page-item"><a class="page-link" href="#!">Older</a></li>
            </ul>
        </nav>
    </div>
    <!-- Side widgets-->
    <div class="col-lg-4">
        <!-- Search widget-->
        <div class="card mb-4">
            <div class="card-header">Search</div>
            <div class="card-body">
                <div class="input-group">
                    <input class="form-control" id="fruitName" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                    <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                </div>
            </div>
        </div>
        <!-- Categories widget-->
        <div class="card mb-4" id="categories-section">
            

        </div>
        <!-- Side widget-->
        <div class="card mb-4">
            <div class="card-header">Our Slogan</div>
            <div class="card-body">you deserve more health</div>
        </div>
        <div id="fruit-pic">
           
        </div>
    </div>
</div>
</div>
<!-- Footer-->
<footer class="py-5 bg-dark">
<div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
</footer>`


    document.getElementById("app").innerHTML = html;




let fruitsCard = "";
let cardSwap = "";
let firstRowCard = "";
let secondRowCard = "";
let categoriesSection = "";


fetch("../db/data.json")
.then(response => response.json())
.then( data => {
    const [Categories,fruitsinfo,appalInfo,bananaInfo,mangoInfo,litchiInfo] = data;

    // function to add fruits cards.
    function mainCard(...rest){
       
       
            rest.forEach((el,index)=>{

                cardSwap =`
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="${el.image}" alt="..." /></a>
            <div class="card-body">
                <div class="small text-muted">${month}-${day}-${year}</div>
                <h2 class="card-title h4">${el.title}</h2>
                <p class="card-text">${el.paragraph}</p>
                <a class="btn btn-primary" href="${el.link}">Read more →</a>
            </div>
           </div>
            ` ;
          
            if(index === 0){
                fruitsCard = cardSwap;
                document.getElementById("fruits-card").innerHTML = fruitsCard;

            }else if(index===1 || index===2){
                firstRowCard += cardSwap;
               document.getElementById("first-column").innerHTML = firstRowCard;
               console.log(firstRowCard)
            }else if(index === 3 || index === 4)

            {
                secondRowCard += cardSwap
                document.getElementById("second-column").innerHTML = secondRowCard;
               
            }
            });            
        }
mainCard(fruitsinfo,appalInfo,bananaInfo,mangoInfo,litchiInfo);


// Add  Categories 
Categories.forEach((el)=>{
        console.log(el.Categories.second);

    categoriesSection = `
    <div class="card-header">Categories</div>
    <div class="card-body">
        <div class="row">
            <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                    <li><a href="#">${el.Categories.first}</a></li>
                    <li><a href="#">${el.Categories.second}</a></li>
                   
                </ul>
            </div>
            <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                <li><a href="#!">${el.Categories.third}</a></li
                    <li><a href="#!">${el.Categories.fourth}</a></li>
                   
                </ul>
            </div>
        </div>
    </div>
    `;
    document.getElementById("categories-section").innerHTML = categoriesSection;

   
});
})

       