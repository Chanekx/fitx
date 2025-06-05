import { SxProps, ButtonProps } from "@mui/material";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

export interface ReusableButtonProps {
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  sx?: SxProps;
  onClick?: () => void;
  children?: ReactNode;
  buttonUse?: "submit" | "cancel" | "delete";
  disabled?: boolean;
  type?:ButtonProps["type"]
}

const CustomButton = ({
  disabled,
  variant,
  color,
  sx,
  onClick,
  children,
  buttonUse,
  type,
}: ReusableButtonProps) => {
  let defaultVariant: ButtonProps["variant"] = "contained";
  let defaultColor: ButtonProps["color"] = "success";
  let customHoverBackgroundColor: string | undefined = undefined;

  switch (buttonUse) {
    case "submit":
      defaultVariant = "contained";
      defaultColor = "success";
      customHoverBackgroundColor = "#218838";
      break;
    case "cancel":
      defaultVariant = "contained";
      defaultColor = "warning";
      customHoverBackgroundColor = "#9b540d";
      break;
    case "delete":
      defaultVariant = "contained";
      defaultColor = "error";
      customHoverBackgroundColor = "#982732";
      break;
    default:
      break;
  }

  const finalVariant = variant || defaultVariant;
  const finalColor = color || defaultColor;

  return (
    <Button
      disabled={disabled}
      variant={finalVariant}
      color={finalColor}
      onClick={onClick}
      type={type}
      sx={{
        width: { xs: "auto", md: "200px" },
        "&:hover": {
          ...(customHoverBackgroundColor && {
            backgroundColor: customHoverBackgroundColor,
          }),
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
