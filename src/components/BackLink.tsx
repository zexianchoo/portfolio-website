import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

interface BackLinkProps {
  to: string;
  label: string;
}

const BackLink = ({ to, label }: BackLinkProps) => {
  return (
    <Link 
      to={to} 
      className="group mb-8 inline-flex items-center font-semibold text-accent transition-colors hover:text-accent/80"
    >
      <ArrowLeft 
        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2" 
      />
      {label}
    </Link>
  );
};

export default BackLink;