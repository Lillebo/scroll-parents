function scrollParents(element: HTMLElement) {
    const arr = [];
    const overflowRegex = /(auto|scroll)/;

    for (let parent = element; parent !== document.body; parent = parent.parentElement) {
        const style = getComputedStyle(parent);
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
            arr.push(parent);
        }
    }

    arr.push(window);

    return arr;
}

export default scrollParents;
