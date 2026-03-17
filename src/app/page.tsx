"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { navItems, siteContent } from "@/content/siteContent";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#2f241b]">
      <SiteHeader monogram={siteContent.couple.shortName} navItems={navItems} />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6">
        <section id="home" className="relative overflow-hidden rounded-[2rem] border border-[#e6dbcf] bg-[#fffdfa] p-8 shadow-xl shadow-[#6f5b450f] sm:p-14">
          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#edd9c52e] blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-[#d8c3ae33] blur-3xl" />
          <motion.p {...fadeUp} className="relative text-xs tracking-[0.32em] text-[#8a7460] uppercase">
            {siteContent.event.dateLabel} · {siteContent.event.city}
          </motion.p>
          <motion.h1 {...fadeUp} className="relative mt-6 max-w-3xl text-4xl leading-tight font-semibold text-[#2c2118] sm:text-6xl">
            {siteContent.hero.title}
          </motion.h1>
          <motion.p {...fadeUp} className="relative mt-6 max-w-2xl text-lg leading-relaxed text-[#5e4d3f]">
            {siteContent.hero.subtitle}
          </motion.p>
          <motion.div {...fadeUp} className="relative mt-10 flex flex-wrap gap-4">
            <a href="#event-details" className="rounded-full bg-[#38281d] px-6 py-3 text-sm font-medium text-[#fffaf3] transition hover:-translate-y-0.5 hover:bg-[#2f2118]">
              {siteContent.hero.primaryCta}
            </a>
            <a href="#registry" className="rounded-full border border-[#bca995] bg-[#fffefb] px-6 py-3 text-sm font-medium text-[#38281d] transition hover:-translate-y-0.5 hover:bg-[#f9f3ec]">
              {siteContent.hero.secondaryCta}
            </a>
          </motion.div>
        </section>

        <motion.section id="event-details" {...fadeUp} className="mt-16 grid gap-6 rounded-3xl border border-[#e6dbcf] bg-white/70 p-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#907a66]">Date</p>
            <p className="mt-3 text-lg font-medium">{siteContent.event.dateLabel}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#907a66]">Time</p>
            <p className="mt-3 text-lg font-medium">{siteContent.event.timeLabel}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#907a66]">Venue</p>
            <p className="mt-3 text-lg font-medium">
              {siteContent.event.venue}
              <br />
              {siteContent.event.city}
            </p>
          </div>
        </motion.section>

        <section id="our-story" className="mt-20">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Our Story
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 max-w-3xl text-[#5e4d3f]">
            {siteContent.story.intro}
          </motion.p>
          <div className="mt-10 space-y-8">
            {siteContent.story.milestones.map((milestone, index) => (
              <motion.article
                key={milestone.heading}
                {...fadeUp}
                className="grid gap-6 rounded-3xl border border-[#e8ddcf] bg-[#fffdfa] p-6 shadow-sm sm:grid-cols-[72px_1fr_220px] sm:items-center"
              >
                <div className="h-12 w-12 rounded-full border border-[#cdb9a4] bg-[#f6ede4] text-center text-sm leading-[46px] text-[#6f5946]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#35281d]">{milestone.heading}</h3>
                  <p className="mt-3 text-[#5f4f41]">{milestone.text}</p>
                </div>
                <Image
                  src={milestone.image}
                  alt={milestone.heading}
                  width={220}
                  height={150}
                  className="h-36 w-full rounded-2xl border border-[#e4d8cb] object-cover"
                />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20" id="gallery">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Gallery
          </motion.h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["gallery-1.svg", "gallery-2.svg", "gallery-3.svg"].map((image) => (
              <motion.div key={image} whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl border border-[#e5d8cb] bg-white p-2 shadow-sm">
                <Image src={`/images/${image}`} alt="Gallery placeholder" width={420} height={300} className="h-56 w-full rounded-xl object-cover" />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="travel" className="mt-20">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Travel & Accommodations
          </motion.h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {siteContent.travel.map((item) => (
              <motion.article key={item.title} {...fadeUp} whileHover={{ y: -3 }} className="rounded-2xl border border-[#e8dbce] bg-[#fffdfa] p-6">
                <h3 className="text-xl font-medium text-[#3a2a1f]">{item.title}</h3>
                <p className="mt-3 text-[#645243]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="registry" className="mt-20">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Registry
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 max-w-3xl text-[#5e4d3f]">
            {siteContent.registry.intro}
          </motion.p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {siteContent.registry.groups.map((group) => (
              <motion.article
                key={group.title}
                {...fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-[#e6d9cb] bg-[#fffdfa] p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-2xl font-medium text-[#332419]">{group.title}</h3>
                <p className="mt-4 text-[#604f40]">{group.description}</p>
                <a
                  href={group.url}
                  className="mt-6 inline-flex rounded-full border border-[#bca996] px-5 py-2.5 text-sm font-medium text-[#3d2c1f] transition hover:bg-[#f7efe7]"
                >
                  {group.cta}
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-20 grid gap-8 lg:grid-cols-2">
          <div>
            <motion.h2 {...fadeUp} className="text-3xl font-semibold sm:text-4xl">
              FAQ
            </motion.h2>
            <motion.p {...fadeUp} className="mt-4 text-[#645243]">
              A few helpful details for the weekend. We cannot wait to celebrate with you.
            </motion.p>
          </div>
          <div className="space-y-4">
            {siteContent.faq.map((item) => (
              <motion.details key={item.question} {...fadeUp} className="rounded-2xl border border-[#e6dbce] bg-[#fffdfa] p-5">
                <summary className="cursor-pointer list-none text-lg font-medium text-[#392a1f]">{item.question}</summary>
                <p className="mt-3 text-[#635142]">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>

        <motion.section id="rsvp" {...fadeUp} className="mt-20 rounded-3xl border border-[#decfbe] bg-[#f6ede4] p-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8f7864]">RSVP</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#35271c]">Online RSVP opens January 2027</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#634f3f]">
            We are finalizing the guest response portal. Please check back soon for the RSVP form and weekend itinerary updates.
          </p>
        </motion.section>

        <section id="contact" className="mt-20 rounded-3xl border border-[#e7dccf] bg-[#fffdfa] p-8 sm:p-10">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold sm:text-4xl">
            Contact
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 text-[#5f4f41]">
            Questions before the celebration? We would love to help.
          </motion.p>
          <motion.div {...fadeUp} className="mt-6 space-y-2 text-[#4f3f31]">
            <p>{siteContent.contact.email}</p>
            <p>{siteContent.contact.planner}</p>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[#eadfcf] bg-[#fffdfa] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-[#6f5c4c] sm:flex-row sm:px-6">
          <p>
            {siteContent.couple.partnerOne} & {siteContent.couple.partnerTwo}
          </p>
          <p>{siteContent.event.countdownLabel}</p>
        </div>
      </footer>
    </div>
  );
}
