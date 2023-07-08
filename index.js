
const close = document.getElementById('close');
const nav = document.getElementById('navmenu');
const bar = document.getElementById('bar')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add( 'collapsing', 'show' )
    })
    
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('collapsing', 'show');
    })
    
}





