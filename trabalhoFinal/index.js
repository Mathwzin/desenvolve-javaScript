const form = document.getElementById("formPost");
const postText = document.getElementById("postText");
const feed = document.getElementById("feed");

let posts = [];

// Função para buscar imagem de gato na API
async function getCatImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  return data[0].url;
}

// Função para renderizar os posts
function renderFeed() {
  feed.innerHTML = "";
  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
      <div class="post-header">
        <img src="${post.avatar}" alt="Avatar">
        <strong>${post.username}</strong>
      </div>
      <p>${post.text}</p>
      <img class="cat" src="${post.catImage}" alt="Gatinho fofo">
      <button class="like-btn" data-index="${index}">Curtir ❤️ ${post.likes}</button>
    `;

    feed.appendChild(postElement);
  });

  // Ativa os botões de curtir
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      posts[index].likes++;
      renderFeed();
    });
  });
}

// Evento de envio do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = postText.value.trim();
  if (text === "") return;

  const catImage = await getCatImage();

  const newPost = {
    date: new Date(),
    username: "Usuário123",
    avatar: "https://i.pravatar.cc/150", // avatar aleatório
    text: text,
    catImage: catImage,
    likes: 0
  };

  posts.unshift(newPost); // mais recente primeiro
  renderFeed();
  form.reset();
});
