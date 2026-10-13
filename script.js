const money = n => n > 0 ? `${STORE_CONFIG.currency} ${Number(n).toFixed(2)}` : "Enquire for price";
const cart = new Map();
let selectedCategory = "All";
const $ = id => document.getElementById(id);
const productGrid = $("productGrid");

function waLink(message) {
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function productArt(product) {
  let art = "RAM";
  if (product.category === "SSD / NVMe") art = product.type === "NVMe" ? "M.2 NVMe SSD" : "SATA SSD";
  if (product.category === "Motherboard") art = "MOTHERBOARD";
  return `<div class="product-placeholder">${art}<br><span style="font-weight:500;font-size:10px">${product.brand}</span></div>`;
}
function filteredProducts() {
  const q = $("searchInput").value.trim().toLowerCase();
  const cat = $("categoryFilter").value;
  const type = $("typeFilter").value;
  let items = PRODUCTS.filter(p => {
    const matchQ = !q || [p.name,p.brand,p.category,p.type,p.spec].join(" ").toLowerCase().includes(q);
    const matchCat = cat === "All" || p.category === cat;
    const matchType = type === "All" || p.type === type;
    const matchSelected = selectedCategory === "All" || p.category === selectedCategory;
    return matchQ && matchCat && matchType && matchSelected;
  });
  const sort = $("sortFilter").value;
  if (sort === "price-low") items.sort((a,b) => (a.price || Infinity) - (b.price || Infinity));
  if (sort === "price-high") items.sort((a,b) => (b.price || 0) - (a.price || 0));
  if (sort === "name") items.sort((a,b) => a.name.localeCompare(b.name));
  if (sort === "featured") items.sort((a,b) => Number(b.featured)-Number(a.featured));
  return items;
}
function renderProducts() {
  const items = filteredProducts();
  productGrid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-image">${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : productArt(p)}</div>
      <span class="product-tag">${p.brand} · ${p.category}</span>
      <h3>${p.name}</h3>
      <p class="product-spec">${p.spec}</p>
      <div class="product-price">${money(p.price)}${p.price > 0 ? '<small> / unit</small>' : ''}</div>
      <div class="card-actions">
        <button class="button primary" data-add="${p.id}">Add to Cart</button>
        <button class="button secondary" data-details="${p.id}">Details</button>
      </div>
    </article>`).join("");
  $("emptyState").hidden = items.length !== 0;
  $("productCountText").textContent = `${items.length} product${items.length===1?"":"s"}`;
  $("activeFilterText").textContent = selectedCategory === "All" ? "All products" : selectedCategory;
}
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const item = cart.get(id) || {product:p, qty:0};
  item.qty += 1;
  cart.set(id,item);
  renderCart();
  openCart();
}
function renderCart() {
  const count = [...cart.values()].reduce((sum,item)=>sum+item.qty,0);
  $("cartCount").textContent = count;
  const items = [...cart.values()];
  $("cartItems").innerHTML = items.length ? items.map(({product:p,qty})=>`
    <div class="cart-line">
      <div><h3>${p.name}</h3><p>${p.spec}</p>
        <div class="quantity-control"><button data-qty="${p.id}" data-change="-1" aria-label="Decrease quantity">−</button><strong>${qty}</strong><button data-qty="${p.id}" data-change="1" aria-label="Increase quantity">+</button><button class="text-button" data-remove="${p.id}">Remove</button></div>
      </div><div class="cart-line-price">${p.price>0?money(p.price*qty):"Quote"}</div>
    </div>`).join("") : '<div class="cart-empty">Your cart is empty.<br>Add a product to start an order.</div>';
  const total = items.reduce((sum,{product,qty})=>sum+(product.price||0)*qty,0);
  $("cartTotal").textContent = money(total);
}
function openCart() {
  $("cartDrawer").classList.add("open");
  $("cartDrawer").setAttribute("aria-hidden","false");
  $("cartOverlay").hidden = false;
}
function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("cartDrawer").setAttribute("aria-hidden","true");
  $("cartOverlay").hidden = true;
}
function showDetails(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p)return;
  $("detailContent").innerHTML = `<span class="product-tag">${p.brand} · ${p.category}</span><h2 id="detailTitle">${p.name}</h2><p class="detail-price">${money(p.price)}</p><p>${p.spec}</p><ul>${p.details.map(d=>`<li>${d}</li>`).join("")}</ul><div class="detail-actions"><button class="button primary" data-add="${p.id}">Add to Cart</button><a class="button secondary" href="${waLink("Hello SV Advance Technology Resources, I would like to enquire about: "+p.name+" ("+p.spec+"). Please confirm price and stock.")}" target="_blank" rel="noopener">Ask on WhatsApp</a></div>`;
  $("detailOverlay").hidden=false;
}
function closeDetails() {$("detailOverlay").hidden=true}
function resetFilters() {
  $("searchInput").value="";
  $("categoryFilter").value="All";
  $("typeFilter").value="All";
  $("sortFilter").value="featured";
  selectedCategory="All";
  renderProducts();
}
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");
  const details=e.target.closest("[data-details]");
  const qty=e.target.closest("[data-qty]");
  const remove=e.target.closest("[data-remove]");
  const cat=e.target.closest("[data-category]");
  if(add){addToCart(add.dataset.add);closeDetails()}
  if(details)showDetails(details.dataset.details);
  if(qty){const id=qty.dataset.qty;const item=cart.get(id);if(item){item.qty+=Number(qty.dataset.change);if(item.qty<=0)cart.delete(id);renderCart()}}
  if(remove){cart.delete(remove.dataset.remove);renderCart()}
  if(cat){if(cat.dataset.category==="Dealer Orders"){document.querySelector("#dealer").scrollIntoView({behavior:"smooth"});}else{selectedCategory=cat.dataset.category;$("categoryFilter").value=selectedCategory;renderProducts();document.querySelector("#products").scrollIntoView({behavior:"smooth"});}}
});
["searchInput","categoryFilter","typeFilter","sortFilter"].forEach(id=>$(id).addEventListener(id==="searchInput"?"input":"change",()=>{if(id==="categoryFilter")selectedCategory="All";renderProducts()}));
$("resetFilters").addEventListener("click",resetFilters);
$("clearCategory").addEventListener("click",resetFilters);
$("openCart").addEventListener("click",openCart);
$("closeCart").addEventListener("click",closeCart);
$("cartOverlay").addEventListener("click",closeCart);
$("continueShopping").addEventListener("click",closeCart);
$("closeDetail").addEventListener("click",closeDetails);
$("detailOverlay").addEventListener("click",e=>{if(e.target===$("detailOverlay"))closeDetails()});
$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));
$("dealerWhatsApp").href=waLink("Hello SV Advance Technology Resources, I would like to enquire about dealer pricing and bulk orders.");
$("checkoutWhatsApp").addEventListener("click",()=>{
  const items=[...cart.values()];
  if(!items.length){alert("Your cart is empty. Please add a product first.");return}
  const lines=items.map(({product:p,qty})=>`• ${p.name} x ${qty} — ${p.price>0?money(p.price*qty):"Please quote"}`);
  const total=items.reduce((sum,{product,qty})=>sum+(product.price||0)*qty,0);
  const hasQuote=items.some(({product})=>!product.price);
  const message=["Hello SV Advance Technology Resources, I would like to place an order:", "",...lines,"",`Estimated subtotal: ${money(total)}${hasQuote?" (excludes items requiring quotation)":""}`,"Please confirm stock, final price and delivery charges.","","Customer name:","Delivery area:",""].join("\n");
  window.open(waLink(message),"_blank","noopener");
});
renderProducts();renderCart();
