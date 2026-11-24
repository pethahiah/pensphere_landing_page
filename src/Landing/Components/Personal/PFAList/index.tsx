import { PFALogos } from "../../../../assets"

const getPfaName = (url: string) => {
    const fileName = url.split('/').pop()?.split('_')[0] || '';
    if (!fileName) return 'Pension Fund Administrator';
    return fileName.charAt(0).toUpperCase() + fileName.slice(1);
};

const PFAList = () => {
    return (
        <section className="w-screen flex flex-col items-center py-14" id="pfas">
            <p className="bg-[#0898A01A] px-6 py-2 rounded-full text-sm font-medium font-Onest mb-4">OUR PARTNERS</p>
            <h2 className="font-Onest text-2xl md:text-3xl font-medium text-center max-w-[600px] px-4 mb-10">
                Integrated with Pension Fund Administrators and Custodians across Nigeria
            </h2>
            <div className="w-full flex flex-wrap items-center justify-around sm:justify-start px-[4%]">
                {
                    PFALogos.map((pfa, index) => (
                        <div key={index} className="w-[45%] sm:w-[25%] md:w-[20%] flex justify-center items-center my-[20px]">
                            <img
                                src={pfa}
                                alt={`${getPfaName(pfa)} logo`}
                                title={getPfaName(pfa)}
                                className="w-[150px] max-w-full h-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default PFAList;
