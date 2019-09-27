import scrollParents from './../lib/scroll-parents';

test('Jest imports scrollParents using ES6', () => {
    expect(typeof scrollParents).toBe('function');
});

test('Node appended to document.body only returns [window]', () => {
    let child = document.createElement('div');
    document.body.appendChild(child);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window]));
});

test("Node inside parent with 'overflow: scroll' returns [window, parentNode]", () => {
    let parent = document.createElement('div');
    parent.setAttribute('style', "overflow: scroll;");

    let child = document.createElement('div');

    parent.appendChild(child);
    document.body.appendChild(parent);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window, parent]));
});

test("Node inside parent with 'overflow: auto' returns [window, parentNode]", () => {
    let parent = document.createElement('div');
    parent.setAttribute('style', "overflow: auto;");

    let child = document.createElement('div');

    parent.appendChild(child);
    document.body.appendChild(parent);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window, parent]));
});

test("Node inside parent with 'overflow-x: scroll' returns [window, parentNode]", () => {
    let parent = document.createElement('div');
    parent.setAttribute('style', "overflow-x: scroll;");

    let child = document.createElement('div');

    parent.appendChild(child);
    document.body.appendChild(parent);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window, parent]));
});

test("Node inside parent with 'overflow-x: auto' returns [window, parentNode]", () => {
    let parent = document.createElement('div');
    parent.setAttribute('style', "overflow-x: auto;");

    let child = document.createElement('div');

    parent.appendChild(child);
    document.body.appendChild(parent);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window, parent]));
});

test("Node inside parent with 'overflow-y: scroll' returns [window, parentNode]", () => {
    let parent = document.createElement('div');
    parent.setAttribute('style', "overflow-y: scroll;");

    let child = document.createElement('div');

    parent.appendChild(child);
    document.body.appendChild(parent);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window, parent]));
});

test("Node inside parent with 'overflow-y: auto' returns [window, parentNode]", () => {
    let parent = document.createElement('div');
    parent.setAttribute('style', "overflow-y: auto;");

    let child = document.createElement('div');

    parent.appendChild(child);
    document.body.appendChild(parent);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window, parent]));
});

test("Node inside two parents with 'overflow: scroll' returns [window, parentNodeA, parentNodeB]", () => {
    let parentA = document.createElement('div');
    parentA.setAttribute('style', "overflow: scroll;");

    let parentB = document.createElement('div');
    parentB.setAttribute('style', "overflow: scroll;");

    let child = document.createElement('div');

    parentB.appendChild(child);
    parentA.appendChild(parentB);
    document.body.appendChild(parentA);

    expect(scrollParents(child)).toEqual(expect.arrayContaining([window, parentA, parentB]));
});