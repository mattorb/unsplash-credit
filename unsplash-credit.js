function add_unsplash_credit() {
    var el = document.querySelector( "#site-main > div > article > figure" );
    
    if (el && el.style.backgroundImage) {
        var re = /(.*)\/([\w-]+)-([0-9]+)-unsplash\.jpg\"\)/g;
        var photog_credit = el.style.backgroundImage.replace(re, '$2');
    
        var credit_frag = `
            <div style="text-align: right;">
                photo credit: <a href="https://unsplash.com/user/${photog_credit}" target="_blank" rel="noopener noreferrer" title="Photo courtesy of ${photog_credit} on Unsplash"><span style="display:inline-block;padding:2px 3px;">${photog_credit}</span></a>
            </div>
        `;
        
        el.insertAdjacentHTML( 'beforebegin', credit_frag);
    }
}

window.addEventListener('DOMContentLoaded', add_unsplash_credit, false);
