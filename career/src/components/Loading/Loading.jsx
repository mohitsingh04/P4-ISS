import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white animate-pulse">
      <div className="relative h-24 w-24 animate-bounce">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 animate-ping border-blue-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#973aa4] animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-12 w-12 animate-pulse">
            <Image
              src="/Images/yogprerna-fav.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
