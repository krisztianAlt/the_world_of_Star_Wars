var app = app || {};

app.init = function() {
    app.tableHandler.loadTable('https://swapi.dev/api/planets/');
    app.tableHandler.showTurningPageButtons();
    app.tableHandler.loginListener();
    // app.tableHandler.getVoteStatistics();
    // app.tableHandler.flyTie();
}

app.init();