# expa/tag-req-attr

If set, the specified attributes must be present in the specified tag.

Fork: https://linthtml.vercel.app/user-guide/rules/list/tag-req-attr

## true

```json
'expa/tag-req-attr': [
  true, {
    'input': [
      {
        name: 'name'
      },
    ],
    // Другие элементы...
  },
]
```

```json
{
  "tag-req-attr": [
    true,
    {
      "img": [
        {
          "name": "src"
        },
        {
          "name": "alt"
        }
      ]
    }
  ]
}
```

The following models are considered to be violations:

```html
<img/>
```

```html
<img src="link"/>
```

```html
<img alt="No image">
```

The following details are not considered violations:

```html
<img alt="Picture of a cute cat" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiHzdu5n4ThAhXOxYUKHebmDXoQjRx6BAgBEAU&url=https%3A%2F%2Fimgur.com%2Fgallery%2FHzG2YW8&psig=AOvVaw3w5Zu0oMuDZy83zsfn0NMU&ust=1552742695628256">
```

## ignore

The `ignore` field allows you to ignore attributes depending on their values.

```json
{
  'expa/tag-req-attr': [
    true,
    {
      'input': [
        {
          name: 'name',
          ignore: {
            'type': 'submit'
          }
        }
      ]
    }
  ]
}
```

The following patterns are considered violations:

```html
<input name="name" type="submit">
```

The following details are **not** considered violations:

If the `input` element has the `type` attribute set to `submit`, then the `name` attribute is optional.


```html
<input type="submit" value="Submit">
```
