import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'dark';
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
}

const variantClasses: Record<'primary' | 'secondary' | 'dark', string> = {
    primary: 'bg-primary text-[#181a1b] border-transparent',
    secondary: 'bg-white text-[#181a1b] border border-[#181a1b]',
    dark: 'bg-dark text-white border-transparent'
};

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    variant = 'primary',
    icon,
    children,
    className,
    ...props
}) => {
    return (
        <button
            type={type}
            className={`
        inline-flex items-center px-4 py-2 rounded-3xl gap-4 
        hover:opacity-90 transition-opacity 
        ${variantClasses[variant]} 
        ${className}
      `}
            {...props}
        >
            <span>{children}</span>
            {icon && <span className="flex items-center translate-y-px justify-center">{icon}</span>}
        </button>
    );
};

export default Button;
