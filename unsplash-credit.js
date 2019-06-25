function add_unsplash_credit() {
    var el = document.querySelector( "#site-main > div > article > figure" );
    
    if (el && el.style.backgroundImage) {
        var re = /(.*)\/([\w-]+)-@([\w]+)-([a-zA-Z0-9]+)-unsplash\.jpg\"\)/g;
        var photog_name = el.style.backgroundImage.replace(re, '$2');
        var photog_user = el.style.backgroundImage.replace(re, '$3');
    
        var credit_frag = `
            <div style="text-align: right; font-size: x-small;">
                photo credit: <a href="https://unsplash.com/@${photog_user}" target="_blank" rel="noopener noreferrer" title="Photo courtesy of ${photog_name} on Unsplash"><span style="display:inline-block;padding:2px 3px;">${photog_name}</span></a>
            </div>
        `;
        
        el.insertAdjacentHTML( 'beforebegin', credit_frag);
    }
}

window.addEventListener('DOMContentLoaded', add_unsplash_credit, false);
