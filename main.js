// Rendering cards

const userWest = document.querySelector(".west");
const post1 = document.querySelector(".post1");
const comment3 = document.querySelector(".comment3");

const userExpert = document.querySelector("#user-expert").content;
const userTrid = document.querySelector("#user-trid").content;
const userMesage = document.querySelector("#user-mesage").content;

// Render users from the server
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    renderUsers(data);
  });
  
  // Render posts when clicked
  userWest.addEventListener("click", (evt) => {
    const clickNumbers = evt.target.dataset.name_id;
  
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((dataa) => {
        const thinkse = dataa.filter((element) => {
          return element.userId == clickNumbers;
        });
        renderPosts(thinkse);
      });
  });
  
// Render comments when clicked
post1.addEventListener("click", (evt) => {
  clickedPostTitle = evt.target.dataset.post_id;

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((dataaa) => {
      const commentTo = dataaa.filter((element) => {
        return element.postId == clickedPostTitle;
      });
      renderCommets(commentTo);
    });
});

// A simple function that render users in the form of an array that comes to the argument
function renderUsers(data) {
  data.forEach((element) => {
    const userInfoDo = userExpert.cloneNode(true);

    userInfoDo.querySelector(".user-name").textContent = element.name;
    userInfoDo.querySelector(".user-name").dataset.name_id = element.id;
    userInfoDo.querySelector(".user-name-two").textContent = element.username;
    userInfoDo.querySelector(".email-2").textContent = element.email;
    userInfoDo.querySelector(".address5").textContent =
      element.address.street +
      " " +
      element.address.suite +
      " " +
      element.address.city +
      " " +
      element.address.zipcode;
    userInfoDo
      .querySelector(".link")
      .setAttribute(
        "href",
        "https://www.google.com/maps/place/" +
          element.address.geo.lat +
          element.address.geo.lng
      );
    userInfoDo.querySelector(".phone-zet").textContent = element.phone;
    userInfoDo.querySelector(".nell-user").textContent = element.website;
    userInfoDo
      .querySelector(".nell-user")
      .setAttribute("href", "https://www." + element.website);
    userInfoDo.querySelector(".company").textContent =
      element.company.name +
      " " +
      element.company.catchPhrase +
      " " +
      element.company.bs;

    userWest.appendChild(userInfoDo);
  });
}

// Function that render posts
function renderPosts(data) {
  post1.innerHTML = null;
  const cardBox = document.createElement("h3");
  cardBox.textContent = "POSTS";
  post1.appendChild(cardBox);

  data.forEach((element) => {
    const postUser = userTrid.cloneNode(true);
    const postTitle = postUser.querySelector(".title-turn");
    postTitle.textContent = element.title;
    postTitle.dataset.post_id = element.id;
    postUser.querySelector(".desk").textContent = element.body;
    post1.appendChild(postUser);
  });
}

// Function that render comments
function renderCommets(data) {
  comment3.innerHTML = null;
  const cardBox = document.createElement("h3");
  cardBox.textContent = "COMMENTS";
  comment3.appendChild(cardBox);

  data.forEach((element) => {
    const commentUser = userMesage.cloneNode(true);
    commentUser.querySelector(".comment-message").textContent = element.name;
    commentUser.querySelector(".email-row").textContent = element.email;
    commentUser.querySelector(".desk").textContent = element.body;
    comment3.appendChild(commentUser);
  });
}
