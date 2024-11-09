# expa/charset-position

A rule for positioning `<meta charset="">` in `<head>`. The rule takes the values `true` or `false`

## true `<meta charset="">` is specified as the first immediate child in `<head>`.

The following patterns are considered problematic:
```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">
</head>

<head>
  <title>Title</title>
  <meta charset="utf-8">
</head>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Title</title>
  <link href="./styles/styles.css" rel="stylesheet">
  <meta charset="utf-8">
</head>
```

The following patterns are **not** considered problems:
```html
<head>
  <meta charset="utf-8">
  <title>Title</title>
</head>
```

