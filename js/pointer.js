const throttlingCallbackMs = 15;

$(document).ready(function() {
    $('.facts').slick();
    // const pointerElement = $('#pointer-follower');
    // $(document).mousemove(throttle(throttlingCallbackMs, function(event) {
    //     moveCallback(event, pointerElement);
    // }));
    // $(document).mouseenter(throttle(throttlingCallbackMs, function(event) {
    //     moveCallback(event, pointerElement);
    // }));
    // $(document).scroll(throttle(throttlingCallbackMs, function(event) {
    //     moveCallback(event, pointerElement);
    // }));
    $('.next-screen').click((e) => {
        window.scroll({top: window.pageYOffset + window.outerHeight, behavior: 'smooth'});
    })

});




function moveCallback(event, element) {
    console.log(event);
    const newX = event.pageX + 40;
    const newY = event.pageY + 40;
    // const newX = event.clientX;
    // const newY = event.clientY - 400;
    // element.css({transform: `translate(${newX}px, ${newY}px)`});
    // element.css({transform: `translate3d(${newX}px, ${newY}px, 0)`});
    element.css({ top: newY, left: newX});
}
function throttle(ms, func) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}