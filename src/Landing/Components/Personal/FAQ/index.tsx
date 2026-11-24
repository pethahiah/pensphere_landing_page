'use client'
import { useState } from "react";
import Link from 'next/link';
import parse from 'html-react-parser';
import { icons } from "../../../../assets";


const faqs = [
    // {
    //   que: "What is the PenSphere Pension Remittance Platform?",
    //   ans: "The PenSphere Pension Remittance Platform is a secure online system that allows Employers to remit the Pension contributions of their employees to the account of the Pension fund Custodian and the Pension fund Custodian is simultaneously updated."
    // },
    {
        que: "What is PenSphere?",
        ans: "PenSphere is a Pension Remittance Platform designed for Employers to efficiently remit pension payments to Pension Funds Custodians, who manage Pension Funds Administrators."
    },
    {
        que: "Who can use PenSphere?",
        ans: "All employers are required to use PenSphere to remit pension payments."
    },
    {
        que: "How do I register on PenSphere?",
        ans: "Employers can register on PenSphere by visiting <a href='/#hero' className='text-teal-600 underline'> www.pensphere.ng </a>, clicking on Get Started, and following the registration process, which includes providing company information and uploading required documents."
    },
    {
        que: "How do I remit pension payments through PenSphere?",
        ans: "Employers can remit pension payments by logging into their PenSphere account, selecting the payment option, and uploading the required payment files. "
    },
    {
        que: "How long does it take for Pension Schedules to be processed?",
        ans: "Submitted Pension schedules are typically verified and processed within 30 minutes."
    },
    {
        que: "How secure is PenSphere?",
        ans: "PenSphere employs robust security measures including encryption and secure servers, to protect employer and employee data."
    },
];


const FAQ = (props: any) => {
    const usableFAQ = props.faqs || faqs;
    return (
        <div className="p-[6%] flex flex-col md:flex-row relative h-fit" id="faqs">
            <div className="flex flex-col justify-start items-start w-full md:w-6/12">
                <p className="bg-[#0898A01A] px-6 py-3 rounded-full text-sm font-medium mb-4">FAQ</p>
                <p className="font-Onest text-4xl leading-[46px] max-w-[400px] w-full my-4 text-left font-medium">
                    Let’s address some
                    common inquiries we
                    receive frequently
                </p>
                <Link href="/faqs" className="bg-az-teal text-white w-40 h-10 rounded-full font-bold font-Onest flex flex-row justify-center items-center hover:bg-[#0aa7b0] transition-colors">See all FAQs</Link>
            </div>
            <div className="w-full md:w-6/12 h-fit z-10">
                {
                    // @ts-ignore
                    usableFAQ.map((faq, index) => <FAQCard faq={faq} index={index} key={index} />)
                }
            </div>
            {/* <img src={Spiral} alt="" className="absolute left-0 bottom-0 z-0" /> */}
        </div>
    )
};

export default FAQ;

const FAQCard = ({ faq, index }: any) => {
    const [isOpen, setIsOpen] = useState(index === 0);
    const contentId = `faq-panel-${index}`;
    return (
        <div className="flex flex-col justify-start items-stretch py-6 border-b-2">
            <button
                type="button"
                className="flex flex-row justify-between items-start gap-4 text-left w-full cursor-pointer bg-transparent p-0 m-0 border-0"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="font-medium my-3 text-left">{faq.que}</p>
                <img
                    src={isOpen ? icons.close : icons.plus}
                    alt={isOpen ? 'Collapse answer' : 'Expand answer'}
                    className="mt-3 flex-shrink-0"
                />
            </button>
            {
                isOpen ? (
                    <div id={contentId}>
                        {parse(`<p className="text-left w-11/12 text-base">${faq.ans}</p>`)}
                    </div>
                ) : null
            }
            {
                (isOpen && faq.more) && (
                    <div className="flex flex-col justify-start items-start text-left mt-2">
                        {
                            faq.more.map((moreItm: any) => (
                                <div className="" key={moreItm.title}>
                                    <ul className="list-disc list-inside">
                                        <h2 className="font-bold">{moreItm.title}</h2>
                                        {
                                            // @ts-ignore
                                            moreItm.data.map(({ title, text }) => (
                                                <li className="my-2 pl-6" key={title}>
                                                    <span className="mr-1 text-[16px] font-medium">{title}</span>
                                                    <span className="text-sm font-normal">{text}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
