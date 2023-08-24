const result=document.getElementById('result')
const filter=document.getElementById('filter')
const listItems=[]

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
//fetch returns a promise
    const { results } = await res.json()
// results gets an object with  info and results so we can destructure results
// Clear result
    result.innerHTML = ''
    //clearing result will not show loading

    results.forEach(user => {
        const li = document.createElement('li')
// creating li for each users and then take our list items array
//then take listitemsa rray and push li
        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}