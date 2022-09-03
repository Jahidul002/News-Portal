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
    console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCardData(data.data))
}
const displayCardData = allData => {
    const cardCont = document.getElementById('card-Container')
    cardCont.innerHTML = ``;
    allData.forEach(theData => {

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

<div class="modal fade" id="see-more" tabindex="-1" aria-labelledby="see-moreLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="see-moreLabel">${theData.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           ${theData.details}
        </div>
        <div class="d-flex">
            <img style="height:50px ; border-radius: 50%;" src="${theData.author.img}" alt="">
            <div>
                 <p class="fs-5">${theData.author.name}</p>
                <p class="fs-6">${theData.author.published_date}</p>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>
    `
        cardCont.appendChild(theDiv)
    });
}

const loadNewsData = (news_id) => {
    // console.log('get detail', news_id);
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}


categoriList()
