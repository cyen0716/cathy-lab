"use client";

export default function PortfolioPage() {
  return (
    <article className="max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">Portfolio</h1>
      
      <section className="space-y-10">

        {/* Remote Access VPN Tutorial */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Remote Access VPN Tutorial
          </h2>
          
        </div>

        {/* Body Content */}
        <div className="space-y-8 text-base leading-[1.85] text-slate-700">
          <p className="text-base text-slate-700">
            Instead of the original configuration-focused documentation, 
            I created a remote VPN tutorial for the USG FLEX H Series Firewall 
            that provides a complete deployment workflow, guiding users through firewall configuration, 
            remote-user setup, and connectivity testing.
          </p>

          <ul className="list-disc list-outside ml-5 space-y-4">
            <li>
              <p>
                <strong className="text-slate-900 font-semibold">Hand-on Testing:</strong> I performed 
                end-to-end SSL VPN and IKEv2 deployment testing using multiple VPN clients 
                to uncover real-world configuration issues and troubleshooting pain points, 
                ensuring the tutorial addressed common user challenges.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-slate-900 font-semibold">Tutorial Structure Design:</strong> A picture 
                worth a thousand words. I designed the tutorial structure around users' decision-making process 
                by placing a topology diagram and comparison table at the beginning of the tutorial, allowing 
                users to quickly evaluate VPN options and identify the most suitable solution 
                before starting configuration.
              </p>
            </li>
          </ul>
        </div>

        {/* PDF Section */}
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
          <iframe
            src="/vpn-guide.pdf"
            className="w-full h-[600px]"
            title="VPN Tutorial PDF"
          />
        </div>
      </section>
    </article>
  );
}