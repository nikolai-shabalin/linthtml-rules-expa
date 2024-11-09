# expa/form-action-attribute

The rule checks the location of the `action` attribute of the `<form>` tag. The rule takes the values `true` or `false`.

## true The `<form>` tag must have the `action` attribute filled in.

The following templates are considered problematic:
```html
<form action=""></form>
<form></form>
```

The following patterns are **not** considered problems:
```html
<form action="https://example.com"></form>
```
