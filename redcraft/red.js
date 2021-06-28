const url = "https://api.minetools.eu/ping/play.redcraft.it";
const players = $("#onlinePlayers");
const playerList = $("#player");

$(window).on("load", pingServer);

function pingServer() {
    $.getJSON(url, function (response) {
        setTimeout(pingServer, 1e3);

        // ERROR
        if (response.error) {
            // PLAYER COUNT
            players.text("Server offline ");
            document.getElementById("status").style.color = "red";

            // EMPTY TABLE
            playerList.html('');
            $('<tr>').append(
                $('<td>').html(`<img src='https://minotar.net/helm/HeroBrine/20'>`),
                $('<td>').text('NONE'),
                $('<td>').text('NONE'),
            ).appendTo(playerList);

            return
        }

        // PLAYER COUNT
        players.text("Giocatori Online: " + response.players.online + " / " + response.players.max);
        document.getElementById("status").style.color = "green";

        if (response.players.online == 0) {
            // EMPTY SERVER
            playerList.html('');
            $('<tr>').append(
                $('<td>').html(`<img src='https://minotar.net/helm/HeroBrine/20'>`),
                $('<td>').text('NONE'),
                $('<td>').text('NONE'),
            ).appendTo(playerList);
            return
        }

        // CREATE TABLE
        playerList.html('');
        response.players.sample.forEach((p, i) => {
            $('<tr>').append(
                $('<td>').html(`<img src='https://crafatar.com/avatars/${p.id}?size=20&default=MHF_Steve'>`),
                $('<td>').text(p.name),
                $('<td>').text(p.id)
            ).appendTo(playerList);
        });
    })
}
