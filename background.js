(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {

                var nodes = document.querySelectorAll('[data-testid="fbfeed_story"]');
				nodes.forEach(function(element){
					var text=element.textContent.toLowerCase();
					if(text.indexOf('priya') >-1){
						element.innerHTML="<h1 style='color:blue'>Priya was here</h1>";
						//element.style.display = 'none';
					}
				}
				)
				

            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

})();