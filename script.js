document.addEventListener("DOMContentLoaded", () => {
  // const menuToggleBtn = document.getElementById("menuToggleBtn");
  // const navMenu = document.getElementById("navMenu");
  // if (menuToggleBtn && navMenu) {
  //   menuToggleBtn.addEventListener("click", () => {
  //     navMenu.classList.toggle("open");
  //   });
  // }
  // const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
  // navLinks.forEach((link) => {
  //   link.addEventListener("click", () => {
  //     if (window.innerWidth <= 768) {
  //       navMenu.classList.remove("open");
  //     }
  //   });
  // });
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetTabId = e.currentTarget.getAttribute("data-tab");
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabBtns.forEach((b) => {
        b.classList.add("outline");
        b.style.color = "#0f172a";
      });
      document.getElementById(targetTabId).classList.add("active");
      e.currentTarget.classList.remove("outline");
      e.currentTarget.style.color = "#ffffff";
    });
  });
});