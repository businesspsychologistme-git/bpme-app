import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 rounded-2xl bg-[#193B3C] border border-white/10">
        <div className="container px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-3 flex-shrink-0">
                <img src={logo} alt="BPME Logo" className="h-10 w-auto" />
                <span className="hidden md:block text-secondary-foreground font-display font-semibold text-[10px] leading-tight">
                  BUSINESS
                  <br />
                  PSYCHOLOGIST
                  <br />
                  MIDDLE EAST LLC
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://businesspsychologist.me/signup"
                target="_blank" // opens in a new tab
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white text-[#193B3C] hover:bg-white/90"
                >
                  Sign Up
                </Button>
              </a>

              <Button
                size="sm"
                className="bg-white text-[#193B3C] hover:bg-white/90 hidden"
              >
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <nav className="flex flex-col gap-4">
                {/*{navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}*/}
                <div className="flex flex-col gap-2 pt-4">
                  <a
                    href="https://businesspsychologist.me/signup"
                    target="_blank" // opens in a new tab
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white text-[#193B3C] hover:bg-white/90 w-full flex items-center justify-center"
                    >
                      Sign Up
                    </Button>
                  </a>
                  <Button
                    size="sm"
                    className="bg-white text-[#193B3C] hover:bg-white/90 hidden"
                  >
                    Download App
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
