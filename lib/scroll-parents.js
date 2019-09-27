"use strict";
exports.__esModule = true;
function scrollParents(element) {
    var arr = [];
    var overflowRegex = /(auto|scroll)/;
    for (var parent_1 = element; parent_1 !== document.body; parent_1 = parent_1.parentElement) {
        var style = getComputedStyle(parent_1);
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
            arr.push(parent_1);
        }
    }
    arr.push(window);
    return arr;
}
exports["default"] = scrollParents;
