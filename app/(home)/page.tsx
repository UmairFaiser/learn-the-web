import Image from "next/image";
import Link from "next/link";

import {
  BookAIcon,
  GraduationCapIcon,
  ImageIcon,
  LayoutDashboardIcon,
  LayoutIcon,
  PanelsTopLeftIcon,
  SearchIcon,
  ServerIcon,
  ZapIcon,
} from "lucide-react";

import gettingStarted from "@/public/getting-started-page.png";

export default function HomePage() {
  return (
    <main className="max-w-6xl w-full mx-auto my-12">
      <div className="bg-fd-muted-foreground/5 border-x border-t w-full p-12 overflow-hidden xl:overflow-visible">
        <h1 className="text-4xl text-fd-primary text-pretty font-semibold max-w-2xl">
          Your Journey into Web Development Begins Now
        </h1>
        <p className="text-lg text-fd-muted-foreground text-pretty max-w-2xl mt-6">
          Whether you&apos;re a beginner or an experienced developer, we have a
          range of courses and resources to help you achieve your goals.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link
            href="/docs/fundamentals"
            className="px-4 py-2.5 rounded-full bg-fd-primary text-sm text-fd-secondary font-semibold flex items-center hover:-translate-y-0.5 transition ease-out"
          >
            Getting Started
          </Link>
        </div>
        <div className="mt-12 -mb-40 lg:-mb-18 xl:-mx-14 min-w-3xl">
          <Image
            src={gettingStarted}
            alt="Getting Started"
            priority
            placeholder="blur"
            className="w-full select-none dark:[mask-image:linear-gradient(to_bottom,white_70%,transparent_90%)] rounded-2xl border-6 border-neutral-700/50 invert dark:invert-0"
          />
        </div>
      </div>

      <div className="bg-fd-background flex flex-col gap-4 border-x border-t px-8 py-16 md:py-24 lg:flex-row md:px-16">
        <div className="shrink-0 flex-1 font-mono text-start">
          <p className="px-2 py-1 text-sm text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-colors ease-out duration-300 font-medium w-fit mb-4">
            Your roadmap to success
          </p>
          <h2 className="text-xl font-medium mb-4 sm:text-2xl">
            Explore Web Development
          </h2>
          <p className="text-sm text-fd-muted-foreground mb-6">
            Choose your path and dive deep into the world of web development.
            From fundamental concepts to advanced techniques, we&apos;ve got you
            covered.
          </p>
        </div>
        <div className="w-full max-w-lg flex flex-col items-end justify-center gap-4 font-mono">
          <Link
            href="/docs/fundamentals"
            className="bg-fd-muted text-fd-primary shadow shadow-fd-muted-foreground/25 max-w-sm w-full h-12 flex items-center justify-center gap-1.5 font-semibold hover:-translate-y-1 hover:shadow-md transition ease-out duration-300"
          >
            <BookAIcon className="size-4" />
            Fundamentals
          </Link>
          <Link
            href="/docs/front-end"
            className="bg-fd-muted text-fd-primary shadow shadow-fd-muted-foreground/25 max-w-sm w-full h-12 flex items-center justify-center gap-1.5 font-semibold hover:-translate-y-1 hover:shadow-md transition ease-out duration-300"
          >
            <PanelsTopLeftIcon className="size-4" />
            Frontend
          </Link>
          <Link
            href="/docs/back-end"
            className="bg-fd-muted text-fd-primary shadow shadow-fd-muted-foreground/25 max-w-sm w-full h-12 flex items-center justify-center gap-1.5 font-semibold hover:-translate-y-1 hover:shadow-md transition ease-out duration-300"
          >
            <ServerIcon className="size-4" />
            Backend
          </Link>
          <Link
            href="/docs/advanced"
            className="bg-fd-muted text-fd-primary shadow shadow-fd-muted-foreground/25 max-w-sm w-full h-12 flex items-center justify-center gap-1.5 font-semibold hover:-translate-y-1 hover:shadow-md transition ease-out duration-300"
          >
            <GraduationCapIcon className="size-4" />
            Advanced
          </Link>
        </div>
      </div>

      <div
        id="highlights"
        className="bg-fd-background border-l border-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="col-span-full flex flex-col items-center justify-center border-b border-r p-8 text-center">
          <h2 className="flex items-center text-fd-primary px-1 text-2xl h-9 font-semibold hover:bg-fd-primary hover:text-fd-secondary transition-colors ease-out duration-300">
            Highlights
          </h2>
        </div>
        {[
          {
            title: "Documentation",
            description: "Comprehensive documentation with MDX support",
            icon: <BookAIcon className="size-4" />,
          },
          {
            title: "Full-text Search",
            description: "Built-in search capabilities to quickly find content",
            icon: <SearchIcon className="size-4" />,
          },
          {
            title: "Dynamic OG Image",
            description:
              "Automatically generate optimized social media previews",
            icon: <ImageIcon className="size-4" />,
          },
          {
            title: "Responsive Design",
            description: "Optimized for all screen sizes and devices",
            icon: <LayoutIcon className="size-4" />,
          },
          {
            title: "Clean UI",
            description: "Modern interface focused on readability",
            icon: <LayoutDashboardIcon className="size-4" />,
          },
          {
            title: "Fast and SEO-friendly",
            description: "Optimized for speed and search engine visibility",
            icon: <ZapIcon className="size-4" />,
          },
        ].map((highlight, index) => (
          <div
            key={index}
            className="border-r border-b px-6 py-12 bg-radial-[circle_at_center] hover:from-fd-secondary to-fd-background transition-colors ease-out duration-300"
          >
            <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
              {highlight.icon}
              <h2 className="text-sm font-medium">{highlight.title}</h2>
            </div>
            <span className="font-medium">{highlight.description}</span>
          </div>
        ))}
      </div>

      <div className="bg-fd-background border-x border-b px-8 py-16 sm:py-24 text-center bg-radial-[circle_at_center] to-50% from-fd-secondary to-fd-background">
        <p className="overflow-y-clip text-center text-2xl font-semibold sm:text-3xl mb-4">
          Ready to Get Started?
        </p>
        <div className="flex flex-col gap-6 items-center">
          <p className="max-w-xl text-fd-muted-foreground">
            Begin your web development journey today. Our comprehensive
            resources are designed to take you from beginner to expert.
          </p>
          <Link
            href="/docs/fundamentals"
            className="px-6 py-3 rounded-full bg-fd-primary text-fd-secondary font-semibold hover:-translate-y-0.5 transition ease-out"
          >
            Start Learning Now
          </Link>
        </div>
      </div>
    </main>
  );
}
