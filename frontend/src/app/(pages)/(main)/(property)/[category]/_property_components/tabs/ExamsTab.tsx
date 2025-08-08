import { generateSlug } from "@/contexts/Callbacks";
import { ExamProps } from "@/types/types";
import Image from "next/image";

import Link from "next/link";

const ExamsTab = ({ exams }: { exams: ExamProps[] }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Exams</h2>
        <p className="text-gray-600">
          Comprehensive entrance exam preparation programs for all levels.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {exams?.map((exam, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xs overflow-hidden hover:shadow-sm transition-shadow"
          >
            <Link
              href={`/exam/${generateSlug(exam?.exam_name)}`}
              className="block"
            >
              <div className="relative w-full h-48">
                <Image
                  src={
                    exam?.featured_image?.[0]
                      ? `${process.env.NEXT_PUBLIC_URL}/exam/${exam?.featured_image?.[0]}`
                      : `/images/exam_banner.png`
                  }
                  alt={exam?.exam_name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <Link href={`/exam/${generateSlug(exam?.exam_name)}`}>
                <h3
                  className={`text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-all duration-300`}
                >
                  {exam?.exam_name}
                </h3>
              </Link>

              {/* <div className="flex items-center gap-2 text-gray-700 mb-2">
                <LuGraduationCap className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">
                  {getCategoryById(exam?.exam_type)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <LuClock className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">{exam?.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <LuTrendingUp className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">
                  {getCategoryById(exam?.exam_level)}
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamsTab;
