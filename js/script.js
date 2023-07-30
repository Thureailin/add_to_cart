new WOW().init();
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: '', // default
        offset:       2,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

const counterUp = window.counterUp.default

const callback = entries => {
        entries.forEach( entry => {
                const el = entry.target
                if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                        counterUp( el, {
                                duration: 2000,
                                delay: 16,
                        } )
                        el.classList.add( 'is-visible' )
                }
        } )
}

const IO = new IntersectionObserver( callback, { threshold: 0 } )

const el = document.querySelector( '.counter' )
IO.observe( el )

function changeMode() {
        document.body.classList.toggle("night-mode");
        document.getElementById("modeIcon").classList.toggle("bi bi-sun");
}