var contain = "";
for (var i = 0; i < 5; i++) {
    contain += `
    <div class="col-md-4>
    <div class="item"
    <img src="./assets/images/dark.png" alt="logo-image" style="background-color: red; text-align:center; color:white;margin:2px;">
    <h2>Hello</h2>
    </div>
    </div>
    `
}
console.log(contain)
document.getElementById("fetch").innerHTML = contain;