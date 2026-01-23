import Link from 'next/link';

interface JobCardProps {
  title: string;
  company: string;
  period: string;
  link?: string;
  roles: string[];
  technologies?: {
    name: string;
    icon: string;
  }[];
}

export const JobCard = ({
  title,
  company,
  period,
  link,
  roles,
  technologies,
}: JobCardProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 border-2 max-w-full md:max-w-md text-black relative">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start mb-4">
        <div>
          <h3 className="font-sans text-black text-base sm:text-lg font-bold mb-1">{title}</h3>
          <p className="font-sans text-black text-xs sm:text-sm mb-1">{company}</p>
          <p className="font-sans text-black text-[10px] sm:text-xs">{period}</p>
        </div>
        
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        )}
      </div>

      {/* Roles */}
      <div className="flex flex-wrap gap-2 mb-4">
        {roles.map((role) => (
          <span
            key={role}
            className="bg-black text-white font-sans text-[10px] sm:text-xs px-3 py-1.5 font-bold"
          >
            {role}
          </span>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex gap-3 items-center">
        {technologies?.map((tech) => (
          <div
            key={tech.name}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
