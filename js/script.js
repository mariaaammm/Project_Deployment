window.onload = () => {
    let items = document.getElementById('items')
    
    fetch('data.json')
    .then(data => data.json())
    .then(data => {
        data.map(post => {
            let title = post.title.substr(0, 20)
            let descr = post.body.substr(0, 55)
    
            items.innerHTML += `
                <div class="item">
                    <div class="item-img">
                        <img src="./img/${post.image}" alt="img">
                    </div>
                    <div class="item-info">
                        <h2>${title} ...</h2>
                        <p>${descr} ...</p>
                        <a href="post.html#${post.id}">Read more</a>
                    </div>
                </div>
            `
        })
    })
}

function show(){
    document.getElementById('searchBox').classList.toggle('show')
}

function searchPost(){
    let val = document.getElementById('search').value
    let searchBox = document.getElementById('searchBox')
    searchBox.innerHTML = ''
    
    fetch('data.json')
    .then(data => data.json())
    .then(data => {
        data.map(post => {
            let title = post.title.substr(0, 20)
    
            if(post.title.includes(val)){
                searchBox.innerHTML += `
                    <div class="search-item">
                        <img src="./img/${post.image}">
                        <h5><a href="post.html#${post.id}">${title} ...</a></h5>
                    </div>
                `
            }
        })
    })
    
}