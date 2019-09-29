# scroll-parents

<img src="https://img.shields.io/npm/v/scroll-parents" /> <img src="https://img.shields.io/travis/Lillebo/scroll-parents" />

Simple function that returns an array with all the scrolling parent nodes of a given element. Useful if an element needs to listen to the scroll event of all it's parent nodes.

## Install

```shell
npm install scroll-parents --save
```

## Examples 

### With scrolling parents

```html
<html>
    <body>
        <div id="scrolling-parent" style="overflow:scroll;">
            <div id="my-id"></div>
        </div>
    </body>
</html>
```

```js
import scrollParents from 'scroll-parents';

const myNode = document.getElementById('my-id');

scrollParents(myNode); // Output: [window, scrollingParent]
````

### Without scrolling parents

```html
<html>
    <body>
        <div id="my-id"></div>
    </body>
</html>
```

```js
import scrollParents from 'scroll-parents';

const myNode = document.getElementById('my-id');

scrollParents(myNode); // Output: [window]
````

## License

ISC
