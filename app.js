function showSection(name) {
  document.querySelectorAll(".section").forEach((section) => {
    if (section.id === name) {
      console.log(section.id);
      section.classList.remove("d-none");
    } else {
      section.classList.add("d-none");
    }
  });
}

function handleNavSelection(e) {
    console.log(e)
  let sectionName = e.target.id.split("-")[0];
  showSection(sectionName);

  highlightNavItem(e.target.id);
}

function highlightNavItem(name) {
  document.querySelectorAll(".nav-element").forEach((section) => {
    if (section.id === name) {
      console.log(section.id);
      section.classList.add("nav-selected");
    } else {
      section.classList.remove("nav-selected");
    }
  });
}

document.querySelector("body").onload = () => {
  showSection("home");
};
