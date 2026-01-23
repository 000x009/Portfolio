const CONTACTS = [
  { label: 'instagram', href: 'https://instagram.com/222blank' },
  { label: 'github', href: 'https://github.com/000x009' },
  { label: 'telegram', href: 'https://t.me/sinn00s' },
];

export const ContactInfo = () => {
  return (
    <div className="px-6 py-8 text-white md:px-10 md:py-10">
      <div className="mb-10 md:mb-14">
        <h2 className="font-sans text-base md:text-lg mb-4 md:mb-6">Contact</h2>
        <div className="flex gap-4 md:gap-6 flex-wrap">
          {CONTACTS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary font-sans text-[10px] md:text-xs px-4 md:px-6 py-2 font-bold tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mb-12 md:mb-20">
        <h2 className="font-sans text-base md:text-lg mb-4 md:mb-6">CV</h2>
        <a
          href="/mikhail_shesterov.pdf"
          download
          className="inline-flex bg-primary/20 text-primary font-sans text-[10px] md:text-xs px-4 md:px-6 py-2 font-bold tracking-wide"
        >
          Download
        </a>
      </div>
    </div>
  );
};
