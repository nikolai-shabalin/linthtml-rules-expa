# expa/space-between-comments

This rule checks for spaces at the beginning and end of the comment block.

## Options
`string`: `"space"|"no-space"`

## Значение `space`
If a comment has spaces at both the beginning and end of the comment block, it is compliant.

The following patterns are considered problematic:
```html
<!-- It's a commentary-->
<!--It's a commentary -->
<!--It's a commentary-->
```

The following patterns are **not** considered problems:
```html
<!-- It's a commentary -->
```

## Значение `no-space`
If a comment has **no** spaces at both the beginning and end of the comment block, it is compliant.

The following patterns are considered problematic:
```html
<!-- It's a commentary-->
<!--It's a commentary -->
<!-- It's a commentary -->
```

The following patterns are **not** considered problems:
```html
<!--It's a commentary-->
```
