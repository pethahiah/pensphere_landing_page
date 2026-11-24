import Link from 'next/link';
import { icons } from '../../../../assets';

const steps = [
    {
        icon: icons.sheets,
        title: 'Upload your schedule',
        description: 'Fill out the validated Excel template with your employees’ pension details and upload it to PenSphere.',
    },
    {
        icon: icons.checkMark,
        title: 'Validate & confirm',
        description: 'Schedules are validated against PFA records, so errors are caught and confirmed before any payment is made.',
    },
    {
        icon: icons.bank,
        title: 'Remit with confidence',
        description: 'Pay from your profiled account — all PFAs and the PFC are updated simultaneously, with receipts for every remittance.',
    },
];

const HowItWorksStrip = () => {
    return (
        <section className="w-screen px-[6%] py-16 flex flex-col items-center bg-[#0898A008]">
            <p className="bg-[#0898A01A] text-az-teal px-6 py-2 rounded-full text-sm font-medium font-Onest mb-4">HOW IT WORKS</p>
            <h2 className="font-Onest text-2xl md:text-3xl font-medium text-center mb-12 max-w-[600px]">
                Remit pensions in three simple steps
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="flex flex-col items-start p-6 bg-white rounded-xl"
                            style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                        >
                            <div className="flex flex-row items-center gap-3 mb-4">
                                <span className="flex justify-center items-center rounded-full w-fit p-3 bg-[#0898A01A]">
                                    <img className="w-[24px] h-[24px]" src={step.icon} alt="" />
                                </span>
                                <span className="font-Onest text-sm font-medium text-gray-400">0{index + 1}</span>
                            </div>
                            <p className="font-Onest text-lg font-medium text-left mb-2">{step.title}</p>
                            <p className="font-Onest text-sm text-gray-600 text-left leading-relaxed">{step.description}</p>
                        </div>
                    ))
                }
            </div>
            <Link
                href="/how-it-works"
                className="font-Onest text-az-teal underline underline-offset-2 mt-8 text-sm font-medium hover:text-[#0aa7b0]"
            >
                See detailed walkthroughs and videos
            </Link>
        </section>
    );
};

export default HowItWorksStrip;
