
// sanitize.js
import DOMPurify from 'dompurify';

export const sanitizeInputs = (fieldIds) => {
  const sanitizedData = {};

  fieldIds.forEach(id => {
    const value = document.getElementById(id).value;
    sanitizedData[id] = DOMPurify.sanitize(value);
  });

  return sanitizedData;
};

export const sanitizeDescription = (description) => {
  return DOMPurify.sanitize(description, {
    ALLOWED_TAGS: [
      'p', 'strong', 'b', 'a', 'em', 'br',
      'ul', 'ol', 'li', 'style',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'span', 'small'
    ],
    ALLOWED_ATTR: {
      '*': ['style', 'class'],
      'a': ['href', 'name', 'target']
    }
  });
};
