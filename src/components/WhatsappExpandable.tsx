'use client'
import { WhatsappIcon } from 'react-share';

const openWhatsapp = () => {
	window.open("https://wa.me/2349044556688?text=Hello%20Pensphere%20");
}

// In paythru_pension the hover-to-expand behaviour only applies to in-app routes
// (/products, /admin, /salary, /dashboard). None exist on this landing site, so the
// "Chat On WhatsApp" label is always shown, matching paythru_pension's landing pages.
export const WhatsappIconExpandable = () => {
	return (
		<div
			className="flex flex-row justify-between items-center rounded-full fixed right-2 bottom-2 w-auto h-10 bg-[#25d366] cursor-pointer z-[999999] animate-pulse"
			onClick={openWhatsapp}>
			<WhatsappIcon
				className='rounded-full w-10 h-10 cursor-pointer'
				onClick={openWhatsapp}
			/>
			<p className="text-sm bold text-white mr-3 text-nowrap">
				Chat On WhatsApp
			</p>
		</div>
	);
};
