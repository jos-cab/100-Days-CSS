function toggleSearch() {
  let searchBar = document.getElementById("search-bar");
  searchBar.classList.toggle("search-bar-fade");
}

function toggleMenu() {
  let notifications = document.getElementById("notifications");
  let menu = document.getElementById("menu");

  menu.classList.toggle("menu-fade");
  notifications.classList.toggle("notifications-move");
}
