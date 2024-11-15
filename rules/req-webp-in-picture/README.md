# expa/req-webp-in-picture

The rule checks for webp images in the `<picture>` tag. Does not check `<picture>` if all `<source>` have attribute `type="image/svg+xml"`.

## true

The following patterns are considered problematic:

```html
<picture>
  <source width="400" height="200" srcset="image.jpg" type="image/jpeg">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>

<picture
  <source width="800" height="400" srcset="image-800w.png" type="image/png" media="(min-width: 800px)">
  <source width="400" height="200" srcset="image-400w.png" type="image/png" media="(min-width: 400px)">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>
```

The following patterns are **not** considered problems:

```html
<picture>
  <source width="800" height="400" srcset="image-800w.webp" type="image/webp" media="(min-width: 800px)">
  <source width="400" height="200" srcset="image-400w.webp" type="image/webp" media="(min-width: 400px)">
  <source width="800" height="400" srcset="image-800w.png" type="image/png" media="(min-width: 800px)">
  <source width="400" height="200" srcset="image-400w.png" type="image/png" media="(min-width: 400px)">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>
```

```html
<picture>
  <source width="400" height="200" srcset="image.webp" type="image/webp">
  <source width="400" height="200" srcset="image.jpg" type="image/jpeg">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>
```

```html
<picture>
  <source type="image/svg+xml" media="(width >= 1280px)" srcset="images/logo-1280.svg" width="33" height="38">
  <source type="image/svg+xml" media="(width >= 768px)" srcset="images/logo-768.svg" width="33" height="38">
  <img src="images/logo.svg" srcset="images/logo.svg" width="33" height="38" alt="">
</picture>
```
