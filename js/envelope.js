const envelope = document.querySelector('div.envelope');

envelope.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
        return;
    }
    const showingPostcard = envelope.classList.contains('show-postcard');
    if (event.target.closest('.postcard') && !showingPostcard) {
        envelope.classList.add('lifted', 'show-postcard');
        return;
    }
    if (event.target.closest('.letter') && showingPostcard) {
        envelope.classList.remove('show-postcard');
        return;
    }
    if (envelope.classList.toggle('lifted') === false) {
        envelope.classList.remove('show-postcard');
    }
});
