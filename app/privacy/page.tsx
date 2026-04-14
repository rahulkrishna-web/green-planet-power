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
              Green Planet Power Renewable Energy Division of Abound land LLP and its affiliated companies (“Green Planet Power”, “we”, “us”, or “our”) respect your privacy, and recognize the need to appropriately protect and manage Personal Data.
            </p>
            <p className="mt-6">
              This Privacy Statement (“Statement”) explains how we collect, process, use, share, and safeguard Personal Data, including:
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-emerald-600 mt-4">
              <li>through our website, or through advertisements, or links, on other websites, platforms or social media;</li>
              <li>to further existing or prospective business relationships, including to enable access to our premises, such as office locations or International Business Exchange Centers (“THIRD PARTY Data Centers”);</li>
              <li>when you access marketing or promotional material, or attend conferences, meetings, or events; or</li>
              <li>in relation to employment, potential employment, or other engagement with us;</li>
            </ul>
            <p className="mt-4">and your choices regarding such Personal Data.</p>
          </section>

          <section className="bg-brand-green/10 p-8 rounded-3xl border-l-4 border-emerald-500 shadow-sm">
            <p className="italic text-brand-dark/90 text-sm md:text-base">
              This Statement does <strong>not</strong> deal with data that our customers bear responsibility for or control the processing of (please see our Shared Responsibility Model for further details), using services that we provide, including on or through customer owned or customer controlled equipment co-located at our THIRD PARTY Data Centers. We do not access or process this information in any manner. This Statement also does not apply to any products, services, websites, or content that are offered by third parties which have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">What is Personal Data?</h2>
            <p>
              Personal Data is information that enables us to identify any natural person (including you) or relates to an identified or identifiable natural person (also known as a “Data Subject”). This may include a Data Subject’s name, identification number, location, or an online identifier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">Personal Data We Collect</h2>
            <p className="mb-6">We may collect Personal Data from you, or about you, from a variety of sources. Some examples include:</p>
            
            <div className="overflow-x-auto border border-brand-dark/10 rounded-3xl shadow-sm my-12 bg-white">
              <table className="w-full text-left text-sm min-w-[600px]">
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
                    <td className="px-6 py-5 align-top">At our THIRD PARTY Data Centers</td>
                    <td className="px-6 py-5 align-top">
                      First and last name, business association, job title, telephone number, email, photo, and <strong>Biometrics</strong> (e.g. hand scan)
                    </td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Social Media</td>
                    <td className="px-6 py-5 align-top">Public Handles</td>
                    <td className="px-6 py-5 align-top">Account handle, activity, tagged content, and profile information</td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Website Users</td>
                    <td className="px-6 py-5 align-top">Website & Online Ads</td>
                    <td className="px-6 py-5 align-top">Unique device ID, regional settings, network provider, IP address and associated location information</td>
                  </tr>
                  <tr className="hover:bg-brand-green/5 transition-colors">
                    <td className="px-6 py-5 align-top font-bold text-brand-dark">Customers</td>
                    <td className="px-6 py-5 align-top">Portals & Business</td>
                    <td className="px-6 py-5 align-top">Full name, business association, email, telephone number, title, and payment details</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In addition to the types of Personal Data outlined above, you may also voluntarily provide other types of Personal Data to us. This is optional, and we will only use this Personal Data for the purpose for which it was collected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">How We Use Your Personal Data</h2>
            <p>We may use your Personal Data for one or more of the following purposes:</p>
            <ul className="list-none space-y-6 mt-8">
              {[
                { title: "Service Fulfillment", desc: "Negotiation, execution, and management of contracts, and providing access to THIRD PARTY Data Centers." },
                { title: "Product & Support", desc: "Developing or enhancing products, providing technical support, accounting, or billing services." },
                { title: "Engagement", desc: "To enable contact and carry out satisfaction surveys or provide information about products/services." },
                { title: "Business Strategy", desc: "Marketing activities, human resource management, and providing information to investors/stakeholders." },
                { title: "Legal & Safety", desc: "Internal auditing, fraud detection, and enabling compliance with regulatory and legal obligations." }
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
              We may share your Personal Data with affiliated entities for centralized processing or support. We disclose data to third parties upon your request, or to our contracted service providers who are authorized to use it only as necessary to provide us their services.
            </p>
            <p className="mt-6">
              Finally, we may disclose your Personal Data if required by law, to enforce our agreements, or to protect the safety of our employees, customers, or the public.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mt-16 mb-6">Cross-Border Transfer</h2>
            <p>
              Given our global reach, we may transfer your Personal Data between affiliated companies across AMER, EMEA, and Asia-Pacific regions. We ensure equivalent levels of protection through mechanisms like <strong>Binding Corporate Rules</strong> or <strong>Standard Contractual Clauses</strong>.
            </p>
          </section>

          <section className="bg-brand-dark text-white p-12 rounded-[3.5rem] mt-24 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 text-emerald-400 tracking-tight">Illinois Biometric Data Privacy Policy</h2>
              <div className="space-y-8 text-white/80 leading-relaxed">
                <p className="text-lg">
                  We maintain a security system to regulate access to our secure locations, such as our THIRD PARTY Data Centers in Illinois.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div>
                    <h4 className="font-bold text-emerald-300 uppercase tracking-widest text-[10px] mb-4">Verification Tech</h4>
                    <p className="text-sm">
                      Our system utilizes hand/finger scanning devices. Data is immediately converted to an encrypted mathematical file (template). No handprints or fingerprints are retained after the template is created.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-300 uppercase tracking-widest text-[10px] mb-4">Retention Rules</h4>
                    <p className="text-sm">
                      Templates are retained until access is removed, or one year following the last access. We permanently destroy templates upon expiration of these time periods.
                    </p>
                  </div>
                </div>
                <p className="text-sm bg-white/5 p-6 rounded-2xl border border-white/10 mt-8">
                  We do not sell, lease, or profit from your templates. We safeguard this data using reasonable standards of care equally protective to our other sensitive Personal Data.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-24 border-t border-brand-dark/10">
            <div className="bg-brand-green/5 rounded-3xl p-10 text-center border border-brand-dark/5">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">How to Contact Us or Submit a Request</h3>
              <p className="text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                For questions about this Statement or our privacy practices, please contact the Green Planet Power Data & Privacy Office.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="mailto:info@greenplanetpower.co.in" className="inline-flex items-center justify-center px-8 py-3 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-dark/90 transition-all shadow-md">
                  Email the Privacy Office
                </a>
                <div className="flex flex-col text-sm text-center md:text-left">
                  <span className="font-bold text-brand-dark">Green Planet Power</span>
                  <span className="text-brand-dark/50">info@greenplanetpower.co.in</span>
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
