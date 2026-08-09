import { useState } from "react";

/** Accordion with one panel open at a time. `items` is an array of {q, a}. */
export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="faq" data-reveal>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={"faq__item" + (isOpen ? " is-open" : "")} key={i}>
            <button
              className="faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="faq__icon" aria-hidden="true"></span>
            </button>
            <div className="faq__a" aria-hidden={!isOpen}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
