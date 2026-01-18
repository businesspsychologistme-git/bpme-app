import {
  Users,
  MessageSquare,
  BookOpen,
  UserCircle,
  Briefcase,
  Award,
} from "lucide-react";
import featuresPhoneMockup from "@/assets/features-phone-mockup.png";
import featuresBg from "@/assets/features-bg.jpg";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Verified Expert Directory",
      description:
        "Find and connect with verified business psychology professionals across the Middle East.",
    },
    {
      icon: MessageSquare,
      title: "Community & Networking",
      description:
        "Engage with peers through discussions, events, and shared industry insights.",
    },
    {
      icon: UserCircle,
      title: "Professional Profiles",
      description:
        "Showcase expertise, credentials, and services in one trusted professional profile.",
    },
    {
      icon: BookOpen,
      title: "Resources & Insights",
      description:
        "Explore evidence-based tools, articles, and frameworks to elevate performance.",
    },
    {
      icon: Briefcase,
      title: "Jobs & Opportunities",
      description:
        "Access exclusive roles, tenders, and consulting opportunities in business psychology.",
    },
    {
      icon: Award,
      title: "Recognition & Credibility",
      description:
        "Build trust and professional standing through platform recognition and visibility.",
    },
  ];

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${featuresBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0a3d3d]/90" />

      <div className="container relative z-10 px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white ">
            Everything You Need
          </h2>
          <h3 className="font-display text-2xl sm:text-xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#008080]">
            In Your Pocket
          </h3>
          <p className="text-sm md:text-base text-white/70 text-balance px-4">
            Powerful features designed to help you connect with business
            psychology professionals and grow your career.
          </p>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* Phone mockup centered */}
          <div className="flex justify-center mb-12">
            <img
              src={featuresPhoneMockup}
              alt="BPME App Features"
              className="w-[220px] sm:w-[280px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Features grid below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center px-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-display text-base sm:text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Orbital */}
        <div className="hidden lg:block relative max-w-6xl mx-auto min-h-[960px]  ">
          {/* Center phone mockup */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={featuresPhoneMockup}
              alt="BPME App Features"
              className="w-[320px] xl:w-[380px] drop-shadow-2xl"
            />
          </div>

          {/* Feature items positioned around phone */}

          {/* Top - Verified Expert Directory */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center max-w-[400px]">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Verified Expert Directory
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Find and connect with verified business psychology professionals
              across the Middle East.
            </p>
          </div>

          {/* Left top - Community & Networking */}
          <div className="absolute top-[18%] left-[2%] xl:left-[4%] text-center max-w-[300px]">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Community & Networking
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Engage with peers through discussions, events, and shared industry
              insights.
            </p>
          </div>

          {/* Right top - Professional Profiles */}
          <div className="absolute top-[18%] right-[2%] xl:right-[4%] text-center max-w-[300px]">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Professional Profiles
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Showcase expertise, credentials, and services in one trusted
              professional profile.
            </p>
          </div>

          {/* Left bottom - Resources & Insights */}
          <div className="absolute bottom-[18%] left-[2%] xl:left-[4%] text-center max-w-[300px]">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Resources & Insights
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Explore evidence-based tools, articles, and frameworks to elevate
              performance.
            </p>
          </div>

          {/* Right bottom - Jobs & Opportunities */}
          <div className="absolute bottom-[18%] right-[2%] xl:right-[4%] text-center max-w-[300px]">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Jobs & Opportunities
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Access exclusive roles, tenders, and consulting opportunities in
              business psychology.
            </p>
          </div>

          {/* Bottom center - Recognition & Credibility */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center max-w-[400px] ">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Recognition & Credibility
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Build trust and professional standing through platform recognition
              and visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
