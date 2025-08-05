import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-50 from-gray-900 to-gray-800 text-purple-100 px-6 py-16 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="relative h-10 w-52 mb-4">
              <Image
                src="/images/logo.png"
                alt="Yogprerna Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 bg-none">
              At Yogprerna, we make group workouts exciting, healthy eating
              delicious, and mental wellness effortless with yoga & meditation.
            </p>
            <h3 className="text-lg text-gray-800 font-semibold mb-3">
              LOCATION
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Rishikesh, India", "Kerala, India", "Russia", "UAE"].map(
                (loc) => (
                  <li key={loc}>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-all duration-200"
                    >
                      {loc}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              YOGA BY CATEGORY
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 mb-6">
              {[
                "Online Yoga",
                "Yoga Colleges",
                "Universities",
                "Yoga Studio",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              YOGA BY EXPERTISE
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Academic Degree", "Professional", "Specialized"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              YYT PROGRAMS
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 mb-6">
              {["100 YYT", "200 YYT", "300 YYT", "500 YYT", "700 YYT"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              RETREAT PROGRAMS
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                "4 day yoga retreat",
                "7 day yoga retreat",
                "10 day yoga retreat",
                "14 day yoga retreat",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-all duration-200"
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
                { title: "Yoga Institutes", href: "yoga-institutes" },
                { title: "Blog", href: "blog" },
                { title: "Compare Institutes", href: "compare/select" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item?.href}`}
                    className="hover:text-purple-400 transition-all duration-200"
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
                "Online Tutions Foundation Course",
                "Online Tutions Class 6 to 10",
                "Truemaths Tuition Centre",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-purple-300 mt-12 pt-6 text-sm text-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-3 md:mb-0 text-center">
            &copy; 2025{" "}
            <a
              href={process.env.NEXT_PUBLIC_BASE_URL}
              className="text-gray-500 hover:text-purple-800 font-semibold"
            >
              Yogprerna
            </a>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Terms And Conditons", href: "terms-and-conditions" },
              { label: "Privacy Policy", href: "privacy-policy" },
              { label: "Disclaimer", href: "disclaimer" },
              { label: "Cancellation Policy", href: "cancellation-policy" },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/${item.href}`}
                className="hover:text-purple-800 transition-all"
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
