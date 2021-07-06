const button = document.querySelector(".download");

function getPosts() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "");

  xhr.send();

  xhr.onload = function () {
    const posts = JSON.parse(xhr.response);
    renderPosts(posts);
    // for (const post of posts) {
    //   const div = document.createElement("div");
    //   const h3 = document.createElement("h3");
    //   h3.textContent = post.title;
    //   const p = document.createElement("p");
    //   p.textContent = post.body;
    //   div.appendChild(h3);
    //   div.appendChild(p);
    //   document.querySelector(".posts").appendChild(div);
    // }
    // console.log(posts);
  };
}

button.addEventListener("click", getPosts);

function getPostsModern() {
  console.log("Star");
  fetch("")
    .then((response) => response.json())
    .then((posts) => {
      renderPosts(posts);
      console.log("Posts loaded");
    });
  console.log("End");
}

async function getPostsAsyncAwait() {
  const response = await fetch("");
  const posts = await response.json();
  renderPosts(posts);
}
button.addEventListener("click", getPostsAsyncAwait);
