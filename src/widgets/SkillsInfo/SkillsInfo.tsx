const CORE_SKILLS = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 4,
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    level: 3,
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    level: 4,
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 4,
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 4,
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    level: 3,
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    level: 4,
  },
];

const CORE_SKILL_MAX = 5;

const OTHER_SKILLS = [
  { name: 'DDD', variant: 'primary' },
  { name: 'Clean Architecture', variant: 'primary' },
  { name: 'FSD', variant: 'primary' },
  { name: 'CQRS', variant: 'primary' },
  { name: 'Microfrontends', variant: 'primary' },
  { name: 'TailwindCSS', variant: 'light' },
  { name: 'ReactJS', variant: 'light' },
  { name: 'Turborepo', variant: 'light' },
  { name: 'Vite', variant: 'light' },
  { name: 'Webpack', variant: 'light' },
  { name: 'Motion', variant: 'light' },
  { name: 'Git', variant: 'outline' },
  { name: 'Linux', variant: 'outline' },
  { name: 'Nginx', variant: 'outline' },
];

const getTagClasses = (variant: string) => {
  if (variant === 'primary') {
    return 'bg-primary text-white border border-primary';
  }
  if (variant === 'light') {
    return 'bg-white text-black border border-white';
  }
  return 'bg-transparent text-white border border-white';
};

export const SkillsInfo = () => {
  return (
    <div className="px-10 py-10 text-white">
      <div className="mb-8">
        <h2 className="font-sans text-lg mb-6">Core</h2>
        <div className="flex flex-wrap gap-8">
          {CORE_SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex gap-1">
                {Array.from({ length: CORE_SKILL_MAX }).map((_, index) => {
                  const isActive = index < skill.level;
                  return (
                    <span
                      key={`${skill.name}-${index}`}
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-primary' : 'border border-primary'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sans text-lg mb-6">Other</h2>
        <div className="flex flex-wrap gap-3">
          {OTHER_SKILLS.map((skill) => (
            <span
              key={skill.name}
              className={`px-4 py-2 text-xs font-sans ${getTagClasses(skill.variant)}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
