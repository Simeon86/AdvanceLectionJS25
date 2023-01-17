window.addEventListener('DOMContentLoaded', () => {

    function activateButton(selector) {

        var elements = document.querySelectorAll(selector);

        // Check if there is at Least one element
        if (!elements.length) {
            return null;
        }

        function activate(element) {
            element.addEventListener('click', event => {
                // console.log(new Date().getTime());
                if(!element.getAttribute('data-event')) {
                    return;
                }
                var customEvent = new Event(element.getAttribute('data-event'))
                document.dispatchEvent(customEvent);
            });

            element.addEventListener('mousedown', event => {
                element.classList.add('down')
            });
            

            element.addEventListener('mouseover', event => {
                console.log('over');
            });

            element.addEventListener('mouseup', event => {
                element.classList.remove('down')
            });
            
        }

        // Loop the elements
        elements.forEach(el => {
            activate(el);
        });
    }

    activateButton('button');




    




    function activateMenu(selector) {
		var blocks = document.querySelectorAll(selector);
		console.log(blocks)

		if (!blocks.length) {
			return null;
		}

		function clearClass(elements) {
			elements.forEach(el => {
				el.classList.remove('open');
			})
		}


		 blocks.forEach(el => {
			var attrValue = el.getAttribute('data-event-listener');
			if (attrValue) {
				document.addEventListener(attrValue, function() {
					
					clearClass(blocks);
					el.classList.add('open');
				});
			}

		});
	}



	activateButton('button.btn');
	activateMenu('div.wrap > .module')


    function randomNumColor() {
        var num = Math.floor(Math.random()*1000000)

        if(num.toString().length < 6) {
            num = num + '0';
        }

        return '#' + num;
    }

    setInterval(function() {
        var color = randomNumColor();
        document.body.style.backgroundColor = color;
    }, 3000)

    document.addEventListener('click', function() {
        var color = randomNumColor();
        document.body.style.backgroundColor = color;
    })
 
});