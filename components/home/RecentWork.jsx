"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/ui/FadeUp";

const jobs = [
  {
    title: "Garden Clearance",
    location: "Coventry",
    description:
      "Professional garden waste removal completed quickly and responsibly by Maxx Waste Removals.",

    beforeImages: [],
    beforeVideos: ["/videos/gallery/garden-before.mp4"],

    afterImages: [],
    afterVideos: ["/videos/gallery/garden-after.mp4"],
  },

  {
    title: "House Clearance",
    location: "Leicester",
    description:
      "Complete house clearance completed by our licensed waste removal team.",

    beforeImages: [
      "/images/gallery/house-before-1.jpeg",
      "/images/gallery/house-before-2.jpeg",
    ],
    beforeVideos: [],

    afterImages: [],
    afterVideos: ["/videos/gallery/house-after.mp4"],
  },
];

export default function RecentWork() {
  return (
    <Section>
      <Container>
        <FadeUp>

          <div className="text-center mb-14">

            <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-yellow-400">
              Recent Work
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
              Real Jobs We've Completed
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-300">
              See genuine before and after waste removal jobs completed across the Midlands.
            </p>

          </div>

          <div className="space-y-14">

            {jobs.map((job, index) => (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm"
              >

                <div className="mb-8">

                  <h3 className="text-3xl font-bold text-yellow-400">
                    {job.title}
                  </h3>

                  <p className="mt-2 text-gray-300 font-semibold">
                    {job.location}
                  </p>

                  <p className="mt-4 text-gray-400">
                    {job.description}
                  </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                  <div>

                    <h4 className="mb-5 text-2xl font-bold text-white border-l-4 border-yellow-400 pl-3">
                      Before
                    </h4>

                    <div className="space-y-5">

                                          {job.beforeImages.map((image, i) => (
                        <div
                          key={i}
                          className="overflow-hidden rounded-2xl border border-white/10"
                        >
                          <Image
                            src={image}
                            alt={`${job.title} before ${i + 1}`}
                            width={1200}
                            height={900}
                            className="w-full h-72 object-cover hover:scale-105 transition duration-300"
                          />
                        </div>
                      ))}

                      {job.beforeVideos.map((video, i) => (
                        <video
                          key={i}
                          controls
                          preload="metadata"
                          className="w-full rounded-2xl border border-white/10"
                        >
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ))}

                    </div>

                  </div>

                  <div>

                    <h4 className="mb-5 text-2xl font-bold text-white border-l-4 border-green-500 pl-3">
                      After
                    </h4>

                    <div className="space-y-5">

                      {job.afterImages.map((image, i) => (
                        <div
                          key={i}
                          className="overflow-hidden rounded-2xl border border-white/10"
                        >
                          <Image
                            src={image}
                            alt={`${job.title} after ${i + 1}`}
                            width={1200}
                            height={900}
                            className="w-full h-72 object-cover hover:scale-105 transition duration-300"
                          />
                        </div>
                      ))}

                      {job.afterVideos.map((video, i) => (
                        <video
                          key={i}
                          controls
                          preload="metadata"
                          className="w-full rounded-2xl border border-white/10"
                        >
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ))}

                    </div>

                  </div>

                </div>

              </div>
            ))}
                      </div>

        </FadeUp>
      </Container>
    </Section>
  );
}