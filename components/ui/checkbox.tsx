export const Checkbox = ({ id, checked, onCheckedChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={() => onCheckedChange(!checked)}
  />
);
