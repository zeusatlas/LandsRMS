let toastInstance = null;

const Toast = {
  setRef(ref) {
    toastInstance = ref;
  },
  show({ type = 'info', title = '', message = '', position = 'top', duration = 4000 }) {
    return new Promise((resolve) => {
      if (toastInstance) {
        toastInstance.show({ type, title, message, position, duration, onClose: resolve });
      } else {
        resolve(); 
      }
    });
  },
};

export default Toast;
