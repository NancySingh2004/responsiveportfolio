import React from 'react';

function SkillList({ src, skill }) {
  return (
    <span className="skillItem">
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
