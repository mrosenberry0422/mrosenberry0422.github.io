filterForm = () => document.getElementById("filterContent");
newForm = () => document.getElementById("newContent");
articleList = () => document.getElementById("articleList");

document.addEventListener("DOMContentLoaded", () => {
    filterForm().style.display = "none";
    newForm().style.display = "none";
});

function showFilter() {
    f = filterForm();
    n = newForm();
    n.style.display = "none";
    f.style.display = (f.style.display === "none" || f.style.display === "") ? "block" : "none";
}

function showAddNew() {
    f = filterForm();
    n = newForm();
    f.style.display = "none";
    n.style.display = (n.style.display === "none" || n.style.display === "") ? "flex" : "none";
}

  
function filterArticles() {
    showOpinion = document.getElementById("opinionCheckbox").checked;
    showRecipe = document.getElementById("recipeCheckbox").checked;
    showUpdate = document.getElementById("updateCheckbox").checked;
    document.querySelectorAll("#articleList article").forEach((article) => {
      isOpinion = article.classList.contains("opinion");
      isRecipe = article.classList.contains("recipe");
      isUpdate = article.classList.contains("update");
      let shouldShow = true;
      if (isOpinion) shouldShow = showOpinion;
      if (isRecipe) shouldShow = showRecipe;
      if (isUpdate) shouldShow = showUpdate;
      article.style.display = shouldShow ? "" : "none";
    });
}

function addNewArticle() {
    title = document.getElementById("inputHeader").value.trim();
    text = document.getElementById("inputArticle").value.trim();
    opinion = document.getElementById("opinionRadio").checked;
    recipe = document.getElementById("recipeRadio").checked;
    update = document.getElementById("lifeRadio").checked;
    if (!title || !text || (!opinion && !recipe && !update)) {
      alert("Please enter a Title, Text, and select an Article Type.");
      return;
    }
    let typeClass = "opinion";
    let markerText = "Opinion";
    if (recipe) { typeClass = "recipe"; markerText = "Recipe"; }
    if (update) { typeClass = "update"; markerText = "Update"; }
    article = document.createElement("article");
    article.className = typeClass; 
    article.id = "a" + Date.now();
    article.innerHTML = `
      <span class="marker">${markerText}</span>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
      <p><a href="moreDetails.html">Read more...</a></p>
    `;
    articleList().prepend(article);
    filterArticles();
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;
}

function escapeHtml(str) {
    return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
