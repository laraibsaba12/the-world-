import { useEffect, useState } from "react";

const SplitText = ({
  text,
  className = "",
  delay = 50,
}) => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    setVisible([]);

    text.split("").forEach((_, index) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, index]);
      }, index * delay);
    });
  }, [text, delay]);

  return (
    <h1 className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            visible.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default SplitText;