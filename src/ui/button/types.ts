export interface ButtonProps {
  type?: "reset" | "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "filled-green" | "outlined-white";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}
