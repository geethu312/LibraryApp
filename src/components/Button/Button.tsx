import "./Button.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  name: string;
  id?: number;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, onClick, name } = props;

  return (
    <div>
      <button className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
