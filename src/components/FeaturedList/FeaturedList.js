import React from 'react';
import FeaturedListData from './FeaturedListData';
import FeaturedListCard from './FeaturedListCard';

export default function FeaturedList() {
    return (
        <div>
            <FeaturedListCard data = {FeaturedListData}/>
        </div>
    )
}
