let categoryFilter = document.getElementById('category-filter');
let productList = document.getElementById('products-list');
let totalDiv = document.querySelectorAll('.fender-img').length;
// console.log(categoryFilter, productList);
categoryFilter.addEventListener('change',function(){
    let categoryValue = categoryFilter.value;
    // console.log(categoryValue);
    
    let products = document.querySelectorAll(".product");
    // console.log(products);
    products.forEach(product=>{
        let productCategory = product.getAttribute('data-category');
        if(categoryValue === 'all' || categoryValue === productCategory){
            product.style.display = 'flex';
        } else{
            product.style.display = 'none';
        }
    })

});
function addAnimationAndRedirect(img) {
    
    img.classList.add('animate__animated', 'animate__shakeY');

   
    img.addEventListener('animationend', function() {
        img.classList.remove('animate__animated', 'animate__shakeY');
    }, { once: true });

   
    img.addEventListener('click', function() {
        let url = img.getAttribute('data-url') || "https://www.bajaao.com/";
        window.open(url, '_blank');
    });
}
let fenderImages = document.querySelectorAll('.fender-img');

fenderImages.forEach(img => {
    img.addEventListener('mouseover', function() {
        addAnimationAndRedirect(img);
    });

    img.addEventListener('touchstart', function() {
        addAnimationAndRedirect(img);
    });
});


