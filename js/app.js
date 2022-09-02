const loadDAta = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayData(data.data.news_category))
}
const displayData = (catagories) => {
    // console.log(catagories);
    const ulList = document.getElementById('list-ul');
    for (const item of catagories) {
        // console.log(item);
        const li = document.createElement('li');
        li.innerHTML = `
        <a>${item.category_name}</a>
        `;
        ulList.appendChild(li)
    }

}
loadDAta()