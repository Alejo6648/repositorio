let headerSearchInput = document.getElementById("headerSearchInput");

let mainContent = document.getElementById("main-content");


headerSearchInput.addEventListener("click", function() {

    headerSearchInput.classList.add("header-search-input-focus");
    headerSearchInput.classList.remove("header-search-input-no-focus");
});

mainContent.addEventListener("click", () => {

    headerSearchInput.classList.add("header-search-input-no-focus");
    headerSearchInput.classList.remove("header-search-input-focus");
});