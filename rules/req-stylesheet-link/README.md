# expa/req-stylesheet-link

The `<head>` must have a style file attached. The `href` attribute must not be empty.

The following patterns are considered problematic:
```html
<head>
  <link rel="stylesheet" href="">
</head>

<head>
  <link rel="stylesheet">
</head>

<head>
  <link rel="style" href="styles/style.css">
</head>
```

The following patterns are **not** considered problems:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>

<head>
  <link rel="stylesheet" href="styles/style.css" type="text/css" media="screen,projection">
</head>

<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap">
</head>
```
