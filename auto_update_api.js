// =============================
// Auto Updating Product Feed
// =============================

async function loadProducts() {
  const container = document.getElementById("auto-products");
  container.innerHTML = "<p>Loading latest deals...</p>";

  // Simulated rotating product list (no PA-API keys needed)
  const productSets = [
    [
      {
        name: "L-Carnitine 1000mg Fat Burner",
        img: "https://m.media-amazon.com/images/I/61tnkS7nAUL._SL1500_.jpg",
        url: "https://www.amazon.in/s?k=L-Carnitine&tag=premiumhea0ac-21"
      },
      {
        name: "Metabolism Booster Capsules",
        img: "https://m.media-amazon.com/images/I/61XJX9Q91UL._SL1500_.jpg",
        url: "https://www.amazon.in/s?k=metabolism+booster&tag=premiumhea0ac-21"
      }
    ],
    [
      {
        name: "Fat Burner Extreme",
        img: "https://m.media-amazon.com/images/I/71j4Pv2r3tL._SL1500_.jpg",
        url: "https://www.amazon.in/s?k=fat+burner&tag=premiumhea0ac-21"
      },
      {
        name: "Probiotic Weight Loss Formula",
        img: "https://m.media-amazon.com/images/I/61wwY+SW-hL._SL1500_.jpg",
        url: "https://www.amazon.in/s?k=probiotic+weight+loss&tag=premiumhea0ac-21"
      }
    ]
  ];

  // rotate set every 6 hours
  const index = Math.floor(Date.now() / (1000 * 60 * 60 * 6)) % productSets.length;

  container.innerHTML = "";

  productSets[index].forEach(p => {
    const card = document.createElement("div");
    card.style.border = "1px solid #eee";
    card.style.padding = "12px";
    card.style.borderRadius = "12px";
    card.style.marginBottom = "15px";

    card.innerHTML = `
      <img src="${p.img}" style="width:100%;border-radius:12px;">
      <h3 style="font-size:16px;margin-top:10px;">${p.name}</h3>
      <a href="${p.url}" target="_blank"
         style="margin-top:10px;display:block;background:#ff5a3c;color:white;padding:10px;text-align:center;border-radius:10px;text-decoration:none;">
         Check Price
      </a>
    `;
    container.appendChild(card);
  });
}

loadProducts();
