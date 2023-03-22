
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




const html = ` <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <div class="card-header">Categories</div>
    <div class="card-body">
        <div class="row">
            <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                    <div id="firstCategorieColumn">

                    </div>
                </ul>
            </div>
            <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
                <div id="secondCategorieColumn">

                </div>
            </ul>
            </div>

            

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
</footer>`;



   





let html1 = `
<!-- Responsive navbar-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="" id="nav-heading"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link" href="">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="">About</a></li>
                <li class="nav-item"><a class="nav-link" href="">Contact</a></li>
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="">Blog</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- Page content-->
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-8">
            <!-- Post content-->
            <article>
                <!-- Post header-->
                <header class="mb-4">
                    <!-- Post title-->
                    <h1 class="fw-bolder mb-1" id="post"> Welcome to Fruits Post!</h1>
                    <!-- Post meta content-->
                    <div class="text-muted fst-italic mb-2">Posted on ${month} ${day}, ${year} by Roshan Neupane</div>
                    <!-- Post categories-->
                    <a class="badge bg-secondary text-decoration-none link-light" href="#!">Foodies</a>
                    <a class="badge bg-secondary text-decoration-none link-light" href="#!">Blogs</a>
                </header>
                <!-- Preview image figure-->
               <div id="fruits-image">
               </div>
               <div id="apple-image"> </div>
                <!-- Post content-->
                <section class="mb-5">
                    <p class="fs-5 mb-4" id="paragraph 1"></p>
                    <p class="fs-5 mb-4" id="paragraph 2"></p>
                    <p class="fs-5 mb-4" id="paragraph 3"></p>
                    <h2 class="fw-bolder mb-4 mt-5" id="heading"></h2>
                    <p class="fs-5 mb-4" id="paragraph 4"> </p>
                    <p class="fs-5 mb-4" id="paragraph 5"></p>
                </section>
            </article>
            <!-- Comments section-->
            <section class="mb-5">
                <div class="card bg-light">
                    <div class="card-body">
                        <!-- Comment form-->
                        <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                        <!-- Comment with nested comments-->
                        <div class="d-flex mb-4">
                            <!-- Parent comment-->
                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div class="ms-3">
                                <div class="fw-bold">Commenter Name</div>
                                If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                <!-- Child comment 1-->
                                <div class="d-flex mt-4">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Commenter Name</div>
                                        And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                    </div>
                                </div>
                                <!-- Child comment 2-->
                                <div class="d-flex mt-4">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Commenter Name</div>
                                        When you put money directly to a problem, it makes a good headline.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Single comment-->
                        <div class="d-flex">
                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div class="ms-3">
                                <div class="fw-bold">Commenter Name</div>
                                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
            <!-- Search widget-->
            <div class="card mb-4">
                <div class="card-header">Search</div>
                <div class="card-body">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                        <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                    </div>
                </div>
            </div>
            <!-- Categories widget-->
            <div class="card mb-4">
                <div class="card-header">Categories</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <ul class="list-unstyled mb-0">
                            <div id="firstCategorieColumn">

                            </div>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <ul class="list-unstyled mb-0">
                            <div id="secondCategorieColumn">
                            </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Side widget-->
            <div class="card mb-4">
                <div class="card-header">Side Widget</div>
                <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
            </div>
        </div>
    </div>
</div>
<!-- Footer-->
<footer class="py-5 bg-dark">
    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
</footer>
`;


let show = document.getElementById("app");
show.innerHTML = html;




let fruitsCard = "";
let cardSwap = "";
let firstRowCard = "";
let secondRowCard = "";
let categoriesSection = "";
let firstColumn = "";
let secondColumn = "";
let fruitsImage = "";
let fetchData = [];

fetch("../db/data.json")
.then(response => response.json())
.then( data => {
  const [Categories,...rest] = data;

 fetchData.push(...rest);
     
     
          rest.forEach((el,index)=>{
             
              cardSwap =`
          <div class="card mb-4">
          <a href="#!"><img class="card-img-top" src="${el.image}" alt="..." /></a>
          <div class="card-body">
              <div class="small text-muted">${month}-${day}-${year}</div>
              <h2 class="card-title h4">${el.title}</h2>
              <p class="card-text">${el.paragraph}</p>

              <a class="btn btn-primary test "  data-indexs = "${el.title}">Read more →</a>
          </div>
         </div>
          ` ;
          
        
          if(index === 0){
              fruitsCard = cardSwap;
              document.getElementById("fruits-card").innerHTML = fruitsCard;
             
          }else if(index === 1 || index === 2){
              firstRowCard += cardSwap;
             document.getElementById("first-column").innerHTML = firstRowCard;
          }else if(index === 3 || index === 4) {
              secondRowCard += cardSwap
              document.getElementById("second-column").innerHTML = secondRowCard;
             
          }
          
          });            
     
// Add  Categories 

Categories.forEach((el,index)=>{
  categoriesSection = `<li><a href="#">${el}</a></li>`;
                  if(index === 0 || index === 1){
                      
                      firstColumn += categoriesSection; 
                      document.getElementById("firstCategorieColumn").innerHTML = firstColumn;
                  }else{
                      secondColumn += categoriesSection;
                      document.getElementById("secondCategorieColumn").innerHTML = secondColumn;
                  }
                
 
 
});
})

//wait for data fetch.  
setTimeout(() => {
  
      const link = document.querySelectorAll(".test");
      
      link.forEach((button) => {
      button.addEventListener("click", ()=>{
              
      
          const fruitName = button.dataset.indexs;
         
        
      
              let script = document.createElement("script");
              script.setAttribute("src",`js/${fruitName}.js`);
           
              document.body.appendChild(script);
             
      
              const nextURL = `http://127.0.0.1:5502/${fruitName}`;
              
              
              const nextTitle = 'My new page title';
              const nextState = { additionalInformation: 'Updated the URL with JS' };
              
              // This will create a new entry in the browser's history, without reloading
              window.history.pushState(nextState, nextTitle, nextURL);
              
              // This will replace the current entry in the browser's history, without reloading
              window.history.replaceState(nextState, nextTitle, nextURL);
              // show.style.display = "none";
              
          });
      })
      
      
}, 300);

const homePathname = location.pathname
