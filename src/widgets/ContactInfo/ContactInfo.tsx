const CONTACTS = [
  { label: 'instagram', href: 'https://instagram.com/222blank' },
  { label: 'github', href: 'https://github.com/000x009' },
  { label: 'telegram', href: 'https://t.me/sinn00s' },
];

export const ContactInfo = () => {
  return (
    <div className="px-10 py-10 text-white">
      <div className="mb-14">
        <h2 className="font-sans text-lg mb-6">Contact</h2>
        <div className="flex gap-6 flex-wrap">
          {CONTACTS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary font-sans text-xs px-6 py-2 font-bold tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="font-sans text-lg mb-6">CV</h2>
        <a
          href="/mikhail_shesterov.pdf"
          download
          className="inline-flex bg-primary/20 text-primary font-sans text-xs px-6 py-2 font-bold tracking-wide"
        >
          Download
        </a>
      </div>
    </div>
  );
};
