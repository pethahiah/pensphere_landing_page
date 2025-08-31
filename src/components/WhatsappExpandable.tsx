'use client'
import { WhatsappIcon } from 'react-share';

export const WhatsappIconExpandable = () => {

const openWhatsapp = () => {
  window.open("https://wa.me/2349044556688?text=Hello%20Pensphere%20");
}
	return (
		<div
			className={`flex flex-row justify-between items-center rounded-full fixed right-2 bottom-2 w-auto h-10 bg-[#25d366]  cursor-pointer z-[999999] animate-pulse 
       group hover:animate-expand`}
			onClick={openWhatsapp}>
			<WhatsappIcon
				className='rounded-full w-10 h-10 cursor-pointer'
				onClick={openWhatsapp}
			/>
			<p
				className={`text-sm bold text-white mr-3 hidden w-0 overflow-hidden opacity-0  group-hover:flex group-hover:visible group-hover:w-auto group-hover:animate-fadeIn text-nowrap`}>
				Chat On WhatsApp
			</p>
		</div>
	);
};
