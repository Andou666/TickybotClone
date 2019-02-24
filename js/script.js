'use strict';
{
    (()=>{
        const scrollButton = document.getElementById('scrollbutton');
        // const homeButton = document.getElementsByTagName('a')[0];
        // const aboutButton = document.getElementsByTagName('a')[1];
        // const featuresButton = document.getElementsByTagName('a')[2];
        // const ctaButton = document.getElementsByTagName('a')[3];


        let getScrolled = function(){
            return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
        };


    

        let scrollToTop = function(){
            const scrolled = getScrolled();
            console.log(scrolled);
            window.scrollTo( 0, 0 );
        }

        scrollButton.addEventListener('click', () => {
            scrollToTop();
        }, false);

        window.addEventListener('scroll', () => {
            if(getScrolled() > 500){
                scrollButton.classList.remove('removeButton');
            }else{
                scrollButton.classList.add('removeButton');
            }    
            console.log(window.scrollY)
        })

    })();
}