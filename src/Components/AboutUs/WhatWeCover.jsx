import {
  FaMicroscope,
  FaAppleAlt,
  FaUtensils,
  FaShieldAlt,
  FaCommentDots,
} from "react-icons/fa";
import { Link } from "react-router";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const topics = [
  {
    title: "Myth vs Fact",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: FaCommentDots,
    bg: "bg-white",
    text: "text-gray-900",
    path: "/myth-fact",
  },
  {
    title: "Healthy Recipes",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: FaAppleAlt,
    bg: "bg-red-500",
    text: "text-white",
    path: "/healthy-recipes",
  },
  {
    title: "Cooking Science",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: FaUtensils,
    bg: "bg-yellow-400",
    text: "text-white",
    path: "/cooking-science",
  },
  {
    title: "Food Safety",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: FaShieldAlt,
    bg: "bg-gray-900",
    text: "text-white",
    path: "/food-safety",
  },
  {
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: FaMicroscope,
    bg: "bg-green-700",
    text: "text-white",
    path: "/blog",
  },
];

const WhatWeCover = () => {
  return (
    <ScrollReveal>
      <section className="bg-green-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <div className="mb-3 h-1 w-7 bg-green-700"></div>

            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-green-700">What</span> We Cover
            </h2>

            <p className="mt-2 max-w-lg text-gray-700">
              From nutrition to cooking, we cover everything that matters in
              your daily food life.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <Link
                  to={topic.path}
                  key={index}
                  className={`${topic.bg} ${topic.text} rounded-xl p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg`}
                >
                  <Icon className="mx-auto text-5xl" />

                  <h3 className="mt-5 text-lg font-bold">{topic.title}</h3>

                  <p className="mt-2 text-sm leading-6">{topic.description}</p>

                  <span className="mx-auto mt-5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default WhatWeCover;
