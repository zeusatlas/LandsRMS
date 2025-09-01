import DOMPurify from 'dompurify';

/**
 * Sanitize plain text inputs from form fields.
 * @param {string[]} fields - Array of input field IDs.
 * @returns {Object} - Sanitized values keyed by field name.
 */
export const sanitizeInputs = (fields) => {
  const sanitized = {};
  fields.forEach(field => {
    const value = document.getElementById(field)?.value || '';
    sanitized[field] = DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  });
  return sanitized;
};

/**
 * Sanitize rich HTML content (e.g., from Quill editor).
 * @param {string} html - Raw HTML string.
 * @returns {string} - Sanitized HTML string.
 */
export const sanitizeDescription = (html) => {
  return DOMPurify.sanitize(html, {
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
