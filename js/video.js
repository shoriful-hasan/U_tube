// first load data is loaddata() and displayData() start
const loaddate = ()=>{
fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then((res)=>res.json())
    .then((data) => displayData(data.categories) )
     .catch((err) => console.error(err))

};

const displayData = (categoryname)=>{




categoryname.forEach((item)=>{

    const categoryBtn = document.querySelector('#categoryBtn')
    const button = document.createElement('button');
    button.classList = 'btn bg-yellow-200';
    button.innerText = item.category;

    categoryBtn.append(button)

// console.log(item);


})




}
// first load data is loaddata() and displayData() end





// video are come to api and use two function loadvideos() and videoDisplay() start here
const loadVideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
      .then((res)=>res.json())
       .then((data) => videoDisplay(data.videos))
         .catch((err) => console.error(err))
       
}








const videoDisplay = (videos)=> {
// console.log(videos);

const cardContainer = document.querySelector('#cardContainer')


videos.forEach((video)=>{
    
    console.log(video);

    const card = document.createElement('div');
    card.classList = `card shadow-xl`
    card.innerHTML = `
    <figure>
    <img   src= ${video.thumbnail} >
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
  
  </div>
    `

    cardContainer.append(card)
    
})



}



// top 3 card code is here

loaddate()

loadVideos()
