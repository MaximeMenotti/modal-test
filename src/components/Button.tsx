interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </button>
  );
}

export default Button;
