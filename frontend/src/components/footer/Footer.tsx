import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-50 from-gray-900 to-gray-800 text-indigo-100 px-6 py-16 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <div className="relative h-10 w-52 mb-4">
              <Image
                src="/images/logo.png"
                alt="Indian Sainik School Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 bg-none">
              At Indian Sainik School, we help students prepare for Sainik
              School, RIMC, and Rashtriya Military School entrance exams with
              expert guidance, dedicated coaching, and holistic development.
            </p>
            <h3 className="text-lg text-gray-800 font-semibold mb-3">
              LOCATION
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                "Dehradun, India",
                "Lucknow, India",
                "Bangalore, India",
                "Delhi, India",
              ].map((loc) => (
                <li key={loc}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-all duration-200"
                  >
                    {loc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              PROGRAMS BY CATEGORY
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 mb-6">
              {[
                "Online Coaching",
                "Sainik Schools",
                "RIMC",
                "Military Colleges",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              TRAINING BY EXPERTISE
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                "Foundation Course",
                "Crash Course",
                "Interview Preparation",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              ENTRANCE EXAMS
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 mb-6">
              {[
                "Sainik School Exam",
                "RIMC Entrance",
                "Rashtriya Military School",
                "Navodaya Vidyalaya Exam",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              COACHING PROGRAMS
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                "Offline Classroom Training",
                "Online Live Classes",
                "Weekend Batches",
                "Hostel + Coaching Program",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 mb-6">
              {[
                { title: "Home", href: "/" },
                { title: "Sainik Schools", href: "sainik-schools" },
                { title: "RIMC", href: "rimc" },
                { title: "Training Centers", href: "training-centers" },
                { title: "Blog", href: "blog" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item?.href}`}
                    className="hover:text-indigo-400 transition-all duration-200"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              TUITIONS
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                "Home Tuitions",
                "Online Foundation Coaching",
                "Class 6 to 10 Tuitions",
                "Hostel + Tuition Program",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-indigo-300 mt-12 pt-6 text-sm text-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-3 md:mb-0 text-center">
            &copy; 2025{" "}
            <a
              href={process.env.NEXT_PUBLIC_BASE_URL}
              className="text-gray-500 hover:text-indigo-800 font-semibold"
            >
              Indian Sainik School
            </a>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Terms and Conditions", href: "terms-and-conditions" },
              { label: "Privacy Policy", href: "privacy-policy" },
              { label: "Disclaimer", href: "disclaimer" },
              { label: "Refund & Cancellation", href: "cancellation-policy" },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/${item.href}`}
                className="hover:text-indigo-800 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
