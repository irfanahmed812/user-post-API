function loadApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(userData => console.log(userData))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersData => displayUsers(usersData))
}

function displayUsers(users) {
    // console.log(users);

    const ul = document.getElementById('users');

    for (const user of users) {
        console.log(user);
        const li = document.createElement('li');
        li.innerHTML = `
        <h2>Name: ${user?.name}</h2>
        <h4>E-mail: ${user?.email}</h4>
        <h4>Address: ${user?.address?.street}</h4>
        `
        ul.appendChild(li);
    }
}