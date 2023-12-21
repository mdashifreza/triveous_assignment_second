import React from 'react';
import MoreUsData from './MoreUsData';
import CardMoreUs from './CardMoreUs';

export default function MoreUs() {
    return (
        <div className='w-full'>
                <CardMoreUs data={MoreUsData} />
        </div>
    );
}
