# expa/attr-delimiter

This rule prohibits the use of spaces separating the attribute key and value, i.e. before or after the `=` character. Technically, spaces are allowed by the HTML5 specification. The use of spaces in this context may be an indication of a typo.

## true The attribute key and value are not separated by spaces

The following patterns are considered problematic:
```html
<input name ="my-field">
<input name= "my-field">
```

The following patterns are **not** considered problems:
```html
<input name="my-field">
```

