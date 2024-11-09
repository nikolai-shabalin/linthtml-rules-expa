# expa/aria-label-misuse

Prohibits the incorrect use of `aria-label`. The attribute can only be used for the following elements:

- [Interactive elements](https://html.spec.whatwg.org/multipage/interactive-elements.html#interactive-elements)
- [Landmark elements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role)
- `<iframe>`
- `<summary>`
- `<table>`, `<td>` and `<th>`

Although `aria-label` is allowed for any element, in practice `aria-label` is only supported for interactive elements, widgets, and iframes.

Use `aria-label` to provide an accessible name, for interactive elements such as links, videos, form controls, for orientations and widgets.

## true

The following patterns are considered problematic:
```html
<svg aria-label="description"></svg>
```

The following patterns are **not** considered problems:
```html
<input type="text" name="name" aria-label="description">
```
