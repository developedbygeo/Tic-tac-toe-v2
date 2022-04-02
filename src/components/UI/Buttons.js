export const SelectionButton = ({ children, className }) => (
  <button type="button" className={`text-center px-8 py-4 ${className}`}>
    {children}
  </button>
);

export const CtaButton = ({ children }) => <button type="button">{children}</button>;
