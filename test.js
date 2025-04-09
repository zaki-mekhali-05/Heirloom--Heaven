document.addEventListener("DOMContentLoaded", function () {
    updateCartTotal();
    document.querySelectorAll(".quantity-input").forEach((input) => {
        input.addEventListener("change", function () {
            if (this.value < 1 || isNaN(this.value)) this.value = 1;
            updateCartTotal();
        });
    });
    document.querySelectorAll(".remove-item").forEach((button) => {
        button.addEventListener("click", function () {
            this.closest(".cart-item").remove();
            updateCartTotal();
        });
    });
    document.querySelectorAll(".increase").forEach((btn) => {
        btn.addEventListener("click", function () {
            const input = this.parentElement.querySelector(".quantity-input");
            input.value = parseInt(input.value) + 1;
            updateCartTotal();
        });
    });
    document.querySelectorAll(".decrease").forEach((btn) => {
        btn.addEventListener("click", function () {
            const input = this.parentElement.querySelector(".quantity-input");
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateCartTotal();
            }
        });
    });
});
function updateCartTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach((item) => {
        const priceElement = item.querySelector(".item-price");
        const quantityInput = item.querySelector(".quantity-input");

        if (priceElement && quantityInput) {
            const price = parseFloat(priceElement.innerText.replace("$", ""));
            const quantity = parseInt(quantityInput.value);
            if (!isNaN(price) && !isNaN(quantity)) {
                total += price * quantity;
            }
        }
    });
    const totalDisplay = document.querySelector(".cart-total");
    if (totalDisplay) {
        totalDisplay.innerText = "Total: $" + total.toFixed(2);
    }
}