// بناء بطاقات المحتوى من البيانات
function renderGrid(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = items.map(item => `
    <div class="card">
      <div class="card-icon">${item.icon}</div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span class="tag">${item.tag}</span>
      </div>
    </div>`).join("");
}

renderGrid("attractionsGrid", DATA.attractions);
renderGrid("foodGrid", DATA.food);
renderGrid("marketsGrid", DATA.markets);
renderGrid("servicesGrid", DATA.services);

// قائمة الجوال
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// إغلاق قائمة الجوال عند النقر على رابط
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () =>
    document.querySelector(".nav-links").classList.remove("open"))
);
