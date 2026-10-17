// 1. WELCOME MESSAGE (changes based on time of day)
const welcome = document.getElementById("welcome-message");
const hour = new Date().getHours();
let greeting = "Good evening";
if (hour < 12) greeting = "Good morning";
else if (hour < 18) greeting = "Good afternoon";
welcome.textContent = greeting + "! Welcome to my portfolio.";

// 2. CURRENT DATE / TIME (updates every second)
const datetime = document.getElementById("datetime");
function updateDateTime() {
  const now = new Date();
  datetime.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }) + " | " + now.toLocaleTimeString();
}
updateDateTime();
setInterval(updateDateTime, 1000);

// 3. DARK / LIGHT MODE (remembers your choice)
const themeBtn = document.getElementById("theme-toggle");

function applyTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  themeBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
}

applyTheme(localStorage.getItem("theme") === "light");

themeBtn.addEventListener("click", function () {
  const isLight = !document.body.classList.contains("light");
  applyTheme(isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// 4. SHOW / HIDE INFORMATION (Read More button)
const readMoreBtn = document.getElementById("read-more-btn");
const moreInfo = document.getElementById("more-info");

readMoreBtn.addEventListener("click", function () {
  const isHidden = moreInfo.classList.toggle("hidden");
  readMoreBtn.textContent = isHidden ? "Read More" : "Read Less";
});

// 5. BACK-TO-TOP BUTTON
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
  backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
