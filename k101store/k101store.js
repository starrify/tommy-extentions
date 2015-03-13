function _process_product_page() {
    chrome.storage.local.get('desired_size', function(items) {
        size_found = false;
        size_nodes = document.querySelectorAll('select#product-select option');
        for (i = 0; i < size_nodes.length; i++) {
            this_size = size_nodes[i].textContent.split(' - ')[0];
            if (this_size == items.desired_size) {
                size_found = true;
                document.querySelector('select#product-select').value = size_nodes[i].value;
                document.querySelector('input[name=add]').click();
            }
        }
        if (size_found != true)
            alert('Desired size ' + items.desired_size + ' was not found on this product page.');
    });
}

function _process_cart_page() {
    document.querySelector('input#checkout').click();
}

function _k101store_main() {
    chrome.storage.local.get('extension_state', function(items) {
        if (items.extension_state == 'started') {
            if (document.URL.search('http://www.k101store.com/.*/products/.*') != -1)
                _process_product_page();
            if (document.URL == 'http://www.k101store.com/cart')
                _process_cart_page();
        }
    });
}

_k101store_main();
