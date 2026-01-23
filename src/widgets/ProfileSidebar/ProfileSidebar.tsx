import { Me3D } from "./me-3d";

export const ProfileSidebar = () => {
  return (
    <div className="relative w-full min-h-[520px] bg-black md:border-l-1 md:border-r-1 border-separator flex flex-col justify-between md:h-full">

      {/* Header Badge */}
      <div className="pt-6 pb-5 flex hidden md:flex justify-center border-b-1 border-separator order-2 md:order-1 md:pt-8 md:pb-7">
        <div className="bg-primary px-4 py-2">
          <span className="font-sans text-white text-sm">@shstr</span>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center justify-center relative flex-1 order-1 md:order-2">
        <span className="hidden md:block z-50 absolute -top-4 -left-2 text-primary text-5xl font-bold">*</span>
        <span className="hidden md:block z-50 absolute -bottom-5 -right-2 text-primary text-5xl font-bold">*</span>
        <span className="hidden md:block z-50 absolute -top-4 -right-2 text-primary text-5xl font-bold">*</span>
        <span className="hidden md:block z-50 absolute -bottom-5 -left-2 text-primary text-5xl font-bold">*</span>

        <div className="flex-1 w-full flex items-center justify-center px-6 md:px-12">
            <Me3D />
        </div>


        {/* Age Badge */}
        <div className="w-fit mb-6 md:mb-10">
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
      <div className="py-4 flex justify-center order-3 md:order-3 border-separator md:py-5 ">
        <h1 className="font-sans text-3xl md:text-5xl text-primary tracking-wide">SWE!</h1>
      </div>
    </div>
  );
};
