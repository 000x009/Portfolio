interface Language {
    id: number;
    language: string;
    level: string;
}

export const aboutMe: string =
    "In a nutshell, I'm Mikhail and I'm from Russia, but currently living in Bulgaria. I have been fond of programming since the age of 12 and these days I'm still building on my software skills.";

export const programmingLanguages: string[] = [
    "Python",
    "SQL",
    "JavaScript",
    "GoLang",
    "TypeScript",
];

export const programmingTools: string[] = [
    "DDD",
    "GOF",
    "CA",
    "CQRS",
    "Figma",
    "Docker",
    "PostgreSQL",
    "Git",
    "Linux",
];

export const spokenLanguages: Language[] = [
    {
        id: 0,
        language: "English",
        level: "B2",
    },
    {id: 1, language: "Russian", level: "Native"},
    {id: 2, language: "Bulgarian", level: "B1"},
    {id: 3, language: "Chinese", level: "A2"},
];
