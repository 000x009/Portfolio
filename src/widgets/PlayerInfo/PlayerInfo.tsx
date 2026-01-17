import { Card, IdCard } from '@/shared/ui';

const AboutSection = () => (
  <Card title="About">
    <div className="space-y-4">
      <h2 className="font-sans text-primary text-sm mb-3">@shstr</h2>
      <p className="font-mono text-xs leading-relaxed text-gray-800">
        A 16-year-old full-stack developer and solo-founder. By the age of 16, I had gained diverse hands-on experience in the development of a wide range of web applications, including technical writing, UI/UX design, backend & frontend development, and DevOps. I also stick to Clean Architecture, SOLID, and DDD patterns during development.  
      </p>
    </div>
  </Card>
);

const LeakedIdSection = () => (
  <Card title="Leaked ID">
    <IdCard
      surname="SHESTEROV"
      name="MIKHAIL"
      sex="MALE"
      nationality="RUSSIAN"
      dateOfBirth="10.09.2009"
      dateOfExpire="10.09.3026"
    />
  </Card>
);

export const PlayerInfo = () => {
  return (
    <div className="space-y-6 px-10 py-4 max-w-lg">
      <AboutSection />
      <LeakedIdSection />
    </div>
  );
};
