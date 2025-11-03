"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, Brain, Eye, Skull, Star, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="STRANGER THINGS"
          button={{
            text: "Watch Now",
            href: "https://netflix.com"
          }}
          className="bg-black/90 backdrop-blur-md border-b border-red-900/20"
          buttonClassName="bg-red-600 hover:bg-red-700 text-white"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="The Final Battle Begins"
          description="The most terrifying season yet. Hawkins faces its darkest hour as the Upside Down threatens to consume everything."
          tag="New Season"
          tagIcon={Zap}
          buttons={[
            {
              text: "Watch Trailer",
              href: "https://netflix.com"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5005210/pexels-photo-5005210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Night scene in a cemetery with a ghostly figure and a person in a red cloak, creating a mysterious atmosphere."
          className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black"
          titleClassName="text-6xl md:text-8xl font-bold tracking-tight text-red-500 drop-shadow-2xl"
          descriptionClassName="text-xl md:text-2xl text-red-100/90 max-w-3xl drop-shadow-lg"
          tagClassName="bg-red-600/90 text-white border border-red-500 shadow-lg shadow-red-600/30"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="The Upside Down Awaits"
          description={[
            "After four seasons of supernatural terror, the stakes have never been higher. The Mind Flayer's final assault on Hawkins begins.",
            "Our beloved characters face their ultimate test as the barriers between worlds crumble. Nothing will ever be the same."
          ]}
          buttons={[
            {
              text: "Explore Hawkins",
              href: "features"
            }
          ]}
          showBorder={true}
          className="bg-gradient-to-b from-black to-red-950/10"
          titleClassName="text-red-400 drop-shadow-2xl"
          descriptionClassName="text-red-100/80 text-lg leading-relaxed"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Enter the Upside Down"
          description="Discover the supernatural elements that make this season the most terrifying yet"
          tag="Season 5"
          tagIcon={Skull}
          features={[
            {
              title: "The Upside Down",
              description: "A dark reflection of our world where nightmares become reality and ancient evils lurk in every shadow",
              icon: Eye
            },
            {
              title: "Hawkins Laboratory",
              description: "Government secrets and twisted experiments that opened the door to unimaginable horrors",
              icon: Zap
            },
            {
              title: "Mind Flayer",
              description: "The shadow creature that seeks to consume all life and merge dimensions into eternal darkness",
              icon: Skull
            },
            {
              title: "Supernatural Powers",
              description: "Psychic abilities that blur the line between hero and monster in the fight for humanity",
              icon: Brain
            }
          ]}
          className="bg-gradient-to-b from-red-950/10 to-black"
          titleClassName="text-red-400 drop-shadow-xl"
          descriptionClassName="text-red-100/80"
          cardClassName="bg-red-950/20 border border-red-900/30 hover:border-red-600/50 shadow-xl shadow-red-900/20"
          iconClassName="text-red-400"
          cardTitleClassName="text-red-300"
          cardDescriptionClassName="text-red-100/70"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="The supernatural statistics that define the terror"
          tag="Data"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              icon: Eye,
              title: "Dimensions",
              value: "2"
            },
            {
              id: "2",
              icon: Skull,
              title: "Monsters",
              value: "100+"
            },
            {
              id: "3",
              icon: Users,
              title: "Heroes",
              value: "8"
            },
            {
              id: "4",
              icon: Zap,
              title: "Powers",
              value: "∞"
            }
          ]}
          className="bg-gradient-to-b from-black to-red-950/10"
          titleClassName="text-red-400 drop-shadow-xl"
          cardClassName="bg-red-950/20 border border-red-900/30 hover:border-red-600/50 shadow-xl shadow-red-900/20"
          iconContainerClassName="bg-red-600/20 border border-red-500/30"
          iconClassName="text-red-400"
          metricTitleClassName="text-red-300"
          valueClassName="text-red-400 drop-shadow-lg"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Fan Reactions"
          description="What viewers are saying about the most terrifying season yet"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Horror Enthusiast",
              testimonial: "This season gave me chills like no other. The Upside Down has never felt more terrifying and real. Can't wait to see how it ends!",
              imageSrc: "https://images.pexels.com/photos/976863/pexels-photo-976863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Diverse crowd enjoying a live event with one woman raising her hand in excitement."
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Netflix Subscriber",
              testimonial: "The character development and supernatural elements are perfectly balanced. This show keeps getting better with each season.",
              imageSrc: "https://images.pexels.com/photos/23495582/pexels-photo-23495582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A group of friends enjoying a movie night together indoors with snacks and drinks."
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Sci-Fi Fan",
              testimonial: "The visual effects and storytelling have reached a whole new level. The Mind Flayer scenes gave me nightmares for weeks!",
              imageSrc: "https://images.pexels.com/photos/4915112/pexels-photo-4915112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Side view cheerful teenage girls in trendy summer wear lifting cute black cat on hands while spending sunny summer day in blossoming fragrant garden"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Binge Watcher",
              testimonial: "I binged the entire season in one night. The supernatural horror and 80s nostalgia create the perfect atmosphere.",
              imageSrc: "https://images.pexels.com/photos/3851875/pexels-photo-3851875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Group of friends celebrating St. Patrick's Day with green beer in a lively pub."
            }
          ]}
          className="bg-gradient-to-b from-red-950/10 to-black"
          titleClassName="text-red-400 drop-shadow-xl"
          descriptionClassName="text-red-100/80"
          cardClassName="bg-red-950/20 border border-red-900/30 hover:border-red-600/50 shadow-xl shadow-red-900/20"
          nameClassName="text-red-300"
          roleClassName="text-red-100/60"
          testimonialClassName="text-red-100/80"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join The Fight"
          title="Enter The Upside Down"
          description="Get exclusive behind-the-scenes content, cast interviews, and early access to supernatural secrets from Hawkins."
          tagIcon={Zap}
          videoSrc="https://images.pexels.com/photos/5727971/pexels-photo-5727971.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          videoAriaLabel="Stranger Things atmospheric video"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Join Now"
          termsText="By joining, you agree to receive supernatural updates and otherworldly content from Netflix."
          className="bg-gradient-to-b from-black to-red-950/10"
          titleClassName="text-red-400 drop-shadow-xl"
          descriptionClassName="text-red-100/80"
          tagClassName="bg-red-600/90 text-white border border-red-500"
          cardClassName="bg-red-950/30 border border-red-900/40 shadow-2xl shadow-red-900/30"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Series",
              items: [
                {
                  label: "Episodes",
                  href: "episodes"
                },
                {
                  label: "Characters",
                  href: "characters"
                },
                {
                  label: "Behind the Scenes",
                  href: "bts"
                }
              ]
            },
            {
              title: "Experience",
              items: [
                {
                  label: "Watch Now",
                  href: "https://netflix.com"
                },
                {
                  label: "Mobile App",
                  href: "https://netflix.com/app"
                },
                {
                  label: "Games",
                  href: "games"
                }
              ]
            },
            {
              title: "Community",
              items: [
                {
                  label: "Fan Forum",
                  href: "community"
                },
                {
                  label: "Social Media",
                  href: "social"
                },
                {
                  label: "Merchandise",
                  href: "merch"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Netflix | Stranger Things"
          className="bg-black border-t border-red-900/20"
          containerClassName="text-red-100/80"
          columnTitleClassName="text-red-400 font-semibold"
          copyrightTextClassName="text-red-100/60"
        />
      </div>
    </ThemeProvider>
  );
}