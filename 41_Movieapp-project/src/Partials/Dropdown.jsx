import React from "react";

const Dropdown = ({ title, options, selected, setSelected }) => {
  return (
    <div className="relative w-full p-1"> {/* padding thoda kam kiya */}
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="appearance-none bg-zinc-800 text-white px-4 py-2 rounded-md cursor-pointer w-full"
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

      {/* Arrow */}
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        ▼
      </span>
    </div>
  );
};

export default Dropdown;
