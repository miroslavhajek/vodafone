i = 0;

function odeslani() {
    jmeno = $('#jmeno');
    text = $('#text');
    pocitadlo = $('.pocitadlo:first');
    komentare = $('#komentare');

    if (jmeno.val() === '') {
        alert('Vypln jmeno');

        return false;
    }
    // } else {
    //     alert('Vypln jmeno 1');
    //
    //     return false;
    // }

    komentar = '<div><b>' + jmeno.val() + '</b> '
        + text.val() + '</div><hr>';

    komentare.append(komentar);

    pocitadlo.html('<i>(' + (++i) + ')</i>');

    jmeno.val(null);
    text.val(null);

    $('#dekujeme').fadeIn('show', function () {
        $('#dekujeme').fadeOut(1600, "linear", function () {
            
        });
    });

    return false;
}
