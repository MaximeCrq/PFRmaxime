window.addEventListener("DOMContentLoaded", (event) =>  {
    setTimeout(function() {
        document.getElementById("loader").style.top = "-100vh";
    }, 500);

    const inputs = document.querySelectorAll("input:not(input[type=\"submit\"]), textarea");

    inputs.forEach(e => {
        e.addEventListener("click", function () {
            inputs.forEach(r => {
                r.style.borderBottom = "2px solid rgb(70, 41, 17)";
            });
            e.style.borderBottom = "2px solid #FFE4C3";
        });
    });
});