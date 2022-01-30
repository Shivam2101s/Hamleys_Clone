let parent = document.getElementById("bag");

let cart = JSON.parse(localStorage.getItem("hamley_cart"));

function show_cart() {
  cart.forEach((item) => {
    let div = document.createElement("div");
    div.setAttribute("class", "productDiv");

    let image = document.createElement("img");
    image.src = item.img;

    let name = document.createElement("p");
    name.setAttribute("id", "productName");
    name.innerText = item.name;

    let price = document.createElement("p");
    price.setAttribute("id", "productPrice");
    price.innerText = `₹ ${item.price}`;

    div.append(image, name, price);

    parent.append(div);
  });
}
show_cart();

let totalDiv = document.getElementById("total");

function totalPrice() {
  let total_product = document.createElement("p");

  let total_price = document.createElement("p");

  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum += Number(cart[i].price);
  }

  let apply_promo = document.getElementById("couponBtn");

  apply_promo.onclick = function () {
    applyPromo(sum, totalDiv);
  };

  total_product.innerText = "Items : " + cart.length;

  total_price.innerText = "Total Price : ₹ " + sum;

  totalDiv.append(total_product, total_price);
}

totalPrice();

let final = document.createElement("p");

function applyPromo(s, c) {
  let promo = document.getElementById("promo").value;

  final.innerText = null;

  if (promo == "NEW30") {
    s -= s * 0.3;
    final.textContent = "Discounted Price : ₹ " + s;
    c.append(final);
    alert("Voucher Applied Successfully");
  } else if (promo == "NEW10") {
    s -= s * 0.1;
    final.textContent = "Discounted Price : ₹ " + s;
    c.append(final);
    alert("Voucher Applied Successfully");
  } else if (promo == "DIWALI") {
    s -= s * 0.5;
    final.textContent = "Discounted Price : ₹ " + s;
    c.append(final);
    alert("Voucher Applied Successfully");
  } else {
    alert("Invalid Voucher Code");
  }
}

function clearCart() {
  localStorage.removeItem("hamley_cart");
    window.location.reload();
    alert("Cart Cleared Successfully !!")
}

function checkout() {
  window.location.assign("../HTML/hamleys_checkout.html");
}