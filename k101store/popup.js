document.addEventListener('DOMContentLoaded', function() {
    update_state = function() {
        state_btn = document.getElementById('change-state');
        status_div = document.getElementById('status');
        status_size_div = document.getElementById('status-size');
        chrome.storage.local.get([
            'extension_state',
            'desired_size',
        ], function(items){
            if (items.extension_state == 'started') {
                state_btn.textContent = 'Stop Extension';
                state_btn.setAttribute('next-state', 'stopped');
                status_div.textContent = 'Extension is started.';
            }
            else {
                state_btn.textContent = 'Start Extension';
                state_btn.setAttribute('next-state', 'started');
                status_div.textContent = 'Extension is stopped.';
            }
            status_size_div.textContent = 'Desired size: "' + items.desired_size + '"';
        });
    };
    state_btn = document.getElementById('change-state');
    state_btn.addEventListener('click', function() {
        state_btn = document.getElementById('change-state');
        chrome.storage.local.set({
            'extension_state': state_btn.getAttribute('next-state'),
            'desired_size': document.getElementById('desired-size').value,
        });
        update_state();
    });
    chrome.storage.local.get('desired_size', function(items) {
        document.getElementById('desired-size').value = items.desired_size;
    });

    update_state();
})
