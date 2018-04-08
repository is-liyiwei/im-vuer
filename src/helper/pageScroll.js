
// copy form ydui: https://github.com/ydcss/vue-ydui/blob/master/src/utils/assist.js
const pageScroll = (function () {
    const fn = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    let islock = false;

    return {
        lock(el) {
            if (islock) return;
            islock = true;
            (el || document).addEventListener('touchmove', fn);
        },
        unlock(el) {
            islock = false;
            (el || document).removeEventListener('touchmove', fn);
        }
    };
})();

export { pageScroll };
