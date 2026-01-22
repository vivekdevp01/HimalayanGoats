import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-sm border border-slate-100 p-8 md:p-16 text-slate-700">
        
        {/* Title Section */}
        <div className="mb-10 border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-400 mt-2">Last updated: January 20th, 2016</p>
        </div>

        <div className="space-y-8 leading-relaxed text-sm md:text-base">
          
          {/* Introduction */}
          <section>
            <p>
              This privacy policy is for www.thrillophilia.com and served by Thrillophilia tours and adventure pvt. ltd. and governs the privacy of its users who choose to use it.
            </p>
            <p className="mt-4">
              The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.
            </p>
          </section>

          {/* The Website */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">The Website</h2>
            <p>
              This website and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting experience. This website complies to all India’s national laws and requirements for user privacy.
            </p>
          </section>

          {/* Use of Cookies */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Use of Cookies</h2>
            <p>
              This website uses cookies to better the users experience while visiting the website. Where applicable this website uses a cookie control system allowing the user on their first visit to the website to allow or disallow the use of cookies on their computer / device. This complies with recent legislation requirements for websites to obtain explicit consent from users before leaving behind or reading files such as cookies on a user’s computer / device.
            </p>
            <p className="mt-4">
              Cookies are small files saved to the user’s computers hard drive that track, save and store information about the user’s interactions and usage of the website. This allows the website, through its server to provide the users with a tailored experience within this website. Users are advised that if they wish to deny the use and saving of cookies from this website on to their computers hard drive they should take necessary steps within their web browsers security settings to block all cookies from this website and its external serving vendors.
            </p>
            <p className="mt-4">
              This website uses tracking software to monitor its visitors to better understand how they use it. This software is provided by Google Analytics which uses cookies to track visitor usage. The software will save a cookie to your computers hard drive in order to track and monitor your engagement and usage of the website, but will not store, save or collect personal information.
            </p>
          </section>

          {/* Email Newsletter */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Email Newsletter</h2>
            <p>
              Although this website only looks to include quality, safe and relevant external links, users are advised adopt a policy of caution before clicking any external web links mentioned throughout this website.
            </p>
            <p className="mt-4">
              The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.
            </p>
          </section>

          {/* Adverts and Sponsored Links */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Adverts and Sponsored Links</h2>
            <p>
              This website may contain sponsored links and adverts. These will typically be served through our advertising partners, to whom may have detailed privacy policies relating directly to the adverts they serve.
            </p>
            <p className="mt-4">
              Clicking on any such adverts will send you to the advertisers website through a referral program which may use cookies and will track the number of referrals sent from this website. This may include the use of cookies which may in turn be saved on your computers hard drive. Users should therefore note they click on sponsored external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.
            </p>
          </section>

          {/* Social Media Platforms */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Social Media Platforms</h2>
            <p>
              Communication, engagement and actions taken through external social media platforms that this website and its owners participate on are custom to the terms and conditions as well as the privacy policies held with each social media platform respectively.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;