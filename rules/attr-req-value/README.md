# expa/attr-req-value
Checks attribute values for emptiness.

Fork: https://linthtml.vercel.app/user-guide/rules/list/attr-req-value

The rule requires attributes to be filled, and allows you to specify an exception list in `ignore`

## true If enabled, attributes cannot be empty.

> Logical attributes can have no values, such as `disabled` or `hidden`.

The following patterns are considered problematic:
```html
<button id= ></button>
<button id=“”></button>
<button id= class=“bar” ></button>
<button class></button>
```

The following patterns are **not** considered problems:

```html
<button class=“foo”></button>

<button disabled></button>
```

### ignore
Ignores the enumerated list of attributes. Accepts values of `string|regex`.

```js
{
  'expa/attr-req-value': [true, 
    { 
      ignore: ['alt', '/^data-/']
    }
  ]
}
```

The following patterns are considered problematic:

```html
<button id=“”></button>
```

The following patterns are **not** considered problems:

```html
<img src=“images/image.jpg” width=“100” height=“100” alt=“”>
<section data-test></section>
```

## Exceptions
A single `<option>` in `<select>` can be with an empty value for the `value` attribute if it is selected by default.

The following pattern is **not** considered a problem:

```html
<label for=“fruits”>Fruits</label>
<select id=“fruits” name=“fruits” required>
  <option value=“”>Select...</option>
  <option value=“banana”>Banana</option>
  <option value=“apple”>Apple</option>
</select>
```
