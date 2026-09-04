"use client";

import { useState } from "react";

const lore = [
  {
    question: "Why computer science?",
    answer: "I was a curious kid playing video games and wanted to understand how things worked. Currently stuck down an awesome decade-long rabbit hole.",
  },
  {
    question: "Did you used to make YouTube videos?",
    answer: "Uhhhh no, idk what ur talking about (yes - video games)",
  },
  {
    question: "What does 'Outside the IDE' mean?",
    answer: "It is my extremely clever way of talking about the things I do when I'm not writing software.",
  },
  {
    question: "Thank you for visiting",
    answer: "“You're hired! I mean... you're welcome!”",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col max-w-5xl mx-auto px-4 py-4 sm:py-8 leading-5 font-sans">
      <section className="my-container">
        <h2 className="section-title">Lore</h2>

        <div>
          {lore.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`lore-dropdown ${
                  isOpen ? "lore-dropdown-open" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="lore-dropdown-button group"
                >
                  <span>{item.question}</span>

                  <span
                    className={`lore-dropdown-icon ${
                      isOpen ? "lore-dropdown-icon-open" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="lore-dropdown-answer">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}