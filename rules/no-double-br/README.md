# expa/img-svg-req-dimensions

The rule checks for a consecutive double `<br>`. The rule takes the values `true` or `false`.

## true There is no other `<br>` after the `<br>` element.

The following patterns are considered problematic:

```html
<p>Lorem ipsum dolor sit amet.</p>
<br>
<br>
<p>Lorem ipsum dolor sit amet.</p>

<p>Lorem ipsum dolor sit amet.</p>
<br>


<br>
<p>Lorem ipsum dolor sit amet.</p>
```

```html
<p>Lorem ipsum <br><br>sit amet.</p>
<p>Lorem ipsum <br> <br>sit amet.</p>
```

The following patterns are **not** considered problems:
```html
<p>Lorem ipsum <br>dolor <br>sit amet.</p>
```

```html
<p>Lorem ipsum <br>dolor sit amet.</p>
<p><br>sit amet.</p>
```

