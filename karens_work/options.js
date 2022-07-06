// $('.Show').click(function () {
//     $('#puzzle-show').show(500);
//     $('.Show').hide(0);
//     $('.Hide').show(0);
// });
// $('.Hide').click(function () {
//     $('#puzzle-show').hide(500);
//     $('.Show').show(0);
//     $('.Hide').hide(0);
// });

function myFunction() {
    var x = document.getElementById("puzzle-show");
    var arrowup = document.getElementById("fa-chevron-up")
    var arrowdown = document.getElementById("fa-chevron-down")

    if (x.style.display === "flex") {
        x.style.display = "none";
        arrowup.style.display = "block"
        arrowdown.style.display = "none"

        
    } else {
        x.style.display = "flex";
        arrowup.style.display = "none"
        arrowdown.style.display = "block"

    }
}