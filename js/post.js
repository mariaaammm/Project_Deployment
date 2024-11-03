window.onload = () => {
    let id = location.hash.slice(1)
    let titleBox = document.getElementById('postTitle')
    let descrBox = document.getElementById('postDescr')
    let img = document.getElementById('postImg')

    fetch('data.json')
        .then(data => data.json())
        .then(data => {
            let post = data[id - 1]

            titleBox.innerHTML = post.title
            descrBox.innerHTML = post.body
            img.src = `./img/${post.image}`
        })

}