import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Privacy Statement
          </h1>
          <p className="text-brand-dark/50 font-medium tracking-wide uppercase text-xs">
            Effective date: 12th December 2025
          </p>
        </header>

        <div className="prose prose-lg prose-emerald max-w-none text-brand-dark/80 leading-relaxed space-y-12">
          <section>
            <p className="text-xl">
              Green Planet Power Inc. and its affiliated companies (“Green Planet Power”, “we”, “us”, or “our”) respect your privacy, and recognize the need to appropriately protect and manage Personal Data.
            </p>
            <p className="mt-6">
              This Privacy Statement (“Statement”) explains how we collect, process, use, share, and safeguard Personal Data, including:
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-emerald-600 mt-4">
              <li>through our website, or through advertisements, or links, on other websites, platforms or social media;</li>
              <li>to further existing or prospective business relationships, including to enable access to our premises, such as office locations or International Business Exchange Centers (“IBX Data Centers”);</li>
              <li>when you access marketing or promotional material, or attend conferences, meetings, or events; or</li>
              <li>in relation to employment, potential employment, or other engagement with us;</li>
            </ul>
            <p className="mt-4">and your choices regarding such Personal Data.</p>
          </section>

          <section className="bg-brand-green/10 p-8 rounded-3xl border-l-4 border-emerald-500 shadow-sm">
            <p className="italic text-brand-dark/90 italic">
              This Statement does <strong>not</strong> deal with data that our customers bear responsibility for or control the processing of (please see our Shared Responsibility Model for further details), using services that we provide, including on or through customer owned or customer controlled equipment co-located at our IBX Data Centers. We do not access or process this information in any manner. This Statement also does not apply to any products, services, websites, or content that are offered by third parties which have their own privacy policies detailing how such third parties collect, use, disclose or otherwise process your Personal Data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">What is Personal Data?</h2>
            <p>
              Personal Data is information that enables us to identify any natural person (including you) or relates to an identified or identifiable natural person (also known as a “Data Subject”). This may include a Data Subject’s name, identification number, location, or an online identifier. In certain jurisdictions, data protection and privacy laws may also apply to certain information relating to legal persons (“Personal Data”).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">Personal Data We Collect</h2>
            <p className="mb-6">We may collect Personal Data from you, or about you, from a variety of sources. Some examples include:</p>
            
            <div className="overflow-hidden border border-brand-dark/10 rounded-3xl shadow-sm my-12 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-brand-dark text-white font-bold tracking-wider uppercase text-[10px]">
                  <tr>
                    <th className="px-6 py-5">Who</th>
                    <th className="px-6 py-5">Where</th>
                    <th className="px-6 py-5">What</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-dark/5">
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Visitors</td>
                    <td className="px-6 py-5 align-top">At our office locations</td>
                    <td className="px-6 py-5 align-top">Full name, business association, email address, identity information and CCTV footage</td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Visitors</td>
                    <td className="px-6 py-5 align-top">At our IBX Data Centers</td>
                    <td className="px-6 py-5 align-top">First and last name, business association, job title, phone, email, photo, and <strong>Biometrics</strong> (e.g. hand scan)</td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Visitors</td>
                    <td className="px-6 py-5 align-top">Events / Conferences</td>
                    <td className="px-6 py-5 align-top">Full name, business association and email address</td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Website Users</td>
                    <td className="px-6 py-5 align-top">Website & Online Ads</td>
                    <td className="px-6 py-5 align-top">Unique device ID, regional settings, network provider, IP address and location via cookies</td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Customers</td>
                    <td className="px-6 py-5 align-top">Business interactions</td>
                    <td className="px-6 py-5 align-top">Full name, association, email, phone, title, payment info, and portal usage data</td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Employees</td>
                    <td className="px-6 py-5 align-top">Onboarding & Ops</td>
                    <td className="px-6 py-5 align-top">Name, address, employment history, qualifications, health status, payroll, performance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In addition to the types of Personal Data outlined above, you may also voluntarily provide other types of Personal Data to us (for instance, feedback). This is completely optional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">How We Use Your Personal Data</h2>
            <p>We may use your Personal Data for one or more of the following purposes:</p>
            <ul className="list-none space-y-6 mt-8">
              {[
                { title: "Service Provision", desc: "For negotiation, execution, management of contracts, and providing access to premises or portals." },
                { title: "Product Enhancement", desc: "To develop or provide better products or services through analysis and feedback." },
                { title: "Engagement", desc: "To enable you to contact us, and for us to respond to you or carry out satisfaction surveys." },
                { title: "Business Support", desc: "For marketing activities, human resource management, and providing information to investors." },
                { title: "Integrity & Compliance", desc: "For fraud detection, internal auditing, and enabling compliance with regulatory and legal obligations." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">{i+1}</span>
                  <div>
                    <h4 className="font-bold text-brand-dark">{item.title}</h4>
                    <p className="text-brand-dark/70 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">Sharing and Disclosure</h2>
            <p>
              We may share your Personal Data with affiliated entities for centralized processing or solutions. We may disclose your data to third parties upon your explicit request, or to our contracted service providers (e.g., marketing service providers) who are authorized to use it only as necessary to provide services to us.
            </p>
            <p className="mt-6">
              Finally, we may disclose your Personal Data if required by law, to enforce our agreements, or to protect the safety of our employees, customers, or the public. This includes sharing with law enforcement or in connection with business transfers like mergers or acquisitions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">Cross-Border Transfer</h2>
            <p>
              Given our global reach, we may transfer your Personal Data between our affiliated companies in the USA, AMER, EMEA, and Asia-Pacific regions, including locations where data privacy legislation may differ. We ensure that recipient locations are offered equivalent levels of protection through mechanisms like <strong>Binding Corporate Rules</strong> or <strong>Standard Contractual Clauses</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">Notice of Joint Controller</h2>
            <p>
              If you are an xScale customer or contractor, the details of the Green Planet Power legal entity and our partner that are jointly responsible for the processing of Personal Data will be set out in your contract. References to 'Green Planet Power' in this Statement should be read as if they were references to those joint controllers.
            </p>
          </section>

          <section className="bg-brand-dark text-white p-12 rounded-[3.5rem] mt-24 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 text-emerald-400 tracking-tight">Illinois Biometric Data Privacy Policy</h2>
              <div className="space-y-8 text-white/80 leading-relaxed">
                <p className="text-lg">
                  We take measures to ensure our proprietary and confidential information remains private, particularly regarding access to our secure IBX Data Centers.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div>
                    <h4 className="font-bold text-emerald-300 uppercase tracking-widest text-[10px] mb-4">Collection & Use</h4>
                    <p className="text-sm">
                      Our system utilizes finger/hand scans to authenticate Authorized Persons. The measures converted immediately to an encrypted mathematical template. No fingerprints or handprints are retained after the template is created.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-300 uppercase tracking-widest text-[10px] mb-4">Retention & Destruction</h4>
                    <p className="text-sm">
                      Templates are retained only until the profile is removed, access is removed, or one year after the last access. We permanently destroy templates upon expiration of these periods.
                    </p>
                  </div>
                </div>
                <p className="text-sm bg-white/5 p-6 rounded-2xl border border-white/10 mt-8">
                  We do not sell, lease, or trade biometric data. We safeguard these templates using a reasonable standard of care equally protective to how we store our most sensitive confidential data.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-24 border-t border-brand-dark/10">
            <div className="bg-brand-green/5 rounded-3xl p-10 text-center border border-brand-dark/5">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">How to Contact Us or Submit a Request</h3>
              <p className="text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                If you have any questions, comments, or grievances about this Statement or our privacy practices, please contact our dedicated global Privacy Office.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="mailto:info@greenplanetpower.co.in" className="inline-flex items-center justify-center px-8 py-3 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-dark/90 transition-all shadow-md">
                  Email us
                </a>
                <div className="flex flex-col text-sm justify-center">
                  <span className="font-bold text-brand-dark">Green Planet Power</span>
                  <span className="text-brand-dark/50 tracking-tight">info@greenplanetpower.co.in</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
