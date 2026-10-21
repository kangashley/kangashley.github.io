const envelope = document.querySelector('div.envelope');

envelope.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
        return;
    }
    envelope.classList.toggle('lifted');
});
