
export default function DivlyticsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-[24px] leading-[24px] font-medium text-black mb-6">
        AI-powered Websites (Divlytics — Sole Trader)
      </h1>

      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        Client-focused web projects built using AI-assisted workflows, practical automation, and cloud-based deployment.
      </p>

      <h2 className="text-[18px] font-medium mb-3">Overview</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        Through Divlytics (my sole trader consultancy), I worked on building and delivering websites for real-world use cases, focusing on simplicity, performance, and usability. These projects allowed me to combine AI-assisted development, cloud hosting, and practical problem-solving while working directly with business requirements.
      </p>

      <h2 className="text-[18px] font-medium mb-4">Selected Projects</h2>

      <section className="border-t border-gray-200 py-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Gangadharam Tiny House
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Built and deployed a business website with a focus on performance and reliability.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          The site uses a high-availability static hosting architecture on AWS (S3, CloudFront, and Route 53), providing fast content delivery and scalable infrastructure. The front-end was rapidly prototyped using no-code tools and refined using AI-assisted coding with GitHub Copilot.
        </p>

        <a
          href="https://www.tinyhousekerala.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block underline underline-offset-4 mb-4"
        >
          View project
        </a>

        <img
          src="/images/divlytics/tinyhouse.png"
          alt="Gangadharam Tiny House website screenshot"
          className="w-full border"
        />
      </section>

      <section className="border-t border-gray-200 py-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Zyamadhari
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Revamped an existing website and introduced additional functionality to support business operations.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Using AI-assisted tools, I implemented a lightweight workflow that allows users to browse products, add items to a cart, and send order details directly to the business owner via WhatsApp. This reduced friction in the ordering process without requiring a full e-commerce setup.
        </p>

        <img
          src="/images/divlytics/zyamadhari.png"
          alt="Zyamadhari website screenshot"
          className="w-full border"
        />
      </section>

      <section className="border-t border-b border-gray-200 py-8 mb-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Smile Yoga
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Helped a small business improve its online presence and better communicate its credibility.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          The website was structured to highlight the instructor’s certifications, experience, and testimonials, making it easier for potential clients to understand the value offered and build trust.
        </p>

        <a
          href="https://mridulasmileyoga.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block underline underline-offset-4 mb-4"
        >
          View project
        </a>

        <img
          src="/images/divlytics/yoga.png"
          alt="Smile Yoga website screenshot"
          className="w-full border"
        />
      </section>

      <h2 className="text-[18px] font-medium mb-3">What this work involved</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Delivering websites for real client requirements</li>
        <li>Using AI-assisted tools to accelerate development workflows</li>
        <li>Implementing practical automation for business use cases</li>
        <li>Deploying and hosting applications using AWS</li>
        <li>Translating business needs into simple, usable solutions</li>
        <li>Iterating based on real user feedback</li>
      </ul>

      <h2 className="text-[18px] font-medium mb-3">Why this matters</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        These projects were less about building individual websites and more about delivering practical solutions end-to-end. Working with real users helped shape decisions around usability, performance, and simplicity — reinforcing the importance of building systems that work reliably in real-world scenarios.
      </p>

      <h2 className="text-[18px] font-medium mb-3">Links</h2>
      <ul className="list-disc pl-6 text-[17px] leading-[26px] text-[#171717]">
        <li>
          <a
            href="https://www.tinyhousekerala.com/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Gangadharam Tiny House
          </a>
        </li>
        <li>
          <a
            href="https://zyamadhari.in/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Zyamadhari
          </a>
        </li>
        <li>
          <a
            href="https://mridulasmileyoga.com/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Smile Yoga
          </a>
        </li>
      </ul>
    </main>
  );
}