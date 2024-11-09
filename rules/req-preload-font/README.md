# expa/req-preload-font

The rule checks if there is a `preload` value for a font.

## true 
`preload` must be specified in `<head>` for fonts

```html
<head>
  <link rel="preload" href="path/to/font.font" as="font" type="font/*" crossorigin="anonymous">
</head>
```

`*` - font type
`path/to/font.font` - font path


The following patterns are considered problematic:

Без `preload`:
```html
<head>
  
</head>
```

With an empty or missing href:
```html
<head>
  <link rel="preload" href="" type="font/woff2" as="font">
</head>
```

The following patterns are **not** considered problems:
```html
<head>
  <link rel="preload" href="path/to/font.woff2" as="font" type="font/woff2">
</head>
```

