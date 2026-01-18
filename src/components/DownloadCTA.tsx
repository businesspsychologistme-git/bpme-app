import { Button } from "@/components/ui/button";
import { Apple, Play, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

import apple from "@/assets/apple.png";
import play from "@/assets/play.png";

const IOS_APP_URL =
  "https://apps.apple.com/us/app/business-psychologist-me/id6757138241";
const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=com.businesspsychologistme.Business_Psychologist_ME";

const DownloadCTA = () => {
  const iosQrRef = useRef<HTMLCanvasElement>(null);
  const androidQrRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (iosQrRef.current) {
      QRCode.toCanvas(iosQrRef.current, IOS_APP_URL, {
        width: 100,
        margin: 1,
        color: {
          dark: "#193B3C",
          light: "#FFFFFF",
        },
      });
    }
    if (androidQrRef.current) {
      QRCode.toCanvas(androidQrRef.current, ANDROID_APP_URL, {
        width: 100,
        margin: 1,
        color: {
          dark: "#193B3C",
          light: "#FFFFFF",
        },
      });
    }
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      <div className="glow-orb glow-orb-secondary w-[600px] h-[600px] -bottom-40 left-1/2 -translate-x-1/2 animate-pulse-glow opacity-20" />

      <div className="container relative z-10 px-6">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto border-primary/10">
          {/* Content */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-teal">Get Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            Join thousands of business psychology professionals already growing
            their careers with BPME
          </p>

          {/* App Store buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
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

            <a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer">
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

            {/*<a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="storeOutline" size="lg" className="gap-3">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <span className="block text-xs opacity-80">Get it on</span>
                  <span className="block font-semibold text-base">
                    Google Play
                  </span>
                </div>
              </Button>
            </a>*/}
          </div>

          {/* QR Codes */}
          <div className="border-t border-border/50 pt-10">
            <p className="text-sm text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <Smartphone className="w-4 h-4" />
              or scan to download
            </p>
            <div className="flex gap-8 justify-center">
              <div className="text-center">
                <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center mb-3 mx-auto p-2 shadow-md">
                  <canvas ref={iosQrRef} className="rounded-lg" />
                </div>
                <p className="text-sm font-medium">iOS</p>
              </div>
              <div className="text-center">
                <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center mb-3 mx-auto p-2 shadow-md">
                  <canvas ref={androidQrRef} className="rounded-lg" />
                </div>
                <p className="text-sm font-medium">Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
