define(["require/text!app/app.html", "hero/Hero"], function(template, Hero) {

    function App() {
        this.body = ko.observable(new Hero());

        this.el = document.createElement("div");
        this.el.innerHTML = template;
        this.el = this.el.firstChild;
    }
	
    return App;
});
