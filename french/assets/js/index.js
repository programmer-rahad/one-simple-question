// jQuery
if(typeof $ !== 'undefined') {
    $(document).ready(function () {   
        // Owl Carousel
        
    });
}


!function () {
    var $ = (selector, areAll) => {
        var all = document.querySelectorAll(selector)
        var single = document.querySelector(selector)
        return areAll ? all : single
    }

     // Tab Section

     function customTab() {
        this.activeItem = 0;
        this.buttonItems = $('.welcome-banner-2+section .items:nth-of-type(2) > div > div > div > div', true);
        this.contentItems = $('.welcome-banner-2+section .items:nth-of-type(3) > .container', true);
        this.eventListeners = function () {
            var buttons = this.buttonItems;
            var contents = this.contentItems;
            for (let i = 0; i < buttons.length; i++) {
                var button = buttons[i];
                button.addEventListener('click', function (e) {
                    this.activeItem = i;
                    for (let i = 0; i < buttons.length; i++) {
                        var button = buttons[i];
                        button.classList.remove('active');
                        contents[i].classList.add('d-none');
                    }
                    buttons[this.activeItem].classList.add('active');
                    contents[this.activeItem].classList.remove('d-none');
                    if(innerWidth < 992) {
                        var item = buttons[this.activeItem];
                        var container = item.querySelector('.container');
                        var img = container.previousElementSibling;
                        if(item.classList.contains('active')) {
                            container.classList.remove('d-none');
                            img.classList.add('d-none');
                        } else {
                            container.classList.add('d-none');
                            img.classList.remove('d-none');                            
                        } 
                        if(e.target.classList.contains('minus-button')) {
                            container.classList.add('d-none');   
                            img.classList.remove('d-none');
                        }
                    }
                }.bind(this))
            }
            

        }
        this.init = function () {
            this.eventListeners();
        }
        this.init();

    }

    document.addEventListener('DOMContentLoaded', function () {
        
        new customTab();

    })
}()
