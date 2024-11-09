# expa/no-px-size

The rule checks the value of `width` and `height` attributes of `<img>` and `<svg>` elements. The rule takes the values `true` or `false`.

## true The `width` and `height` attributes contain only numbers, no units.

The following templates are considered problematic:

```html
<img width="100px" height="100%" src="images/image.jpg">
```

The following patterns are **not** considered problems:
```html
<img width="500" height="300" src="images/image.jpg" alt="">

<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```
