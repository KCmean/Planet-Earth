(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".page1");
    const elem2 = document.querySelector(".page2");
    const elem3 = document.querySelector(".page3");
    const elem4=document.querySelector("#stats");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        // console.log(x);
        elem.style.backgroundPosition = x;
        elem2.style.backgroundPosition = x;
        elem3.style.backgroundPosition = x;
        elem4.style.backgroundPosition = x;
    }

})();