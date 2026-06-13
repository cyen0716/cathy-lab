import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <SiteNav />

        <article className="max-w-7xl mx-auto md:ml-0">
          {/* Header */}
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Portfolio</h1>

          {/* Intro */}
          <p className="text-base text-slate-700 mb-16 leading-relaxed">
            Selected technical documentation from my work experience.
          </p>
          <section className="space-y-12">


            {/* Remote Access VPN Tutorial */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Remote Access VPN Tutorial
              </h2>
              <div className="flex items-center gap-2 text-base text-slate-700 font-medium">
                <span>Zyxel Networks</span>
                <span>•</span>
                <span>2025</span>
              </div>
            </div>

            {/* Body Content */}
            <div className="space-y-8 text-base leading-[1.85] text-slate-700">
  
              <p className="text-base text-slate-700">
              Instead of the original configuration-focused documentation, 
              I created a remote VPN tutorial for the USG FLEX H Series Firewall 
              that provides a complete deployment workflow, guiding users through firewall configuration, 
              remote-user setup, and connectivity testing. </p>

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
            <div>
              <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <iframe
                  src="/vpn-guide.pdf"
                  className="w-full h-[600px]"
                  title="VPN Tutorial PDF"
                />
              </div>
            </div>



{/* Switch Rack Mounting */}
            <div className="mb-8 mt-20">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                CX4800-56F Hardware Installation Guide
              </h2>
              <div className="flex items-center gap-2 text-base text-slate-700 font-medium">
                <span>Zyxel Networks</span>
                <span>•</span>
                <span>2024</span>
              </div>
            </div>

            {/* Body Content */}
            <div className="space-y-8 text-base leading-[1.85] text-slate-700">
  
              <p className="text-base text-slate-700">
              As part of the launch of the new CX4800-56F 100G aggregation switch,
              I authored the product overview, rack-mount installation, and fan module replacement procedures.       
               </p>

    <ul className="list-disc list-outside ml-5 space-y-4">
      <li>
        <p>
          <strong className="text-slate-900 font-semibold">Hand-on Hardware Experience:</strong> After learning
           the installation process from AE, I practiced the rail-kit assembly 
          myself to better understand the procedure before documenting it.
        </p>
      </li>

      <li>
        <p>
          <strong className="text-slate-900 font-semibold">Deciding What to Illustrate:</strong> Identified 
          installation actions that could not be communicated clearly through text alone 
          and defined how they should be represented visually, 
          then worked with an industrial designer to translate those requirements into illustrations.
        </p>
      </li>
    </ul>
    </div>

            {/* PDF Section */}
            <div>
              <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <iframe
                  src="/switch-rack-mounting.pdf"
                  className="w-full h-[600px]"
                  title="CX4800-56F Rack Mounting PDF"
                />
              </div>
            </div>


          </section>
        </article>
      </div>
    </main>
  );
}