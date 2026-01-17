import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Card = ({ children, className = '', title }: CardProps) => {
  return (
    <div className={`py-1 ${className}`}>
      {title && (
        <div className="bg-black py-2 mb-2">
          <h3 className="font-sans text-white text-xs">{title}</h3>
        </div>
      )}
      <div className="bg-white px-4 py-3 rounded-md">
        {children}
      </div>
    </div>
  );
};
