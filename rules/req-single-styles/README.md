# expa/req-single-styles

The project's own styles must be linked in a single file in `<head>`. 
The rule allows no more than one `link rel="stylesheet"` in `<head>`.

The following patterns are considered problematic:
```html
<head>
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/footer.css">
</head>
```

The following patterns are **not** considered problems:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>
```
