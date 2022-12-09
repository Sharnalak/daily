interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  label = "Boop",
  size = "small",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
};
