import React, { useState } from 'react';
import '../css/Accordian.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }

  return (
<>
    <h1 style={{textAlign:'center'}}>Day 3</h1>
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
            className="accordion-title"
          >
            {item.title}
            {activeIndex === index ? (
              <FaChevronUp style={{ float: 'right' }} />
            ) : (
              <FaChevronDown style={{ float: 'right' }} />
            )}
          </button>

          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
    </>
  );
 
};

export default Accordion;
