require(["require/domReady", "app/App"], function(domReady, App) {
    domReady(function() {
        var app = new App();
	ko.applyBindings(app, app.el);
	$("body").append(app.el);
        window.app = app;
    });
});
