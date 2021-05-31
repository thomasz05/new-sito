$(document).on('click', function() {
    $('.collapse').collapse('hide');
});

(function() {
    if (!localStorage.getItem('cookieconsent')) {
        document.body.innerHTML += '\
        <div id="cookieconsent">\
            Questo sito fa uso di cookie per migliorare l\'esperienza di navigazione degli utenti, per presentare annunci pubblicitari personalizzati e per raccogliere informazioni sull\'utilizzo del sito stesso. Usando il sito accetti questo utilizzo. Consulta l\'<a href="../legal/cookie-policy.html" target="_blank">Informativa sui cookie</a>. \
            <button type="button"id="cookieclose">Accetta</button></a>\
        </div>\
        ';
        $('#cookieclose').on('click', function(e) {
            e.preventDefault();
            $('#cookieconsent').hide();
            localStorage.setItem('cookieconsent', true);
        });
    }
})();
