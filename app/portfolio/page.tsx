import Link from "next/link";

const portfolioItems = [
  {
    title: "Serverless AI News Engine",
    description: "Full system built on AWS with AI integration.",
    href: "/work/serverless-ai-news-engine",
  },
  {
    title: "AI-powered Websites (Divlytics)",
    description: "Client projects focused on automation and cloud hosting.",
    href: "/work/divlytics",
  },
  {
    title: "Automation Workflows",
    description: "API integrations and event-driven automation systems.",
    href: "/work/automation-workflows",
  },
  {
    title: "Experimental AI & Cloud Projects",
    description: "Small prototypes and learning builds.",
    href: "/work/experiments",
  },
];

export default function PortfolioPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-[64px] leading-none font-medium text-black mb-12 text-center">
        Portfolio
      </h1>

      <div className="border-t border-gray-200">
        {portfolioItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block border-b border-gray-200 py-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-[24px] leading-[30px] font-medium text-black mb-4">
                  {item.title}
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </h2>

                <p className="text-[17px] leading-[26px] text-[#171717] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}