# expa/head-meta-charset

The rule checks if `<meta charset="">` is present in `<head>`. The rule takes the values `true` or `false`.

## true There is `<meta charset="">` in `<head>`.

The following templates are considered problematic:
```html
<head>
  ...
</head>
```
The following patterns are **not** considered problems:
```html
<head>
  <meta charset="windows-1251">
</head>

<head>
  <meta charset="utf-8">
</head>
```

