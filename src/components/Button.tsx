interface ButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: ButtonProps) {
  return (
    <div>
      <button type="button" className={`btn btn-${color}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
