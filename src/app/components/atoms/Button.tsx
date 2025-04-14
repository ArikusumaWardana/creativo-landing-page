interface ButtonProps {
  text: string;
  style: string;
  onClick?: () => void;
}

export default function Button({ text, style, onClick }: ButtonProps) {
  return (
    <button className={`rounded-lg transition-colors font-inter text-sm font-bold uppercase ${style}`} onClick={onClick}>
      {text}
    </button>
  );
}
