import React from "react";
import { Link } from "@/lib/router-events";
import { Route } from "@/types";
import {
  Activity,
  Archive,
  Book,
  BotIcon,
  Box,
  Check,
  Code,
  Gauge,
  GitBranch,
  Layers,
  Play,
  Shield,
  TestTube,
  Zap,
} from "lucide-react";

import BackgroundSection from "@/shared/BackgroundSection";
import Button from "@/components/Button";

const KEY_FEATURES = [
  "Book appointments that fit your schedule.",
  " therapy from home",
  "Available in Arabic, French, and English",
];

export default async function Home() {
  const features = [
    {
      icon: <Zap />,
      title: "Next.js",
      description: "Fast by default, with config optimized for performance.",
    },
    {
      icon: <Code />,
      title: "Tailwind",
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      icon: <Check />,
      title: "ESlint & Prettier",
      description: "For clean, consistent, and error-free code.",
    },
    {
      icon: <Shield />,
      title: "Strict TypeScript",
      description: "With ts-reset library for ultimate type safety.",
    },
    {
      icon: <Gauge />,
      title: "Bundle analyzer",
      description: "Keep an eye on your bundle size.",
    },
    {
      icon: <TestTube />,
      title: "Jest & React Testing Library",
      description: "For rock-solid unit and integration tests.",
    },
    {
      icon: <Play />,
      title: "Playwright",
      description: "Write end-to-end tests like a pro.",
    },
    {
      icon: <Book />,
      title: "Storybook",
      description: "Create, test, and showcase your components.",
    },
    {
      icon: <Activity />,
      title: "Smoke & Acceptance Tests",
      description: "For confidence in your deployments.",
    },
    {
      icon: <GitBranch />,
      title: "Conventional commits",
      description: "Keep your commit history neat and tidy.",
    },
    {
      icon: <Activity />,
      title: "Observability",
      description: "Open Telemetry integration for seamless monitoring.",
    },
    {
      icon: <Box />,
      title: "Absolute imports",
      description: "No more spaghetti imports.",
    },
    {
      icon: <Activity />,
      title: "Health checks",
      description: "Kubernetes-compatible for robust deployments.",
    },
    {
      icon: <Layers />,
      title: "Radix UI",
      description: "Headless UI components for endless customization.",
    },
    {
      icon: <Layers />,
      title: "CVA",
      description: "Create a consistent, reusable, and atomic design system.",
    },
    {
      icon: <BotIcon />,
      title: "Renovate BOT",
      description: "Auto-updating dependencies, so you can focus on coding.",
    },
    {
      icon: <Archive />,
      title: "Patch-package",
      description: "Fix external dependencies without losing your mind.",
    },
    {
      icon: <Layers />,
      title: "Components graph",
      description: "A tool for managing component relationships.",
    },
    {
      icon: <GitBranch />,
      title: "GitHub Actions",
      description: "Pre-configured actions for smooth workflows.",
    },
    {
      icon: <BotIcon />,
      title: "ChatGPT Code Reviews",
      description: "Stay on the cutting edge with AI-powered code reviews!",
    },
    {
      icon: <Archive />,
      title: "Semantic Release",
      description: "For automatic changelog generation.",
    },
  ];
  return (
    <main className=" px-4 md:px-14 2xl:container">
      <div className="  mt-6">
        <BackgroundSection className="bg-primary-50 isolate hero-wrapper md:h-[46rem] dark:bg-black/20 !max-w-[100vw] !top-0 !rounded-none" />
        <div className=" flex flex-col-reverse gap-10 md:gap-18 justify-between  mb-40">
          <div className="flex-1 relative  md:mt-4">
            <h1 className="nc-heading-1 text-center  mt-4">
              Next.js Boilerplate
            </h1>
            <p className="text-center pr-4 md:text-lg text-primary-900 mt-4">
              Jumpstart your enterprise project with our feature-packed,
              high-performance Next.js boilerplate! Experience rapid UI
              development, AI-powered code reviews, and an extensive suite of
              tools for a smooth and enjoyable development process.
            </p>
            <ul className="py-6 md:py-9 flex flex-col items-center">
              {KEY_FEATURES.map((item, index) => (
                <li
                  className=" flex  leading-tight mb-4 font-light text-primary-900"
                  key={index}
                >
                  <svg
                    className="nc-check mt-[2px] w-6 mr-4 align-top leading-tight stroke-2 fill-current stroke-current text-secondary-800"
                    width="25"
                    height="19"
                    viewBox="0 0 25 19"
                  >
                    <path d="M0.5,10.265L8.719,18.5L24.5,2.734L22.234,0.5L8.719,13.999L2.734,8.015L0.5,10.265Z"></path>
                  </svg>
                  <span>
                    {index === 1 && (
                      <marker className="mark-longer mark-green-longer ">
                        Private and secure
                      </marker>
                    )}
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-4 w-auto ">
              <Link href={"/" as Route} className="w-1/2 md:w-auto">
                <Button
                  className="self-center w-full max-w-full"
                  size={"spaced"}
                  intent="accent"
                >
                  Get Started Today
                </Button>
              </Link>
              <Link href={"/" as Route} className="w-1/2 md:w-auto">
                <Button
                  className="self-center w-full max-w-full"
                  size={"spaced"}
                  intent="lightAccent"
                >
                  Deploy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Features Section */}
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="nc-heading-3 text-4xl text-primary-700 py-16 text-center mb-12">
              Packed with Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6"
                >
                  <div className="bg-primary-50 p-4 rounded-2xl mb-4">
                    <div className="text-primary-6000 flex items-center justify-center w-8 h-8">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl text-primary-600 font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-primary-500 py-20 mb-36 rounded-xl">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to supercharge your Next.js project?
            </h2>
            <p className="text-xl text-white mb-8">
              Start building with our enterprise-grade boilerplate today!
            </p>
            <Link
              href="/get-started"
              className="bg-white text-primary-500 py-3 px-8 rounded-full font-bold hover:bg-gray-100 transition duration-200"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
