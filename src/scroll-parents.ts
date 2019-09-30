function scrollParents(element: HTMLElement) {
    let parent: HTMLElement;
    const arr: Array<HTMLElement|Window> = [];
    const overflowRegex = /(auto|scroll)/;

    for (parent = element; parent !== document.body; parent = parent.parentElement!) {
        const style = getComputedStyle(parent);
        if (overflowRegex.test(style.overflow! + style.overflowY! + style.overflowX!)) {
            arr.push(parent);
        }
    }

    arr.push(window);

    return arr;
}

export default scrollParents;
