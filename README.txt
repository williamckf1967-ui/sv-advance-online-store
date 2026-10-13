# SV Advance Technology Resources — starter online store

A responsive static HTML/CSS/JavaScript product catalogue with:
- RAM, SSD/NVMe and motherboard categories
- Search, category/type filters and sorting
- Product details
- Shopping cart with quantity controls
- WhatsApp order message generation
- Mobile responsive layout

## Important before publishing
1. `products.js` contains starter/sample prices based on previously discussed lists. Confirm every price, specification, warranty and availability before making the site public.
2. The WhatsApp number is currently set to `60126996021` (Malaysia international format). Confirm that this is the correct business number before publishing.
3. Product images are currently simple built-in illustrations/placeholders. Replace them with product photos you have permission to use.
4. This is a catalogue/order enquiry site, not a payment gateway. It does not store orders, track inventory or process payment.
5. GitHub Pages policy does not permit using it as a site primarily intended to facilitate commercial transactions. Keep the repository for code management and deploy the live storefront with a host whose current terms permit your use.

## Files
- `index.html` — page structure
- `style.css` — styling and mobile layout
- `products.js` — product list, prices and WhatsApp number
- `script.js` — search, filters, cart and WhatsApp checkout

## Preview locally on a Mac
1. Download and unzip this folder.
2. Open `index.html` in Safari to check the layout.
3. For a more reliable preview, open Terminal, `cd` into this folder and run:
   `python3 -m http.server 8000`
4. On the same Mac, open `http://localhost:8000`.

## Updating products
Edit the `PRODUCTS` array in `products.js`. Each product has `id`, `name`, `brand`, `category`, `type`, `spec`, `price`, `details`, and optional `featured` and `image` fields. Set `image` to a relative path such as `"images/kingsman-km600-512gb.jpg"`.

## Deploying
Use a free hosting plan that permits commercial storefronts and supports static HTML deployment. Check the provider's current terms, limits, and account requirements before publishing.
