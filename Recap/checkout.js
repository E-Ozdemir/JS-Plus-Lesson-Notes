
//Product Constructor(Diger dillerde class Product(seklinde tanimlaniyor.))

function Product(name, price, quantity) {
    console.log('this :>> ', this);
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

//Görüntüyü kullanmak icin kullandigimiz bir class . Mesela field leri temizlemek icin kullanacagiz bu class i.
function Display() {
    console.log("Display of this");
    console.log('this :>> ', this);
    this.name = document.getElementById("name");
    this.price = document.getElementById("price");
    this.quantity = document.getElementById("quantity");

}
document.getElementById("customer-form").addEventListener("submit",
    function (e) {
        console.log('.....event :>> ', e);
        // Buradaki this >>>> document.getElementById("customer-form") anlamina geliyor.
        console.log("...form's this...", this);
        // Submit isleminin kendi defaultundaki islemi degilde , benim istedigim seyi yapmasini istedigim icin preventDefault ekliyoruz
        e.preventDefault();
        // product ve display yukarida olsturdugumuz iki constructor in instance lari. instance bir siniftaki ögrenci gibi yada bir tablodaki satir gibi düsünülebilir. Instancelar türetildikleri classlarin yani constructor larin tüm özelliklerini icerirler.
        const name = this.querySelector("#name");
        const price = this.querySelector("#price");
        const quantity = this.querySelector("#quantity");

        //Instance'lar(Nesneler)
        const product = new Product(name.value, price.value, quantity.value);
        const display = new Display();

        display.clearFields();
        //display instance 'ina product verilerini göndermemiz gerekiyor
        display.showLoading(product);


    });

//Display classinin tüm instance'lari bu showLoading fonksiyonunu kullanabilsin diye bu sekilde tanimlama yapiyoruz!!
Display.prototype.showLoading = function (product) {
    const loading = document.querySelector(".loading");
    // console.log('loading :>> ', loading);
    loading.style.display = "block";
    console.log('show loading"s this', this);

    const displayObj = this;
    setTimeout(function () {
        loading.style.display = "none";
        displayObj.addProduct(product);
    }, 3000);

}
Display.prototype.clearFields = function () {
    this.name.value = ""
    this.price.value = ""
    this.quantity.value = ""
}
Display.prototype.addProduct = function (product) {
    // const deger = document.querySelectorAll(".product-title");
    // console.log('deger :>> ', deger[0].innerHTML);
    // for (let index = 0; index < deger.length; index++) {
    //     if (deger[index].innerHTML == product.name.value) {
    //         alert("found")
    //     }
    //     else {
            const productsDiv = document.getElementsByClassName("products")[0];
            productsDiv.innerHTML += `
    <div class="product">
              <div class="product-image">
                <img src="img/product-${Math.floor(Math.random() * 6)}.jpg">
              </div>
              <div class="product-details">
                <div class="product-title">${product.name}</div>
              </div>
              <div class="product-price">${product.price}</div>
              <div class="product-quantity">
                <input type="number" value="${product.quantity}" min="1">
              </div>
              <div class="product-removal">
                <button class="remove-product">
                  Remove
                </button>
              </div>
              <div class="product-line-price">${(parseFloat(product.price) * parseFloat(product.quantity)).toFixed(2)}</div>
    </div>`;

    //     }

    // }




}

























// const queryString = window.location.search; // aktif sayfadaki search bar location bölgesindeki bilgiyi cekiyor
// // console.log(queryString);

// const urlParams = new URLSearchParams(queryString);
// // console.log(urlParams);
// const firstname = urlParams.get("firstname");
// const lastname = urlParams.get("lastname");
// // alert('Welcome '+ firstname+' '+ lastname);
// //------

// const updateProductQuantity = (quantityInput) => {
//     alert(quantityInput);
// }

// document.querySelectorAll(".product-quantity input").forEach(function(input){
//     input.addEventListener("change",function(){
//         updateProductQuantity(this);
//     });
// });

// const removeProduct = (removeButton) => {
//     let productRow = removeButton.parentElement.parentElement;
//     productRow.remove();
// }
// document.querySelectorAll('.product-removal button').forEach(function(button){
//     button.addEventListener('click',function(){
//         removeProduct(this);
//     });
// });

//----------------

// const updateProductQuantity = (input) => {
//     alert(input);
// }

// document.querySelectorAll(".product-quantity input").forEach(function(input){
//     input.addEventListener("change",function(){
//         updateProductQuantity(input);
//     });
// });

// const removeProduct = (button) => {
//     let productRow = button.parentElement.parentElement;
//     productRow.remove();
// }
// document.querySelectorAll('.product-removal button').forEach(function(button){
//     button.addEventListener('click',function(){
//         removeProduct(button);
//     });
// });
