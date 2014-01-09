define(["require/text!hero/hero.html"], function(template) {

    function Hero() {
        this.name = ko.observable("koel example");

        this.el = document.createElement("div");
        this.el.innerHTML = template;
        this.el = this.el.firstChild;
    }
	
    return Hero;
});
