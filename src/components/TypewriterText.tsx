import { useEffect, useState } from "react";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const TypewriterText = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1500,
}: TypewriterTextProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: number;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = window.setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = window.setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="text-portfolio-blue">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};
