# expa/req-meta-viewport

The rule checks if `<meta name="viewport" content="width=device-width,initial-scale=1">` is present in `<head>`. The rule takes the values `true` or `false`

## true 
There is `<meta name="viewport" content="width=device-width,initial-scale=1">` in `<head>`.

The following patterns are considered problematic:
```html
<head>
  ...
</head>
```

The following patterns are **not** considered problems:
```html
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
```

