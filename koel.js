(function(){
	ko.bindingHandlers.el = {
			update : function(element, valueAccessor) {
				var el = ko.unwrap(valueAccessor());
				
				element.innerHTML = "";
				element.appendChild(el);
			}
	};
})();
