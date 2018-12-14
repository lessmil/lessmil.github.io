var username = 'gaearon';

window.onload = fetch('https://api.github.com/users/' + username)
    .then(function(response) {
        return response.text()
    }).then(function(body) {
        render(body);
    });

function render(user) {
    user = JSON.parse(user);

    console.log('user', user);

    createAvatar(user.avatar_url);
    createName(user.name, user.login);
    createBio(user.bio);
    createContacts(user.company, user.location, user.email, user.blog);
};

function createAvatar(url) {
    var avaDiv = document.getElementById("ava");
    var avaImg = document.createElement("img");
    
    avaImg.setAttribute("src", url);
    avaDiv.appendChild(avaImg);
}


function createName(name, login) {
    var userNameH1 = document.getElementById("userName");
    userNameH1.appendChild(document.createTextNode(name));
    var userLoginH2 = document.getElementById("userLogin");
    userLoginH2.appendChild(document.createTextNode(login));
}


function createBio(bio) {
    var userBioP = document.getElementById("userBio");
    userBioP.appendChild(document.createTextNode(bio));
}


function createContacts(company, location, email, blog) {
    var userOrgP = document.getElementById("userCompany");
    userOrgP.appendChild(document.createTextNode(company));

    var userLocP = document.getElementById("userLoc");
    userLocP.appendChild(document.createTextNode(location));
    
    var emailMessage = 'You only see publicly visible email addresses when authenticated with GitHub';
    var userEmailP = document.getElementById("userEmail");
    userEmailP.appendChild(document.createTextNode(email || emailMessage));
    
    var userBlogP = document.getElementById("userBlog");
    userBlogP.appendChild(document.createTextNode(blog));
}