'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node } = require('@linthtml/dom-utils');

module.exports = {
  name: 'expa/form-action-attribute',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    // eslint-disable-next-line camelcase
    if (is_tag_node(node) && node.name === 'form') {
      const actionAttribute = node.attributes.find(
        (attr) => attr.name.chars === 'action'
      );

      if (!actionAttribute) {
        report({
          position: node.loc,
          message: 'The <form> element is missing the "action" attribute.',
        });
      } else if (actionAttribute.value === null) {
        report({
          position: actionAttribute.loc,
          message: 'The value of the "action" attribute for the <form> element is empty.',
        });
      }
    }
  },
};
