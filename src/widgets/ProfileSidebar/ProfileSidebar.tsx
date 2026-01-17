import { Me3D } from "./me-3d";

export const ProfileSidebar = () => {
  return (
    <div className="relative w-full h-full bg-black border-l-1 border-r-1 border-separator flex flex-col justify-between">

      {/* Header Badge */}
      <div className="pt-8 pb-7 flex justify-center border-b-1 border-separator">
        <div className="bg-primary px-4 py-2">
          <span className="font-sans text-white text-sm">@shstr</span>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex flex-col  items-center justify-center relative h-full">
        <span className="z-50 absolute -top-4 -left-2 text-primary text-5xl font-bold ">*</span>
        <span className="z-50 absolute -bottom-5 -right-2 text-primary text-5xl font-bold ">*</span>
        <span className="z-50 absolute -top-4 -right-2 text-primary text-5xl font-bold ">*</span>
        <span className="z-50 absolute -bottom-5 -left-2 text-primary text-5xl font-bold ">*</span>

        <div className="flex-1 flex items-center justify-center px-12">
            <Me3D />
        </div>


        {/* Age Badge */}
        <div className="w-fit mb-10">
            <div className="relative bg-primary/20 border-primary border-r-1 border-l-1 p-0.5">
            <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
            <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
            <div className="px-5 py-2.5">
                <span className="font-sans text-[#CB9FBF] text-xs">16 y.o.</span>
            </div>
            </div>
        </div>
      </div>


      {/* CEO Text */}
      <div className="py-5 flex justify-center">
        <h1 className="font-sans text-5xl text-primary tracking-wide">CEO!</h1>
      </div>
    </div>
  );
};
