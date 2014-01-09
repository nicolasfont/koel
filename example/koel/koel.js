(function() {
    ko.bindingHandlers.el = {
        update: function(element, valueAccessor) {
            element.appendChild(ko.unwrap(valueAccessor()));
        }       
    };  
})();

