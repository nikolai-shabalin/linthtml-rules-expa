# Список правил от HTML Academy

| Имя правила                                                                        | Описания                                                                                           |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [expa/a-target-rel](../rules/a-target-rel/README.md)                        | Checks if `rel="noopener noreferrer"` is present at `<a target="_blank"></a>`.                         |
| [expa/aria-label-misuse](../rules/aria-label-misuse/README.md)              | Requires the use of `aria-label` on certain elements                                       |
| [expa/attr-delimiter](../rules/attr-delimiter/README.md)                    | Requires removing the space between `=` for attributes                                                    |
| [expa/attr-req-value](../rules/attr-req-value/README.md)                    | Disallows empty `""` attributes except those in `ignore: []`.                                       |
| [expa/attribute-allowed-values](../rules/attribute-allowed-values/README.md) | Checks attributes for valid values                                                  |
| [expa/ban-url-spaces](../rules/ban-url-spaces/README.md)                    | Checks for address spaces in the `href` and `rc` attributes.                                   |
| [expa/charset-position](../rules/charset-position/README.md)                | Requires specifying `<meta charset="utf-8">` as the first element in `<head>`                             |
| [expa/class-first](../rules/class-first/README.md)                          | Requires any `class` element to be specified as the first attribute of any `class` element                                       |
| [expa/form-action-attribute](../rules/form-action-attribute/README.md)      | Requires the `action` attribute of `<form>` to be specified.                                                  |
| [expa/head-meta-charset](../rules/head-meta-charset/README.md)              | Checks for the presence of `<meta charset="utf-8">` in `<head>`.                                           |
| [expa/id-no-dup](../rules/id-no-dup/README.md)                              | Prohibits duplicate `id` on page                                                            |
| [expa/img-svg-req-dimensions](../rules/img-svg-req-dimensions/README.md)    | Requires the `width` and `height` attributes of `<img>` and `<svg>`                                           |
| [expa/input-req-label](../rules/input-req-label/README.md)                  | Requires a label for the input field, and allows you to specify a label in `aria-label`                  |
| [expa/link-req-content](../rules/link-req-content/README.md)                | Checks if `<a>` has text content.                                                   |
| [expa/no-blocking-script](../rules/no-blocking-script/README.md)            | Checks the location of scripts in the markup                                                         |
| [expa/no-class-in-container](../rules/no-class-in-container/README.md)            | Checks the `class` attribute of child elements inside the specified container                   |
| [expa/no-double-br](../rules/no-double-br/README.md)                        | Prohibits consecutive double `<br>`.                                                            |
| [expa/no-px-size](../rules/no-px-size/README.md)                            | The `width` and `height` attributes contain only numbers, no units of measurement                            |
| [expa/req-charset-utf](../rules/req-charset-utf/README.md)                  | Requires `UTF-8` for `<meta charset="">`.                                                           |
| [expa/req-head-styles](../rules/req-head-styles/README.md)                  | Prohibits styles from being connected outside `<head>`.                                                        |
| [expa/req-mailto](../rules/req-mailto/README.md)                            | Requires `mailto:` for links with email text                                                    |
| [expa/req-meta-viewport](../rules/req-meta-viewport/README.md)              | Checks for the presence of `<meta name="viewport" content="width=device-width,initial-scale=1">` in `<head>`. |
| [expa/req-preload-font](../rules/req-preload-font/README.md)               | Checks for the presence of font preloading in `<head>`                                                  |
| [expa/req-single-styles](../rules/req-single-styles/README.md)              | Allow no more than one `link rel="stylesheet"` in `<head>`.                                       |
| [expa/req-source-width-height](../rules/req-source-width-height/README.md)              | ТRequires `width` and `height` of `<source>` inside `<picture>`.                                        |
| [expa/req-stylesheet-link](../rules/req-stylesheet-link/README.md)          | `Checks for the presence of `<link rel="stylesheet" href="">` with a non-empty `href                            |
| [expa/req-tags-presence](../rules/req-tags-presence/README.md)           | Тrequires the specified tags on the page                                                                 |
| [expa/req-webp-in-picture](../rules/req-webp-in-picture/README.md)           | Requires `webp` in `<picture>`.                                                                     |
| [expa/section-has-heading](../rules/section-has-heading/README.md)          | Requires any level header to be added to `<section>`                                         |
| [expa/space-between-comments](../rules/space-between-comments/README.md)    | Will check for spaces at the comment `<!-- This is a comment -->``                                      |
| [expa/tag-forbid-attr](../rules/tag-forbid-attr/README.md)                  | The specified attributes must not be present in the specified tag                                         |
| [expa/tag-name-lowercase](../rules/tag-name-lowercase/README.md)            | Tag names must be lowercase                                                                  |
| [expa/tag-req-attr](../rules/tag-req-attr/README.md)                        | The specified attributes must be present in the specified tag                                          |
| [expa/tag-self-close](../rules/tag-self-close/README.md)                    | Оdino elements should not be closed, `<br>` instead of `<br/>`.                                 |
