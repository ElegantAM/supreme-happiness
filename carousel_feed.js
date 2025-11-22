// =========================
// Auto-Updating Carousel Feed
// =========================

const products = [
  {
    title: "Orlistat 60mg – Weight Loss Aid",
    image: "https://m.media-amazon.com/images/I/61kL1CqzXUL._SL1500_.jpg",
    link: "https://www.amazon.in/s?k=Orlistat+60mg&tag=premiumhea0ac-21"
  },
  {
    title: "Apple Cider Vinegar Gummies",
    image: "https://m.media-amazon.com/images/I/61hNq5OLw6L._SL1500_.jpg",
    link: "https://www.amazon.in/s?k=apple+cider+vinegar+gummies&tag=premiumhea0ac-21"
  },
  {
    title: "Green Tea Extract Fat Burner",
    image: "https://m.media-amazon.com/images/I/71IOz93dN6L._SL1500_.jpg",
    link: "https://www.amazon.in/s?k=green+tea+extract&tag=premiumhea0ac-21"
  },
  {
    title: "CLA Belly Fat Cutter",
    image: "https://m.media-amazon.com/images/I/61KjHk31L1L._SL1500_.jpg",
    link: "https://www.amazon.in/s?k=CLA+supplement&tag=premiumhea0ac-21"
  }
];

// Create carousel
function createCarousel() {
  const container = document.getElementById("carousel");
  container.style.display = "flex";
  container.style.overflowX = "auto";
  container.style.gap = "15px";

  products.forEach(p => {
    const item = document.createElement("div");
    item.style.minWidth = "160px";
    item.style.textAlign = "center";

    item.innerHTML = `
      <img src="${p.image}" style="width:100%;border-radius:12px;">
      <p style="font-size:14px;font-weight:bold;">${p.title}</p>
      <a href="${p.link}" target="_blank" style="display:block;padding:10px;background:#ff5a3c;color:#fff;border-radius:10px;text-decoration:none;">
        View Deal
      </a>
    `;

    container.appendChild(item);
  });
}

createCarousel();
