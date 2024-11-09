# expa/img-svg-req-dimensions
The rule checks if `width` and `height` attributes of `<img>` and `<svg>` elements are present. The rule takes the values `true` or `false`.

## true The `<img>` and `<svg>` elements contain both `width` and `height` attributes.

The following patterns are considered problematic:

```html
<img src="images/image.jpg">
<img width="100" src="images/image.jpg">
<img height="100" src="images/image.jpg">

<img src="images/image.jpg" width="500" height="" alt="">
<img src="images/image.jpg" width="" height="300" alt="">
<img src="images/image.jpg" width="" height="" alt="">
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>

<svg width="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>

<svg height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>

<svg width="" height="" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```
The following patterns are **not** considered problems:
```html
<img src="images/image.jpg" width="500" height="300" alt="">

<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```
