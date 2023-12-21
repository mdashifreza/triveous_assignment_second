import React, { useState } from 'react';
import MainData from './MainData';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import Buttons from './Buttons';
import MainHeaderBtn from './MainHeaderBtn';

export default function Main() {
    const [overviewOpen, setOverviewOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(true);
    const p1 = "OpenAl is an artificial intelligence research laboratory consisting of a team of world-class researchers and engineers focused on creating and advancing artificial intelligence in a safe and beneficial way for humanity. It was founded in December 2015 by several high-profile individuals in the tech industry, including Elon Musk, Sam Altman, Greg Brockman,and other.OpenAl is dedicated to advancing the field of artificial intelligence through research.";
    const p2 = "OpenAl is an artificial intelligence research laboratory consisting of a team of world-class researchers and engineers focused on creating and advancing artificial intelligence in a safe and beneficial way for humanity. It was founded in December 2015 by several high-profile individuals in the tech industry, including Elon Musk, Sam Altman, Greg Brockman,and other.OpenAl is dedicated to advancing the field of artificial intelligence through research.";
    const handleLike = () => {
        window.open('https://www.triveous.com/', '_blank');
    };
    const handleVisitSite = () => {
        window.open('https://www.triveous.com/', '_blank');
    };
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Shared content',
                    text: 'Check this out!',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            const shareText = encodeURIComponent('Check this out!');
            const shareUrl = encodeURIComponent(window.location.href);

            // WhatsApp
            const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;

            // Twitter
            const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

            // Open a popup with the share links
            const popup = window.open(
                `${whatsappUrl}\n${twitterUrl}`,
                'SharePopup',
                'width=600,height=400'
            );

            if (!popup) {
                console.error('Popup blocked. Please allow popups and try again.');
            }
        }
    };


    return (
        <div className='m-10'>
            {MainData.map((item) => (
                <div key={item.id} className='mb-8'>
                    <div className='Header flex justify-between'>
                        <div className='flex items-center space-x-4'>
                            <img src={item.logo} alt='' className='h-16 w-14' />
                            <div>
                                <h1 className='font-bold'>{item.title}</h1>
                                <h2 className='text-xs'>{'by OpenAI'}</h2>
                                <p className='text-xs text-gray-500 flex items-center space-x-1'>
                                    <span className='flex'>
                                        <FaRegHeart size={12} />
                                    </span>
                                    <span>{item.likesCount}</span>
                                    <span>{item.likes}</span>
                                    <span>
                                        <MdOutlineRemoveRedEye size={15} />
                                    </span>
                                    <span>{item.viewsCount}</span>
                                    <span>{item.view}</span>
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-2 sm:justify-end'>
                            <MainHeaderBtn
                                title={'Like'}
                                Icon={IoBookmarkSharp}
                                handlebtn={handleLike}
                            />
                            <MainHeaderBtn
                                title={'Visit Site'}
                                Icon={FaExternalLinkAlt}
                                handlebtn={handleVisitSite}
                            />
                            <MainHeaderBtn
                                title={'Share'}
                                Icon={CiShare2}
                                handlebtn={handleShare}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex flex-col sm:flex-row justify-start mt-5 space-x-2'>
                <Buttons
                    title='Overview'
                    paragraph={p1}
                    open={overviewOpen}
                    setOpen={setOverviewOpen}
                />
                <Buttons
                    title='About OpenAI'
                    paragraph={p2}
                    open={aboutOpen}
                    setOpen={setAboutOpen}
                />
            </div>
        </div>
    )
}
