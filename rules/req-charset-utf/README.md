# expa/req-charset-utf

The rule checks if `utf-8` is set to `<meta charset="">`. The rule takes the values `true` or `false`.

## true ``<meta charset="">` has the value `utf-8`.

The following templates are considered problematic: 
```html
<head>
  <meta charset="windows-1251">
</head>
```

The following patterns are **not** considered problems:
```html
<head>
  <meta charset="utf-8">
</head>
```

