const section = document.querySelector(".section_post");

window.addEventListener("load", function () {
  loadPosts();
});
async function loadPosts() {
  //console.log("loading posts");
  let response = await fetch("https://note.wslx.ru/post-api.php", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let result = await response.json();

  const rows = result.map((post) => {
    return `
<div class="card" data-id="${post.id}">
    <div class="card__head">
        <div class="card__head_title"><input type="text" name="title" id="card_title" placeholder=""
                value="${post.title}" disabled></div>
        <div class="card__head_edit" onclick="editos(this)"><svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
            </svg>
        </div>
        <div class="card__head_delete" onclick="deleteos(this)"><svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
        </div>
    </div>
    <div class="card__content">
        <textarea id="card_description" name="description" placeholder="" value=""
            disabled>${post.description}</textarea>
    </div>
    <div class="card__footer">
        <div class="card__footer_accept"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
        </div>
        <div class="card__footer_decline"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </div>
    </div>
</div>`;
  });
  const html = `${rows.join("")}`;
  ("");
  section.innerHTML = html;
}
function addpost() {
  let newPost = `
    <div class="card" data-id="">
        <div class="card__head">
            <div class="card__head_title"><input type="text" name="title" id="card_title" placeholder="Название"
                    value="" ></div>
            <div class="card__head_edit hidden" onclick="editos(this)"><svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                </svg>
            </div>
            <div class="card__head_delete hidden" onclick="deleteos(this)"><svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
            </div>
        </div>
        <div class="card__content">
            <textarea id="card_description" name="description" placeholder="Описание" value=""
                ></textarea>
        </div>
        <div class="card__footer">
            <div class="card__footer_accept"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
            </div>
            <div class="card__footer_decline"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
            </div>
        </div>
        <div class="card__confirm addpost" onclick="confirmPost(this)">Сохранить</div>
    </div>`;
  section.innerHTML += newPost;
}
async function confirmPost(confirmCurrent) {
  let card = confirmCurrent.parentNode;
  card.querySelector(".card__head_edit").classList.remove("hidden");
  card.querySelector(".card__head_delete").classList.remove("hidden");

  let card_title = card.querySelector("#card_title");
  card_title.disabled = true;
  let card_description = card.querySelector("#card_description");
  card_description.disabled = true;
  let confirmButton = card.querySelector(".addpost");
  confirmButton.remove();
  let data = {
    title: card_title.value,
    description: card_description.value,
  };
  
  let response = await fetch("https://note.wslx.ru/post-api.php", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let resp = await response.json();
  card.setAttribute("data-id", resp);
}
function editos(editCurrent) {
  let card = editCurrent.parentNode.parentNode;
  
  card.querySelector(".card__head_edit").classList.add("hidden");
  card.querySelector(".card__head_delete").classList.add("hidden");

  let card_title = card.querySelector("#card_title");

  card_title.disabled = false;

  let card_description = card.querySelector("#card_description");

  card_description.disabled = false;

  let footer = card.querySelector(".card__footer");
  let accept = card.querySelector(".card__footer_accept");
  let decline = card.querySelector(".card__footer_decline");

  footer.classList.add("show");

  decline.addEventListener("click", () => {
    footer.classList.remove("show");
    card_title.disabled = true;
    card_description.disabled = true;
    card.querySelector(".card__head_edit").classList.remove("hidden");
    card.querySelector(".card__head_delete").classList.remove("hidden");
  });

  accept.addEventListener("click", async () => {
    footer.classList.remove("show");
    card_title.disabled = true;
    card_description.disabled = true;
    card.querySelector(".card__head_edit").classList.remove("hidden");
    card.querySelector(".card__head_delete").classList.remove("hidden");

    let editid = card.getAttribute("data-id");
    let data = {
      title: card_title.value,
      description: card_description.value,
    };

    let response = await fetch(
      "https://note.wslx.ru/post-api.php?id=" + editid,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let resp = await response.json();
  
  });
}

async function deleteos(editCurrent) {
  let card = editCurrent.parentNode.parentNode;


  let delid = card.getAttribute("data-id");
  
  let response = await fetch("https://note.wslx.ru/post-api.php?id=" + delid, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();


  card.classList.add("hide-delete");
  setTimeout(card_del , 300);
  function card_del() {
    card.remove()
  }
}

const pullToRefresh = document.querySelector(".pull-to-refresh");
let touchstartY = 0;
document.addEventListener("touchstart", (e) => {
  touchstartY = e.touches[0].clientY;
});
document.addEventListener("touchmove", (e) => {
  const touchY = e.touches[0].clientY;
  const touchDiff = touchY - touchstartY;
  if (touchDiff > 0 && window.scrollY === 0) {
    pullToRefresh.classList.add("visible");
    pullToRefresh.style.height = touchDiff + "px";
  }
});
document.addEventListener("touchend", (e) => {
  if (pullToRefresh.classList.contains("visible")) {
    pullToRefresh.classList.remove("visible");
    pullToRefresh.style.height = 0;
    loadPosts();
  }
});
