import { getAverageRating } from "@/contexts/Callbacks";
import { PropertyProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { LuBookOpen, LuMapPin, LuStar } from "react-icons/lu";

const InstituteBanner = ({
  institute,
  getCategoryById,
}: {
  institute: PropertyProps;
  getCategoryById: (id: string) => string | undefined;
}) => {
  const backgroundImageUrl = institute?.featured_image?.[0]
    ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${institute.featured_image[0]}`
    : "/images/property_banner.webp";

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top-right button */}
      <div className="absolute top-4 right-4 z-20">
        <Link
          href={`/compare/${institute?.property_slug}`}
          className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-lg transition"
        >
          Compare
        </Link>
      </div>

      {/* Background Image with overlay */}

      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImageUrl}
            alt="Institute background"
            fill
            className="object-cover blur-xs"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid gap-8 items-start">
          <div className="lg:col-span-2 text-white">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-4 shadow-2xl overflow-hidden backdrop-blur-sm">
                  <Image
                    src={
                      institute?.property_logo?.[0]
                        ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${institute.property_logo[0]}`
                        : "/images/property_banner.webp"
                    }
                    alt={`${institute?.property_name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                  {institute?.property_name}
                </h1>
                <p className="text-xl text-white/90 mb-4 font-medium">
                  {getCategoryById(institute?.category)}
                </p>

                {(institute?.city || institute.state) && (
                  <div className="flex items-center gap-2 text-white/80 mb-4">
                    <LuMapPin className="w-5 h-5" />
                    <span className="text-lg">
                      {institute?.city} {institute?.state}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 ms-15 gap-2">
              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <LuStar className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {getAverageRating(institute?.reviews)} / 5
                </div>
                <div className="text-white/70 text-sm">Rating</div>
              </div>

              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <LuBookOpen className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {institute?.courses?.length}
                </div>
                <div className="text-white/70 text-sm">Courses</div>
              </div>

              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <LuStar className="w-6 h-6 text-green-300" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {institute?.reviews?.length || 0}
                </div>
                <div className="text-white/70 text-sm">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteBanner;
