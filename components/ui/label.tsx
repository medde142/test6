export const Label = ({ htmlFor, children, ...props }) => (
  <label htmlFor={htmlFor} className="block font-medium" {...props}>
    {children}
  </label>
);
