import React from "react";

const Terms = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-sm border border-slate-100 p-8 md:p-16 text-slate-700">
        
        {/* Title Section */}
        <div className="mb-10 border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-bold text-slate-900">Terms and Conditions</h1>
          <p className="text-sm text-slate-400 mt-2">Last updated: April 16, 2025</p>
        </div>

        <div className="space-y-8 leading-relaxed text-sm md:text-base">
          {/* Introduction */}
          <section>
            <p>
              These Terms and Conditions (“T&C”) set forth the legally binding framework between you (“User,” “You,” or “Your”) and Thrillophilia — referring collectively to Thrillophilia Travel Solutions Pvt Ltd, Thrillophilia INC, Thrillophilia FZCO, and 53 Take Off Private Limited —for:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Accessing/using Thrillophilia’s website(s), mobile applications, or other sales channels (collectively, “Platform”).</li>
              <li>Booking any experiences, activities, accommodations, flights, visa assistance, or full tour packages through Thrillophilia.</li>
            </ul>
            <p className="mt-4 font-semibold">
              By using the Platform, creating an account, or making any Booking, You acknowledge that you have read, understood, and agreed to these T&C. If You do not agree, request you to please discontinue use of the Platform immediately.
            </p>
          </section>

          {/* 1. Definitions */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Definitions</h2>
            <p className="mb-4 text-sm text-slate-500 italic">The following definitions apply throughout these T&C:</p>
            <ul className="space-y-4">
              <li><strong>“User,” “You,” “Your”:</strong> Any person or entity visiting, accessing, registering on, or making a Booking through the Platform.</li>
              <li><strong>“Booking”:</strong> Any confirmed purchase or reservation for a single activity/experience or a complete tour package (comprising hotels, flights, visas, transfers, etc.).</li>
              <li><strong>“Supplier” or “Third-Party Supplier":</strong> The entity actually providing the service, such as a hotel, airline, local activity operator, visa agency, or transport provider.</li>
              <li><strong>“Services”:</strong> All offerings booked through Thrillophilia, including but not limited to tours, hotels, flights, experiences, activities, visas, and associated logistics.</li>
              <li><strong>“Quotation”:</strong> A formal offer from Thrillophilia containing the service details (inclusions/exclusions), schedule, price, cancellation terms, and payment deadlines. Once the User pays in full, the Quotation and these T&C become the final contract, overriding any conflicting verbal, emails, whatsapp text, website statements or any other form of communication.</li>
              <li><strong>“Platform”:</strong> Thrillophilia’s websites, apps, partner pages, social media accounts, and any affiliated channels or methods used for promotion, booking, or customer support.</li>
              <li><strong>“User Content”:</strong> Any text, images, reviews, feedback, videos, or other materials posted by the User on or through the Platform.</li>
              <li><strong>“Force Majeure”:</strong> Events or circumstances beyond Thrillophilia’s control, including but not limited to natural disasters, pandemics, strikes, political unrest, etc., which prevent or delay the delivery of Services.</li>
            </ul>
          </section>

          {/* 2. Application & Scope */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Application & Scope: Part A and Part B</h2>
            <p className="mb-4">To address all booking types, these T&C are split into two parts:</p>
            <div className="space-y-4">
              <p><strong>Part A – Direct Experience/Activity Bookings:</strong> Covers scenarios where you book only a single experience or activity (e.g., a desert safari, a museum ticket, a guided city tour) via the Platform, with no additional add-ons like flights, hotels, or multiple services.</p>
              <p><strong>Part B – Complete Tour Packages:</strong> Covers scenarios where You book a multi-service package (e.g., flights, hotels, multiple experiences, visa facilitation, transfers) as a bundled itinerary. This includes group tours, private tours, or custom itineraries.</p>
              <p className="text-sm italic">Sections addressing general policies (e.g., definitions, user conduct, disclaimers, etc.) apply to both Part A and Part B, unless otherwise specified.</p>
            </div>
          </section>

          {/* 3. Legal Agreement */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Legal Agreement & Booking Contract</h2>
            <div className="space-y-4">
              <h3 className="font-bold">Legal Standing</h3>
              <p>By using Thrillophilia, you confirm you are at least 18 years old and have the authority to enter a binding contract. If you book on behalf of someone else (e.g., a minor, a friend, or a family member), you are responsible for ensuring they understand and comply with these T&C.</p>
              
              <h3 className="font-bold">Final Quotation is the Binding Contract</h3>
              <p>For Part B bookings (entire tours), the specific terms (payment schedule, inclusions, exclusions, cancellation policy) in the final Quotation — once partial/full payment made by you- become legally binding.</p>
              <p>Any verbal commitments or references to previous website content made during the discussion phase are not binding. Only the services explicitly listed in the final Quotation (QB) on which payment has been made by you will be considered as part of the final confirmed agreement.</p>
              
              <h3 className="font-bold text-emerald-700">Role of Thrillophilia</h3>
              <p>Thrillophilia generally acts as an aggregator or facilitator; actual Services are provided by independent Suppliers (hotels, airlines, local tour operators, etc.). Your contract for the underlying Service is directly with the Supplier, though these T&C also govern how you interact with Thrillophilia and use its Platform.</p>
            </div>
          </section>

          {/* Part A Section */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Part A: Direct Experience / Activity Bookings</h2>
            <div className="space-y-4">
              <p><strong>1. Booking Process:</strong> You select the activity, date, and number of participants. Price displayed is typically per person. After payment, you receive a Booking Confirmation voucher.</p>
              <p><strong>2. Supplier’s Right to Deny Service:</strong> If the Supplier has age/health restrictions, you must comply. No refunds apply if the Supplier denies entry due to ineligibility or misconduct.</p>
              <p><strong>3. Cancellation & Refunds:</strong> Supplier Terms primarily govern cancellations. Requests must be made via the Platform. If the Supplier cancels due to weather, we offer a refund or alternative date.</p>
              <p><strong>4. User Responsibilities:</strong> Arrive on time; late arrivals cannot be accommodated. Check local laws and provide accurate participant details.</p>
              <p><strong>5. Assumption of Risk:</strong> Activities like skydiving or scuba diving carry inherent risks. Thrillophilia disclaims liability for injuries or losses.</p>
            </div>
          </div>

          {/* Part B Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">PART B: FULL TOUR PACKAGES</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold">B3. FLIGHTS POLICY</h3>
                <p>Airline tickets are subject to each airline’s terms. Airlines may reschedule or cancel flights without prior notice. Thrillophilia is not liable for incidental losses caused by airline changes.</p>
              </div>
              <div>
                <h3 className="font-bold">B4. HOTEL & ACCOMMODATION POLICY</h3>
                <p>Thrillophilia does not own or manage hotels. Hotel descriptions are provided by the property. Early check-in is at the hotel’s discretion and may incur extra charges.</p>
              </div>
              <div>
                <h3 className="font-bold">B5. VISA POLICY</h3>
                <p>Thrillophilia facilitates applications, but final issuance is solely at the embassy’s discretion. Visa fees are non-refundable even if the visa is refused.</p>
              </div>
              <div>
                <h3 className="font-bold">B7. CANCELLATIONS & MODIFICATIONS</h3>
                <p>Modifying dates or participant counts after booking is subject to availability and may incur a modification fee (10% of package cost or INR 20,000, whichever is lower).</p>
              </div>
            </div>
          </section>

          {/* General Provisions */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">General Provisions</h2>
            <p><strong>Governing Law:</strong> These T&C are governed by Rajasthan Jurisdiction. Courts in Jaipur, Rajasthan have exclusive jurisdiction.</p>
            <p className="mt-4 text-xs text-slate-400 italic">
              All logos, trademarks, and software on the Platform are property of Thrillophilia. Reproduction without permission is prohibited.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;