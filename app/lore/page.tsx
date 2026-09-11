"use client";

import { useState } from "react";

const lore = [
  {
    question: "Describe yourself in 3 words",
    answer: "Curious, passionate, and creative",
  },
  {
    question: "Why computer science?",
    answer: "I was a kid playing video games and wanted to know how they worked. Now I am stuck down an awesome decade-long rabbit hole\n\n I love problem solving and the excitement of figuring something it out \n\nPython was my first language I taught myself in high school. I remember the feeling I had when functions clicked in my head \n\nIt was like... something inside me... awakened",
  },
  {
    question: "What video games did you play?",
    answer: "Fortnite. I have the Black Knight, my biggest flex\n\nNostalgic games for me are New Super Mario Bros, Lego Star Wars, and Call of Duty Zombies"
  },
  {
    question: "What is your favorite thing you have built?",
    answer: "I built the website for my Dad's company!",
  },
  {
    question: "What else are you passionate about?",
    answer: "Music and guitar! Also being with friends and family",
  },
  {
    question: "Do you know anything cool on the guitar?",
    answer: "Thank you so much for asking! The coolest thing I know is the Hotel California riff, mess ups and all",
    flag: "riff"
  },
  {
    question: "Are you a twin?",
    answer: "Nope, I'm a triplet! That's right, there's three of us. Two boys and one girl",
  },
  {
    question: "What does 'Outside the IDE' mean?",
    answer: "It is my extremely clever way of talking about the things I do when I'm not writing software",
  },
  {
    question: "Thank you for visiting!",
    answer: "“You're so welcome!”",
  },
];

const renderFlagContent = (flag?: string) => {
  switch (flag) {
    case "riff":
      return <div className="mt-2">
              <audio controls className="w-100">
                <source src="/audio/hotel-riff.mp3" type="audio/mpeg" />
              </audio>
            </div>;

    case "somethingElse":
      return <div>Something else content</div>;


    default:
      return null;
  }
};

export default function Page() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  return (
    <main className="flex min-h-screen flex-col max-w-5xl mx-auto px-4 py-4 sm:py-8 leading-5 font-sans">
      <section className="my-container">
        <h2 className="section-title">Lore</h2>

        <div>
          {lore.map((item, index) => {
            const isOpen = openIndexes.has(index);

            return (
              <div
                key={item.question}
                className={`lore-dropdown ${
                  isOpen ? "lore-dropdown-open" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
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
                  className={`grid transition-[grid-template-rows] duration-100 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="lore-dropdown-answer whitespace-pre-line">
                      {item.answer}
                      {renderFlagContent(item.flag)}
                    </div>
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