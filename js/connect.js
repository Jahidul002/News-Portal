const categoriList = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories/`
    fetch(url)
        .then(res => res.json())
        .then(data => displaycategoriList(data.data.news_category))

}
const displaycategoriList = allList => {
    // console.log(allList);

    const ulList = document.getElementById('list-item');
    allList.forEach(theList => {

        // console.log(theList);
        const li = document.createElement('li');
        li.innerHTML = `
        <a onclick="loadData('${theList.category_id}')" class="text-decoration-none fw-semibold li-txt" href="#">${theList.category_name}</a>
        `;
        ulList.appendChild(li)
        // console.log(theList.category_id)
    });
}



const loadData = (category_id) => {
    toggleSpinner(true)
    // console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}
const displayData = allData => {
    const cardCont = document.getElementById('card-Container')
    cardCont.innerHTML = ``;
    allData.forEach(theData => {
        loadNewsData(theData._id)
        // console.log(theData);
        const theDiv = document.createElement('div');
        theDiv.classList.add('col')
        theDiv.innerHTML = `
    <div class="card h-100">
    <img class="img-fluid" src="${theData.image_url}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${theData.title}</h5>
        <p class="card-text">${theData.details.slice(0, 150)}</p>
    </div>
    <div class="d-flex justify-content-evenly align-items-center">
        <div class="d-flex">
            <img style="height:50px ; border-radius: 50%;" src="${theData.author.img}" alt="">
            <div>
                <p class="fs-5">${theData.author.name}</p>
                <p class="fs-6">${theData.author.published_date}</p>
            </div>
        </div>
        <div><i class="fa-solid fa-eye">${theData.total_view}</i></div>
        <div>
        <button  href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#see-more">See More</button>
         </div>
    </div>
</div>
    `
        cardCont.appendChild(theDiv)
    });
    toggleSpinner(false)
}


const toggleSpinner = isLoading => {
    const loaderSec = document.getElementById('loader');
    if (isLoading) {
        loaderSec.classList.remove('d-none')
    }
    else {
        loaderSec.classList.add('d-none')
    }
}



const loadNewsData = (news_id) => {
    // console.log('get detail', news_id);
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data, data[0]))
}
const displayNews = (theNewses) => {
    const newsData = theNewses.data[0];

    const { details, title, } = newsData;
    // console.log(title);
    console.log(newsData);
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = `${title}`
    const modalBody = document.getElementById('modal-body');
    modalBody.innerText = `${details}`
    const imgCont = document.getElementById('img-cnt')
    const modalImg = document.getElementById('modal-img')
    modalImg.innerHTML = ` <img style="height:50px ; border-radius: 50%;" src="${newsData.author.img}" alt="">
    <div>
    <p id="author-name" class="fs-5">${newsData.author.name}</p>
       <p class="fs-6">${newsData.author.published_date}</p>
 </div>
    `
    imgCont.appendChild(modalImg);
    const authorName = document.getElementById('author-name');

}

categoriList()
loadData('08')
