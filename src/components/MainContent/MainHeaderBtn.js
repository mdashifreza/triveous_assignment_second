import React from 'react';

export default function MainHeaderBtn({Icon, title, handlebtn}) {
    const handleClick= ()=>{
        handlebtn();
    }
return (
    <div className='bg-purple-800 text-white font-semibold p-2 rounded-md flex items-center'onClick={handleClick}> {Icon && <Icon />}{title}</div>
)
}
