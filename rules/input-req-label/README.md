# expa/input-req-label

Fork: https://linthtml.vercel.app/user-guide/rules/list/input-req-label

The rule requires a label for an input field, and allows you to specify a label in `aria-label`.

## true If enabled, labels cannot be empty.


The following templates are considered problematic:
```html
<input type="text" value="great">

<div>
  <label for="dinosaur">Label!</label>
</div>
<section>
  <input type="text" id="romeo">
</section>
```

The following patterns are **not** considered problems:

```html
<div>
  <label for="dinosaur">Label!</label>
</div>
<section>
  <input type="radio" id="dinosaur">
</section>

<label>
  Label!
  <input type="text">
</label>

<input type="text" aria-label="dinosaur">

<input type="hidden" value="dinosaur">

<input type="submit" value="submit">
```
