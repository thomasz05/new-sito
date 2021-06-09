const url = "https://api.minetools.eu/ping/play.redcraft.it";
const players = $("#onlinePlayers");
const playerList = $("#player");

$(window).on("load", pingServer);

function pingServer () {
    $.getJSON(url, function (response) {
        setTimeout(pingServer, 1e3);

        // ERROR
        if (response.error) {
            // PLAYER COUNT
            players.text("Server offline");

            // EMPTY TABLE
            playerList.html('');
            $('<tr>').append(
                $('<td>').html(`<img src='https://minotar.net/helm/HeroBrine/20'>`),
                $('<td>'),
                $('<td>')
            ).appendTo(playerList);

            return
        }

        // PLAYER COUNT
        players.text("Giocatori: " + response.players.online + " / " + response.players.max);
        
        // CREATE TABLE
        playerList.html('');
        response.players.sample.forEach((p,i) => {
            $('<tr>').append(
                $('<td>').html(`<img src='https://crafatar.com/avatars/${p.id}?size=20&default=MHF_Steve'>`),
                $('<td>').text(p.name),
                $('<td>').text(p.id)
            ).appendTo(playerList);
        });
    })
}
