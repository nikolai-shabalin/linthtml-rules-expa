# expa/no-blocking-script

The rule checks the location of scripts in the markup. The rule takes the values `true` or `false`.

## true Scripts must be connected at the very bottom of the page so that they do not block content display when the page loads.

If the script is not blocking (`defer`, `async` or `type="module"`), it can be in `<head>`.

The following templates are considered problematic:
```html
<html lang="ru">
<head>
  <script src="app.js"></script>
</head>
<body>…</body>
</html>
```

The following patterns are **not** considered problems:
```html
<html lang="ru">
<head>…</head>
<body>
<!-- Содержимое страницы -->
<script src="app.js"></script>
</body>
</html>
```

```html
<html lang="ru">
<head>
  <script async src="app.js"></script>
</head>
<body>…</body>
</html>
```

```html
<html lang="ru">
<head>
  <script src="app.js" type="module"></script>
</head>
<body>…</body>
</html>
```
