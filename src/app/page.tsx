"use client"

import { Benefits } from "@/components/home-landing-page/Benefits"
import { Container } from "@/components/home-landing-page/Container"
import { Cta } from "@/components/home-landing-page/Cta"
import { benefitOne, benefitTwo } from "@/components/home-landing-page/data"
import { Faq } from "@/components/home-landing-page/Faq"
import { Hero } from "@/components/home-landing-page/Hero"
import { SectionTitle } from "@/components/home-landing-page/SectionTitle"
import { Testimonials } from "@/components/home-landing-page/Testimonials"
import { Video } from "@/components/home-landing-page/Video"

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video videoId="fZ0D0cnR88E" />
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
    </Container>
  )
}
