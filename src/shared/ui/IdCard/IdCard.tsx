interface IdCardProps {
  surname: string;
  name: string;
  sex: string;
  nationality: string;
  dateOfBirth: string;
  dateOfExpire: string;
}

interface IdCardField {
  label: string;
  value: string;
}

const IdCardFieldItem = ({ label, value }: IdCardField) => (
  <div>
    <span className="text-gray-500 font-bold">{label}: </span>
    <span className="text-black font-bold">{value}</span>
  </div>
);

export const IdCard = ({
  surname,
  name,
  sex,
  nationality,
  dateOfBirth,
  dateOfExpire,
}: IdCardProps) => {
  const fields: IdCardField[] = [
    { label: 'Surname', value: surname },
    { label: 'Name', value: name },
    { label: 'Sex', value: sex },
    { label: 'Nationality', value: nationality },
    { label: 'Date of birth', value: dateOfBirth },
    { label: 'Date of expire', value: dateOfExpire },
  ];

  return (
    <div className="bg-white relative">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-blue-700 px-3 py-2 flex items-center gap-2">
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-yellow-400" />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="font-mono text-black text-xs font-bold mb-1">REPUBLIC OF BULGARIA</p>
          <p className="font-mono text-black text-xs">IDENTITY CARD</p>
        </div>
      </div>
      <div className="relative">
        <div className="space-y-2 font-mono text-xs">
          {fields.map((field) => (
            <IdCardFieldItem key={field.label} label={field.label} value={field.value} />
          ))}
        </div>
      </div>
    </div>
  );
};
