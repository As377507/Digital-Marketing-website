import { useState, useCallback } from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((props) => {
    const id = genId();

    setToasts((state) => [
      ...state.slice(-TOAST_LIMIT + 1),
      { ...props, id, open: true, onOpenChange: () => {} },
    ]);

    return {
      id: id,
      dismiss: () => removeToast(id),
      update: (props) => updateToast(id, props),
    };
  }, []);

  const removeToast = useCallback((toastId) => {
    setToasts((state) => state.filter((toast) => toast.id !== toastId));
  }, []);

  const updateToast = useCallback((toastId, props) => {
    setToasts((state) =>
      state.map((toast) =>
        toast.id === toastId ? { ...toast, ...props } : toast
      )
    );
  }, []);

  const toast = useCallback(
    (props) => {
      return addToast(props);
    },
    [addToast]
  );

  return {
    toasts,
    toast,
    dismiss: removeToast,
  };
}

export { useToast };
