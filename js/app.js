const loadList = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories/`
    fetch(url)
        .then(res => res.json())
        .then(data => displayList(data.data.news_category))
}
const displayList = allList => {
    // console.log(allList);
    const ulList = document.getElementById('list-item');
    allList.forEach(theList => {
        // console.log(theList);
        const li = document.createElement('li');
        li.innerHTML = `
        <a class="text-decoration-none fw-semibold text-black" href="">${theList.category_name}</a>
        `;
        ulList.appendChild(li)
    });
}

const loadData = () => {
    const url = ` https://openapi.programming-hero.com/api/news/category/08`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}
const displayData = allData => {
    const cardCont = document.getElementById('card-conteiner')
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
            <button type="button" class="btn btn-primary">
            Show Details
        </button>
            </div>
        </div>
    </div>
        `
        cardCont.appendChild(theDiv)
    });
}

loadData()
loadList()