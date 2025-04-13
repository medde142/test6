export const Button = ({ children, ...props }) => (
  <button {...props} className="bg-black text-white py-2 px-4 rounded">
    {children}
  </button>
);
