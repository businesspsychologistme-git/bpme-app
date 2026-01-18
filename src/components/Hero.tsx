import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import apple from "@/assets/apple.png";
import play from "@/assets/play.png";

const IOS_APP_URL =
  "https://apps.apple.com/us/app/business-psychologist-me/id6757138241";
const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=com.businesspsychologistme.Business_Psychologist_ME";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="glow-orb glow-orb-primary w-[600px] h-[600px] -top-40 -left-40 animate-pulse-glow"
        style={{
          animationDelay: "0s",
        }}
      />
      <div
        className="glow-orb glow-orb-secondary w-[400px] h-[400px] top-1/3 -right-20 animate-pulse-glow"
        style={{
          animationDelay: "2s",
        }}
      />
      <div
        className="glow-orb glow-orb-primary w-[300px] h-[300px] bottom-20 left-1/4 animate-pulse-glow"
        style={{
          animationDelay: "4s",
        }}
      />

      <div className="container relative z-10 px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium animate-slide-up"
              style={{
                animationDelay: "0.1s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">
                Now Available on iOS & Android
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] animate-slide-up"
              style={{
                animationDelay: "0.2s",
              }}
            >
              Business Psychology{" "}
              <span className="text-teal">In Your Pocket</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance animate-slide-up"
              style={{
                animationDelay: "0.3s",
              }}
            >
              Connect with 500+ certified professionals across the Middle East.
              Book consultations, access resources, and grow your career
              anytime, anywhere.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up"
              style={{
                animationDelay: "0.4s",
              }}
            >
              <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="store"
                  size="lg"
                  className="gap-3 bg-black hover:bg-black"
                >
                  <img
                    src={apple}
                    alt="ios official icon"
                    className="h-8 w-auto"
                  />
                  <div className="text-left">
                    <span className="block text-xs opacity-80">
                      Download on the
                    </span>
                    <span className="block font-semibold text-base">
                      App Store
                    </span>
                  </div>
                </Button>
              </a>

              <a
                href={ANDROID_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="store"
                  size="lg"
                  className="gap-3 bg-black hover:bg-black"
                >
                  <img
                    src={play}
                    alt="android official icon"
                    className="h-10 w-auto"
                  />
                  <div className="text-left">
                    <span className="block text-xs opacity-80">Get it on</span>
                    <span className="block font-semibold text-base">
                      Google Play
                    </span>
                  </div>
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 justify-center lg:justify-start pt-4 animate-slide-up"
              style={{
                animationDelay: "0.5s",
              }}
            >
              <div>
                <p className="text-3xl font-bold text-gradient">500+</p>
                <p className="text-sm text-muted-foreground">Professionals</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-gradient">4.9</p>
                <p className="text-sm text-muted-foreground">App Rating</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-gradient">10K+</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div
            className="justify-center animate-fade-in flex items-center lg:justify-center"
            style={{
              animationDelay: "0.6s",
            }}
          >
            <div className="relative">
              <img
                src={heroPhoneMockup}
                alt="BPME App Interface"
                className="w-[300px] md:w-[400px] lg:w-[500px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
