$(document).ready(function () {

    $.getJSON("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000000")
        .done(function (list) {

            const requests = list.results.map(item => {
                return $.getJSON(item.url).then(data => {
                    console.log(data);
                });
            });

            Promise.all(requests).then(results => {
                $('body').append(
                    `<pre>${JSON.stringify(results.filter(Boolean), null, 2)}</pre>`
                );
            });
        });

});
