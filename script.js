const langSwitch = document.getElementById("langSwitch");

// คำแปลทั้งหมด
const translations = {
  en: {
    hello: "Hello, World!",
    shop: "SHOP",
    news: "NEWS",
    about: "ABOUT"
  },
  th: {
    hello: "สวัสดีชาวโลก!",
    shop: "ร้านค้า",
    news: "ข่าวสาร",
    about: "เกี่ยวกับเรา"
  }
};

// ฟังก์ชันแปลทั้งหน้า
function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

// โหลดค่าที่เลือกไว้
window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  if (savedLang === "th") langSwitch.checked = true;
  translatePage(savedLang);
};

// เวลาเปลี่ยน toggle
langSwitch.addEventListener("change", () => {
  const lang = langSwitch.checked ? "th" : "en";
  translatePage(lang);
});
