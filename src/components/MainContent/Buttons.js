import React from 'react';

const Buttons = ({ title, paragraph, open, setOpen }) => {
    return (
        <div className={`buttons-container ${open ? 'open' : ''}`}>
            <div
                className={`hover:text-purple-600 text-sm ${open && 'text-purple-600'}`}
                onClick={() => setOpen(!open)}
            >
                {title}
            </div>

            {open && (
                <div className="content-container">
                    <hr className="my-4 border-t-2 border-gray-300" />
                    <p className="text-sm">{paragraph}</p>
                </div>
            )}
        </div>
    );
};

export default Buttons;
