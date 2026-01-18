import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Bug,
} from "lucide-react";
import footerLogo from "@/assets/footer-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#193B3C]">
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 flex-shrink-0 justify-center text-center pb-6">
              <img
                src={footerLogo}
                alt="Business Psychologist Middle East"
                className="h-24 w-auto"
              />
            </div>

            <p className="text-m text-white/70 justify-center text-center">
              Contact Us Today
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 justify-center text-center">
              <a
                href="https://www.linkedin.com/company/business-psychologist-middle-east/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#6abbbd] hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-teal group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/businesspsychologistme/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#6abbbd] hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-teal group-hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571588496561"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#6abbbd] hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-teal group-hover:text-white" />
              </a>
              <a
                href="https://x.com/BusPsychME"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#6abbbd] hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-5 h-5 text-teal group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@BuinessPsychologistME"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#6abbbd] hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
              >
                <Youtube className="w-5 h-5 text-teal group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-center">
              Quick Links
            </h4>

            <ul className="space-y-3 text-center">
              {[
                {
                  label: "About Us",
                  url: "https://businesspsychologist.me/about_us",
                },
                {
                  label: "Advisory Board",
                  url: "https://businesspsychologist.me/advisory_board",
                },
                {
                  label: "Ambassadors",
                  url: "https://businesspsychologist.me/ambassadors",
                },
                {
                  label: "Get Featured",
                  url: "https://businesspsychologist.me/get_featured",
                },
                {
                  label: "Advertise",
                  url: "https://businesspsychologist.me/advertise",
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white justify-center text-center">
              Contact Us
            </h4>
            <ul className="space-y-3 ">
              <li>
                <a
                  href="mailto:contactus@businesspsychologist.me"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 justify-center text-center"
                >
                  <Mail className="w-4 h-4" />
                  contactus@businesspsychologist.me
                </a>
              </li>
              <li>
                <a
                  href="mailto:support.tech@businesspsychologist.me"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 justify-center text-center"
                >
                  <Mail className="w-4 h-4" />
                  support.tech@businesspsychologist.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70 justify-center text-center">
            Copyright © {currentYear} Business Psychologist Middle East LLC -
            All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://businesspsychologist.me/terms_and_conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="https://businesspsychologist.me/privacy_policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
