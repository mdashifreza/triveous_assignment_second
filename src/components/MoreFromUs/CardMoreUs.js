import React, { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TfiMedall } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function CardMoreUs({ data }) {
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
            <h1 className='font-bold mb-3'>More From Us</h1>
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
                                        <img src={item.logo} alt="" className='h-14 w-14' />
                                        <div className="title ml-2 flex-col space-y-4">
                                            <div><h1>{item.title}</h1></div>
                                            <div className='flex space-x-1 text-xs'><h1>{item.organization}</h1>
                                            <h1 className='flex items-center'><GoDotFill/>{"Assistant"}</h1></div>
                                        </div>
                                    </div>
                                        <CiBookmark
                                            size={30}
                                        />
                                </div>
                                <div className='mt-5 text-gray-500 text-xs p-0.5'>
                                    <p>{item.description}</p>
                                </div>
                                <div className='bottomCard flex justify-between items-center mt-3'>
                                    <div className='flex border-2 border-gray-200 p-1 rounded-md items-center'><TfiMedall size={25} /><span>{item.badge}</span></div>
                                    <div className='flex items-center space-x-1 text-gray-500'><MdOutlineRemoveRedEye size={20} /><span>{item.views}{item.viewsCount}</span><span className='flex items-center'><CiBookmark size={20} className=''/>{item.bookmarks}{item.bookmarksCount}</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='absolute top-5 h-full w-full flex justify-between items-center text-gray-900'>
                <button onClick={previousSlide}>
                    <IoIosArrowBack size={25} />

                </button>
                <button onClick={nextSlide}>
                    <IoIosArrowForward size={25} />
                </button>
            </div>
        </div>
    );
}
