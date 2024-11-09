# expa/ban-url-spaces
The rule checks for spaces in addresses in the `href` and `src` attributes.

Although the browser can escape characters, spaces in the address are forbidden by the specification.

The following patterns are considered problematic:
```html
<a href="https://example.com?query=some long param">Link</a>
```

The following patterns are **not** considered problems:

```html
<a href="https://example.com?query=some%20long%20param">Link</a>
```
