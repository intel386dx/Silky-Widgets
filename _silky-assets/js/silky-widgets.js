(function () {
    var toggleButtons = document.getElementsByClassName("silky-toggle");
    for (i = 0; i < toggleButtons.length; i = i + 1) {
        toggleButtons[i].onmouseup = function () {
            if (this.getAttribute("value") == "0") {
                this.setAttribute("value", "1");
            } else {
                this.setAttribute("value", "0");
            }
        };
    };
})();