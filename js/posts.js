function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}

loadPost()

function displayPost(posts) {
    // console.log(photos);

    const divPost = document.getElementById('posts');
    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h3>${post?.id} </h3>
            <h4>${post?.title} </h4>
            <p>${post?.body} </p> 
        `

        divPost.appendChild(div);
    }
}