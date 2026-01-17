import { JobCard } from '@/shared/ui/JobCard';

export const ExperienceInfo = () => {
  const jobs = [
    {
      title: 'CEO & Founder',
      company: 'flx.social',
      period: 'Jun 2025 - Present',
      link: 'https://flx.social',
      roles: ['UI/UX', 'Fullstack Web Dev', 'Product & Growth'],
      technologies: [
        {
          name: 'PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          name: 'TypeScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        },
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
      ],
    },
    {
      title: 'CEO & Founder',
      company: 'SeasPay',
      period: 'Aug 2024 - Jan 2025',
      roles: ['UI/UX', 'Fullstack Web Dev', 'Product & Growth'],
      technologies: [
        {
          name: 'PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
      ],
    },
    {
      title: 'Event Organizer',
      company: '009club',
      period: 'Jan 2025 - Jun 2025',
      link: 'https://instagram.com/009club.ww',
      roles: ['Event Organizer', 'Marketing', "Team Management", "Organization", "Meta Ads", "Coordination"],
    },
  ];

  return (
    <div className="px-10 py-10">
      <div className="flex gap-1 text-md flex-col mb-8">
        <span className="font-sans text-white">2+ years</span>
        <span className="font-sans text-primary">of making software</span>
      </div>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};
