import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            // if element clicked on is inside dropdown component
            // .contains method belongs to all DOM methods
            if(ref.current.contains(event.target)) {
                return;
            }
            // console.log(event.target);
            // if not, then close the dropdown
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        //cleanup function if we stop showing dropdown component from screen
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

    }, []);

    const renderedOptions = options.map((option) => {


        // currently selected item does not appear in the dropdown list
        // null means to not render anything
        if (option.value === selected.value) {
            return null;
        }

        // shows selected color in the head of the dropdown
        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    // console.log(ref.current);
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dropdown;