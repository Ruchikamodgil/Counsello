(function () {

    var headerNav = document.getElementById("headerNav");
    var navToggle = document.getElementById("navToggle");

    navToggle.addEventListener("click", function () {
        toggleClass(headerNav, "translate");
    })

    function toggleClass(element, className) {
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }
    function addClass(element, className) {
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1) {
            classList.push(className);
            classList = classList.join(" ");
            element.className = classList;
        }
    }
    function removeClass(element, className) {
        var classList = element.className.split(" ");
        if (classList.indexOf(className) !== -1) {
            classList = classList.filter(function (e) {
                return e !== className
            })
            element.className = classList;
        }
    }
})();