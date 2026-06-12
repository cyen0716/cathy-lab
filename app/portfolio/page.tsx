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
          <p className="text-lg text-slate-700 mb-16 leading-relaxed">
            Selected technical documentation from my work experience.
          </p>

          {/* Portfolio Item */}
          <section className="space-y-12">
            
            {/* Title & Metadata */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Remote Access VPN Tutorial
              </h2>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <span>Zyxel Networks</span>
                <span>•</span>
                <span>2025</span>
              </div>
            </div>

            {/* Body Content */}
            <div className="space-y-8 text-base leading-[1.85] text-slate-700">
              <p>
                <strong className="text-slate-900 font-semibold">Hands-on testing:</strong> I set up SSL VPN and IKEv2 connections using OpenVPN Connect,
                SecuExtender, and IPSec VPN Client to identify troubleshooting pain points before
                documenting the workflow.
              </p>

              <p>
                <strong className="text-slate-900 font-semibold">A picture is worth a thousand words:</strong> I placed topology diagrams and comparison
                tables at the beginning of the tutorial so users could quickly determine which
                VPN solution best fit their needs.
              </p>

              <p>
                <strong className="text-slate-900 font-semibold">Beyond firewall configuration:</strong> The original guide focused on firewall settings
                only. I redesigned the tutorial structure and expanded it to include remote-user
                setup, making the deployment process easier to follow from start to finish.
              </p>
            </div>

            {/* PDF Section */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">
                Documentation Preview
              </h3>
              <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <iframe
                  src="/vpn-guide.pdf"
                  className="w-full h-[600px]"
                  title="VPN Tutorial PDF"
                />
              </div>
            </div>

          </section>
        </article>
      </div>
    </main>
  );
}