
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');

    let cart = JSON.parse(localStorage.getItem("dailyBakeCart")) || [];

    /* OPEN CART */

    if(document.getElementById('cartBtn')){
        document.getElementById('cartBtn').onclick = () => {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        };
    }

    /* CLOSE CART */

    if(document.getElementById('closeCart')){
        document.getElementById('closeCart').onclick = closeCart;
    }

    if(cartOverlay){
        cartOverlay.onclick = closeCart;
    }

    function closeCart(){
        if(cartSidebar) cartSidebar.classList.remove('active');
        if(cartOverlay) cartOverlay.classList.remove('active');
    }

    /* ADD PRODUCT */

    const addButtons = document.querySelectorAll('.add-cart');

    addButtons.forEach(button => {

        button.addEventListener('click', () => {

            const name = button.dataset.name;
            const price = Number(button.dataset.price);
            const image = button.dataset.image;

            console.log("Clicked:", name, price);

            const existing = cart.find(item => item.name === name);

            if(existing){
                existing.qty++;
            }else{
                cart.push({
                    name: name,
                    price: price,
                    image: image,
                    qty: 1
                });
            }

            renderCart();

        });

    });

    /* RENDER CART */

    function renderCart(){

        console.log("Cart Contents:", cart);
        if(!cartItems) return;

        if(cart.length === 0){

            cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty</p>';

            if(cartTotal) cartTotal.textContent = "0";
            if(cartCount) cartCount.textContent = "0";

            localStorage.setItem(
                "dailyBakeCart",
                JSON.stringify(cart)
            );

            return;
        }

        let total = 0;
        let quantity = 0;

        cartItems.innerHTML = "";

        cart.forEach((item,index) => {

            total += item.price * item.qty;
            quantity += item.qty;

            cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" class="cart-item-img">

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>
                        ₱${item.price.toLocaleString()}
                        ×
                        ${item.qty}
                        =
                        ₱${(item.price * item.qty).toLocaleString()}
                    </p>

                    <div class="qty-controls">

                        <button onclick="changeQty(${index},-1)">-</button>

                        <span>${item.qty}</span>

                        <button onclick="changeQty(${index},1)">+</button>

                        <button class="remove-btn"
                                onclick="removeItem(${index})">
                            Remove
                        </button>

                    </div>

                </div>

            </div>
            `;
        });

        if(cartTotal){
            cartTotal.textContent =
            total.toLocaleString();
        }

        if(cartCount){
            cartCount.textContent =
            quantity;
        }

        localStorage.setItem(
            "dailyBakeCart",
            JSON.stringify(cart)
        );
    }

    /* CHANGE QUANTITY */

    function changeQty(index,value){

        cart[index].qty += value;

        if(cart[index].qty <= 0){
            cart.splice(index,1);
        }

        renderCart();
    }

    /* REMOVE ITEM */

    function removeItem(index){

        cart.splice(index,1);

        renderCart();
    }

    /* CHECKOUT */

    function checkout(){

        if(cart.length === 0){
            alert("Your cart is empty!");
            return;
        }

        let receipt =
        "===== DAILY BAKE RECEIPT =====\n\n";

        let total = 0;

        cart.forEach(item => {

            const subtotal =
            item.price * item.qty;

            receipt +=
            `${item.name}\n` +
            `Qty: ${item.qty}\n` +
            `Subtotal: ₱${subtotal.toLocaleString()}\n\n`;

            total += subtotal;
        });

        receipt +=
        `TOTAL: ₱${total.toLocaleString()}`;

        alert(receipt);

        cart = [];

        renderCart();

        closeCart();
    }

    if(document.getElementById('checkoutBtn')){
        document
            .getElementById('checkoutBtn')
            .addEventListener('click', checkout);
    }

    /* LOAD SAVED CART */

    renderCart();


    let slideImages = document.querySelectorAll('.BakeImage .slide img');

    let next = document.querySelector('.next');
    let prev= document.querySelector('.prev');
    let index = 0;
    let dots = document.querySelectorAll('.dot');

    var counter = 0;


    next.addEventListener('click', slideNext);
    function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
    }



    prev.addEventListener('click', slidePrev);
    function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
    }


    function autoSliding(){
        deletInterval = setInterval(timer, 3000);
        function timer(){
            slideNext();
            indicators();
        }
    }
    autoSliding();



    const container = document.querySelector('.BakeImage');
    container.addEventListener('mouseover', function(){
        clearInterval(deletInterval);
    });

    container.addEventListener('mouseout', autoSliding);

    function indicators(){
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(' active', '');
        }
        dots[counter].className += ' active';
    }


    function switchImage(currentImage){
        currentImage.classList.add('active');
        var imageId = currentImage.getAttribute('attr');
        if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
        }
        else if(imageId == counter){
            return;
        }
        else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
        }
        indicators();
    }

