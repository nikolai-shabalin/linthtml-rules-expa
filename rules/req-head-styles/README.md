# expa/req-head-styles

Own project styles must be connected in `<head>`. The rule prohibits connecting styles outside `<head>`.

The following templates are considered problematic:
```html
<body>
  <link rel="stylesheet" href="styles/main.css">
</body>
```

The following patterns are **not** considered problems:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>
```
