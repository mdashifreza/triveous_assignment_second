import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function FeaturedListCard({ data }) {
    const [current, setCurrent] = useState(0);

    const cardsToShow = 3;
    const visibleData = data.slice(current, current + cardsToShow);

    const previousSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent === 0 ? data.length - cardsToShow : prevCurrent - 1));
    };

    const nextSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent + cardsToShow >= data.length ? 0 : prevCurrent + 1));
    };
return (
    <div className='overflow-hidden relative m-10'>
            <h1 className='font-bold mb-3'>Featured List</h1>
            <div className={`flex space-x-2 transition ease-out duration-400`}
                style={{
                    transform: `translateX(-${current * (100 / cardsToShow)}%)`,
                }}>
                {
                    visibleData.map((item) => {
                        return (
                            <div key={item.id} className='text-sm p-3 border-2 border-gray-300 rounded-md md:w-1/3'>
                                <div className='cardHeader flex justify-between'>
                                    <div className='flex'>
                                        <div className="title ml-2 flex-col space-y-4">
                                            <div><h1>{item.title}</h1></div>
                                            <div className='flex space-x-1 text-xs'><h1>{item.organization}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-1 text-gray-500 text-xs p-0.5'>
                                    <p>{item.description}</p>
                                </div>
                                <div className='mt-3 flex space-x-1'>
                                    {item.logo.map((items, index)=>{
                                        return(
                                            <div key={index}>
                                                <img src={items} alt=""  className='h-5 w-5'/>
                                            </div>
                                        )
                                    })}
                                    <span className='text-xs items-center flex text-gray-500'>{"+20 More"}</span>
                                </div>
                                <div className='bottomCard flex justify-between items-center mt-3'>
                                    <div className='flex border-2 border-gray-200 p-1 rounded-md items-center'><img src={item.image} alt="" className='h-5 rounded-full'/><span>{item.badge}</span></div>
                                    <div className='flex items-center space-x-1 text-gray-500'><MdOutlineRemoveRedEye size={20} /><span>{item.views}{item.viewsCount}</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='absolute top-5 h-full w-full flex justify-between items-center text-gray-900'>
                <button onClick={previousSlide} >
                    <IoIosArrowBack size={25} />

                </button>
                <button onClick={nextSlide}>
                    <IoIosArrowForward size={25} />
                </button>
            </div>
        </div>
)
}
