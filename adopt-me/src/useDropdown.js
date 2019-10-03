import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdwon-${label.replace(" ", "").toLowerCase()}`;
    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select
                id={id}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                i
                disabled={options.length === 0}
            >
                <option>All</option>
                {options.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );
    return [state, Dropdown, setState];
};

export default useDropdown;
