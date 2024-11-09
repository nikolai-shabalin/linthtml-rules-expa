# expa/req-source-width-height

The rule requires the `width` and `height` attributes of `<source>` inside `<piture>`.

## true 
If enabled, `<source>` without `width` and `height` attributes are considered a problem.


The following patterns are considered problematic:
```html
<picture>
  <source srcset="images/image-tablet.jpg" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```

The following patterns are **not** considered problems:
```html
<picture>
  <source srcset="images/image-tablet.jpg" width="768" height="480" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```
