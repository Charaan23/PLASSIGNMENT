import React, { useRef } from 'react';
import './Tooltip.css';

const Tooltip = ({ target, position, text, style, image }) => {
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    const targetElement = document.getElementById(target);
    if (!targetElement || !tooltipRef.current) return;

    const targetRect = targetElement.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let left, top;

    switch (position) {

      case 'center':
        left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
        top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
        break;
      default:
        break;
    }

    tooltipRef.current.style.left = left + 'px';
    tooltipRef.current.style.top = top + 'px';
  };

  return (
    <div className={`tooltip-container ${position}`} onMouseEnter={handleMouseEnter}>
      <button className="btn" id={target} style={{ color: 'black', background: 'white' }}>
        {position === 'center' ? 'Center' : position.replace('-', ' ').replace(/^\w/, (c) => c.toUpperCase())}
      </button>
      <span className="tooltip" ref={tooltipRef} style={style}>
        {text}
        {image && <img src={image} alt="" className="tooltip-image" />}
        {position !== 'center' && (
          <div className={`tooltip-arrow ${position}`} style={{ borderWidth: style.width, height: style.width }}></div>
        )}
      </span>
    </div>
  );
};

export default Tooltip;
