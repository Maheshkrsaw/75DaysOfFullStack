import React from "react";

const Dropdown = ({ title, options, selected, setSelected }) => {
  return (
    <div className="relative w-64 p-2">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full appearance-none bg-zinc-800 text-white px-3 py-2 pr-8 rounded-md cursor-pointer"
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

      {/* Arrow always inside the div */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white select-none">
        ▼
      </span>
    </div>
  );
};

export default Dropdown;
