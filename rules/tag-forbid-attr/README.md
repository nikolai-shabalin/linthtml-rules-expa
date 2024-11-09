# expa/tag-forbid-attr

If set, the specified attributes must be absent from the specified tag.

## true

```json
{
  "tag-forbid-attr": [
    true,
    {
      "picture": [
        {
          "name": "class"
        }
      ],
      "body": [
        {
          "name": "class"
        }
      ]
    }
  ]
}
```

The following patterns are considered violations:

```html
<body class="page__body">
</body>
```

```html
<picture class="product__image">
  <img width="200" height="68" src="" alt="">
</picture>
```

The following details are **not** considered violations:

```html
<body>

</body>
```

```html
<picture>
  <img class="product__image" width="200" height="68" src="" alt="">
</picture>
```
