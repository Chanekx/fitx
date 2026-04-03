import { TextField } from "@mui/material";
import { Control } from "react-hook-form";

interface InputFieldProps {
  control: Control<any>;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const InputField = ({
  control,
  name,
  type = "text",
  placeholder,
  label,
  required,
}: InputFieldProps) => {
  return (
    <TextField
      {...control.register(name)}
      required={required}
      name={name}
      type={type}
      placeholder={placeholder}
      label={label}
      variant="outlined"
      sx={{ width: "100%", "& .MuiOutlinedInput-root": { bgcolor: "background.paper" } }}
    />
  );
};
export default InputField;
