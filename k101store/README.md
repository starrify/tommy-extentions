
### About
This is a Chrome/Chromium extension for www.k101store.com, written and maintained by pengyu@libstarrify.so  
This project is hosted on GitHub at https://github.com/starrify/tommy-extentions (a private repository).  
Feel free to contact the developer to report bugs or request new features.

### To Use It
1. Together with this `README.md` file you shall have received a `k101store.crx` file.
2. Open a new tab in Chrome/Chromium and visit `chrome://extensions/`
3. Drag the `k101store.crx` file onto this page to have the extension installed.
4. Before trying to purchase something from that website, click on the icon for this extension (at the top-right corner of Chrome/Chromium), specify your desired size (e.g. `9.5`), then click on `Start Extension`
5. If the extension is started, it would function on two types of pages:
    5.1. Product pages whose URL contains the string `/products/`. After such pages are loaded, the extension would try finding the previously set size value, and posting the form as if a human has clicked onto the "ADD TO CART" button. If such a size is not available, an alert would show up. 
    5.2. The cart page whose URL is `http://www.k101store.com/cart` . After this page is loaded, the extension would try post the form directly as if a human has clicked onto the "CHECK OUT" button.
6. After purchasing, please deactivate this extension by clicking on the `Stop Extension` button or deselect the `Enabled` checkbox from the `chrome://extensions/` page.

### Some Notes
- If a page (either a product page or a cart page) has been opened before the extension is started, you'll need to reload this page to make the extension work, or nothing would happen.
- The website http://www.k101store.com/ seems to be slow now.
- This website uses shopify.com as its order backend, which guarantees that once the "CHECK OUT" button is pressed and no "out of stock" error arises, the product is ready to be yours (unless you abort the checkout and close the page before posting your billing & shipment info).
- You'd better keep trying even it it says "out of stock", as someone else may close the page before finishing the checkout, and thus the inventory amount would again increase.
