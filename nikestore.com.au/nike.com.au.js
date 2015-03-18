function _process_launch_calendar_page() {
    chrome.storage.local.get(
        [
            'desired_item',
            'desired_size',
        ],
        function(items) {
            a_nodes = document.querySelectorAll('a');
            item_found = false;
            for (i = 0; i < a_nodes.length; i++) {
                a = a_nodes[i];
                if (a.textContent.indexOf(items.desired_item) != -1) {
                    a.click();
                    item_found = true;
                }
            }
            if (item_found != true) {
                location.reload();
            }
        }
    );
}

function _process_product_page() {
    chrome.storage.local.get('desired_size', function(items) {
        document.querySelector('span.qty-size-amt').click();
        size_found = false;
        size_nodes = document.querySelectorAll('li.size-in-stock a');
        for (i = 0; i < size_nodes.length; i++) {
            this_size = size_nodes[i].querySelector('span:not(.value)').textContent;
            if (this_size == items.desired_size) {
                size_found = true;
                size_nodes[i].click();
            }
        }
        if (size_found == true) {
            document.querySelector('button.nike-button-orange-cart').click();
            document.querySelector('a.aw-acp-checkout').click();
        }
        else {
            alert('Desired size ' + items.desired_size + ' is out of stock or not found on this product page.');
        }
    });
}

function _process_cart_page() {
    button_nodes = document.querySelectorAll('button');
    for (i = 0; i < button_nodes.length; i++) {
        if (button_nodes[i].title == 'Proceed to Checkout') {
            button_nodes[i].click();
        }
    }
}

function _nike_com_au_main() {
    chrome.storage.local.get('extension_state', function(items) {
        if (items.extension_state == 'started') {
            if (document.URL == 'http://www.nikestore.com.au/get-help/products/product-launch-calendar')
                _process_launch_calendar_page();
            else if (document.URL == 'http://www.nikestore.com.au/checkout/cart/')
                _process_cart_page();
            else if (document.URL.search(/[0-9\-]+$/) != -1)
                _process_product_page();
        }
    });
}

_nike_com_au_main();
