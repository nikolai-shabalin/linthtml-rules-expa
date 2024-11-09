# expa/link-req-content

The rule checks whether links have text content. [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H30) requires that each `<a>` link contain text describing the purpose of the link, using either plain text or `<img>` with the `alt` attribute set.

The rule recognizes the following patterns: - Text (not spaces) within the link - Images with non-empty alternative text - `aria-label` either on the link or on at least one descendant.

## true

The following templates are considered problematic:
```html
<a>
  <img src="images/cat.gif" width="100" height="1000">
</a>

<a href="#">
  <svg>...</svg>
</a>
```

The following patterns are **not** considered problems:
```html
<a href="#">
  lorem ipsum
</a>

<a href="#">
  <img src="images/cat.gif" width="100" height="100" alt="cat page">
</a>

<a href="#" aria-label="lorem ipsum"></a>
```
