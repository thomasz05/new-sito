const url = "https://api.minetools.eu/ping/play.redcraft.it";
const players = $("#onlinePlayers");
$(window).on("load", function () {
    const ip = $(".address");
    let max = 0;
    ip.each(function () {
        max = Math.max($(this).width(), max)
    });
    ip.each(function () {
        $(this).width(max)
    });

    pingServer()
});
function pingServer() {
    const url = "https://api.minetools.eu/ping/play.redcraft.it";
    const list = $("#list");
    $.getJSON(url, function (response) {
        if (response.error) {
            setTimeout(pingServer, 1e3);
            return false
        }
        players.text("Giocatori: " + response.players.online + " / " + response.players.max);
        setTimeout(pingServer, 1e3)

    })
}

var table = document.getElementById("player");
$.getJSON(url, function (response) {
    if (response.error) {
        setTimeout(pingServer, 1e3);
        return false
    }
    console.log("test")
    response.players.sample.forEach(player)

    function player(item, index) {
        console.log(index)
        var row = table.insertRow(1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell0.innerHTML = `<img src='https://crafatar.com/avatars/${item.id}?size=20&default=MHF_Steve'>`;
        cell1.innerHTML = item.name;
        cell2.innerHTML = item.id;
    }
})


