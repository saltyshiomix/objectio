const {
  search,
  tokenize,
} = require('jmespath');

/**
 * Take a JSON document and transform it into another JSON document
 * through a JMESPath expression.  See: http://jmespath.org/
 * @param obj the document to transform
 * @param path a JMESPath expression (query)
 * @return the transformed document
 */
export const get = (obj: any, path: string): any => {
  return search(obj, path);
};

/**
 * Take a JSON document and transform it into another JSON document
 * through a JMESPath expression.  See: http://jmespath.org/
 * @param obj the document to transform
 * @param path a JMESPath expression (query)
 * @param value the document to set
 */
export const set = (obj: any, path: string, value: any): void => {
  let ref = obj;
  const tokens = tokenize(path);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'UnquotedIdentifier') {
      if (i === tokens.length - 1) {
        ref[token.value] = value;
      } else {
        ref = ref[token.value];
      }
    }

    if (token.type === 'Number') {
      if (i === tokens.length - 2) {
        ref[token.value] = value;
      } else {
        ref = ref[token.value]
      }
    }
  }
};
