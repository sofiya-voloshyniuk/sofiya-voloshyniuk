ScrollOut({

    //    once:true,

    onShown: function (el) {

        if (el.hasAttribute('data-value')) {
            var progressVal = el.getAttribute('data-value');
            var progressLineElem = el.querySelector('span');
            progressLineElem.style.width = progressVal;
        }
    },

    onHidden: function (el) {

        if (el.hasAttribute('data-value')) {
            var progressLineElem = el.querySelector('span');
            progressLineElem.style.width = 0;
        }
    }
});

// $('.facts-carousel').slick({
//     centerMode: true,
// });