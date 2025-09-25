import React from "react";

const Dropdown = ({ title, options, selected, setSelected }) => {
  return (
    <div className="relative w-full p-2">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="bg-zinc-800 text-white px-3 py-2 rounded-md cursor-pointer w-full"
      >
        <option value="" disabled>
          {title}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
