# expa/a-target-rel
The rule checks if the `rel` attribute with values `noreferrer` and `noopener` is present at links ` <a>` with attribute `target="_blank"`. The rule takes the values true or false.

## true Links `<a>` with attribute `target="_blank"` contain attribute `rel` with values `noreferrer` and `noopener`.

The following templates are considered problematic:
```html
<a href="https://example.com" target="_blank">Link</a>

<a href="https://example.com" target="_blank" rel="noreferrer">Link</a>

<a href="https://example.com" target="_blank" rel="noopener">Link</a>
```

The following patterns are **not** considered problems:
```html
<a href="https://example.com" target="_blank" rel="noreferrer noopener">Link</a>

<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link</a>
```
