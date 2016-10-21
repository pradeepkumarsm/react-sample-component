class FlagIcon extends HTMLElement {
    constructor() {
        super();
        this._countryCode = null;


        var link = document.createElement('a');
        link.innerText = this.getAttribute('data-name');
        link.href = this.getAttribute('data-url');
        link.className = 'product-name';


        var link2 = document.createElement('div');
        link2.innerText = 'pradeep';
        link2.href = this.getAttribute('data-url');
        link2.className = 'product-name';

        // Add the link to the shadow root.
        this.appendChild(link);
        this.appendChild(link2);


        /*var shadow = this.createShadowRoot();

         // Create a standard img element and set it's attributes.
         var img = document.createElement('img');
         img.alt = this.getAttribute('data-name');
         img.src = this.getAttribute('data-img');
         img.width = '150';
         img.height = '150';
         img.className = 'product-img';

         // Add the image to the shadow root.
         shadow.appendChild(img);

         // Add an event listener to the image.
         img.addEventListener('click', () => {
         window.location = this.getAttribute('data-url');
         });*/

       /* var shadow = this.createShadowRoot();

        // Create a standard img element and set it's attributes.
        var img = document.createElement('img');
        img.alt = this.getAttribute('data-name');
        img.src = this.getAttribute('data-img');
        img.width = '150';
        img.height = '150';
        img.className = 'product-img';

        // Add the image to the shadow root.
        shadow.appendChild(img);

        // Add an event listener to the image.
        img.addEventListener('click', () => {
            window.location = this.getAttribute('data-url');
        });*/

        /*// Create a link to the product.
        var link = document.createElement('a');
        link.innerText = this.getAttribute('data-name');
        link.href = this.getAttribute('data-url');
        link.className = 'product-name';

        // Add the link to the shadow root.
        shadow.appendChild(link);*/
    }

}


customElements.define("flag-icon", FlagIcon);