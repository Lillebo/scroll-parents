"use strict";
exports.__esModule = true;
function scrollParents(element) {
    var parent;
    var arr = [];
    var overflowRegex = /(auto|scroll)/;
    for (parent = element; parent !== document.body; parent = parent.parentElement) {
        var style = getComputedStyle(parent);
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
            arr.push(parent);
        }
    }
    arr.push(window);
    return arr;
}
exports["default"] = scrollParents;
