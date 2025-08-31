import { FormEvent, useState } from "react";
import PhoneNumberInput from "../../../components/PhoneNumberInput";
import { icons } from "../../../assets";

const ContactUsNew = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleDataChange = (field: string, value: string) => {
        return setData((prevState) => ({
            ...prevState,
            [field]: value
        }));
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        // submitInquiry({
        //     first_name: data.firstname,
        //     last_name: data.lastname,
        //     issue: data.message,
        //     phone_number: data.phone,
        //     email: data.email
        // }, () => {
        //     setLoading(false);
        //     setData({
        //         firstname: '',
        //         lastname: '',
        //         phone: '',
        //         email: '',
        //         message: ''
        //     })
        // }, setLoading)
    };

    const contactType = [
        {
            icon: icons.emailIcon,
            type: 'Email Address',
            detail: 'Our team is ready to assist you.',
            value: 'support@pethahiah.com',
            link: 'mailto:support@pethahiah.com'
        },
        {
            icon: icons.callIcon,
            type: 'Phone Number',
            detail: 'Our team is ready to assist you. Phone calls only.',
            value: '+234-916-643-1626',
            link: 'tel:2349166431626',
            orValue: "+2348093862639",
            orLink: "tel:2348093862639"
        },
        {
            icon: icons.callIcon,
            type: 'Office Address',
            detail: 'You can visit our main office.',
            value: `All Seasons Plaza, 24 Lateef  Jakande
            road Agidingbi, Ikeja Lagos.`,
            link: `https://www.google.com/maps/place/All+Season+Plaza/@6.6218558,3.3511803,17z/data=!3m1!4b1!4m6!3m5!1s0x103b93a6efc8020b:0xc54c73f5da9063e6!8m2!3d6.6218558!4d3.3537552!16s%2Fg%2F11hf06fczs?entry=ttu`
        },
        {
            icon: icons.msgIcon,
            type: 'Chat with us on WhatsApp',
            detail: 'We are accessible at all times on WhatsApp',
            value: 'Chat with us on +2349044556688',
            link: 'https://wa.me/2349044556688?text=Hello%20Penshere%20'
        }
    ]
    return (
        <div className='flex flex-col-reverse md:flex-row w-screen min-h-screen h-fit' id="contact">
            <div className="flex flex-col p-[6%] justify-center items-start w-full md:w-6/12 ">
                <p className="text-black w-fit text-left font-bold lg:text-4xl text-[26px] font-Onest rounded-md">How can we help you?</p>
                <p className="font-Onest my-10 text-left w-full md:w-[400px] text-black">
                    Seeking for the perfect service that aligns with your business needs?
                    Just fill out the contact form, and our friendly support team will be in
                    touch to assist you!
                </p>
                <div className="flex !w-full flex-row flex-wrap justify-between items-start">
                    {
                        contactType.map((typ) => (
                            <div key={typ.type} className=" flex flex-col justify-between items-start my-5">
                                <img src={typ.icon} alt="" className="my-2" />
                                <p className="text-base font-medium my-1">{typ.type}</p>
                                <p className="text-sm font-normal my-1">{typ.detail}</p>
                                <div className="flex flex-row gap-2">
                                    <a href={typ.link} className="text-sm font-normal underline text-[#0898A0] my-1 max-w-[250px] text-left cursor-pointer">{typ.value}</a>
                                    {
                                        typ.orValue && (
                                            <>
                                            <span>or</span>
                                            <a href={typ.orLink} className="text-sm font-normal underline text-[#0898A0] my-1 max-w-[250px] text-left cursor-pointer">{typ.orValue}</a>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col p-[6%] justify-center items-start w-full md:w-6/12">
                <p className="font-Onest my-10 text-base text-left w-full">
                    Kindly fill out the form below, we will get back to your shortly
                </p>
                <div className="flex flex-row w-full justify-between my-2">
                    <div className="flex flex-col w-5/12">
                        <label htmlFor="" className="font-Onest my-2 text-left">Firstname</label>
                        <input onChange={({ target }) => handleDataChange('firstname', target.value)} value={data.firstname} type="text" name="" placeholder="First name" id="" className="h-12 border rounded-md px-2 border-gray-[#DDDDDD]" required />
                    </div>
                    <div className="flex flex-col w-5/12">
                        <label htmlFor="" className="font-Onest my-2 text-left">Lastname</label>
                        <input onChange={({ target }) => handleDataChange('lastname', target.value)} value={data.lastname} type="text" name="" placeholder="First name" id="" className="h-12 border rounded-md px-2 border-gray-[#DDDDDD]" required />
                    </div>
                </div>
                <div className="flex flex-col w-full justify-between my-2">
                    <label htmlFor="" className="font-Onest my-2 text-left">Email</label>
                    <input onChange={({ target }) => handleDataChange('email', target.value)} value={data.email} type="text" placeholder="Email" name="" id="" className="h-12 border rounded-md px-2 border-gray-[#DDDDDD]" required />
                </div>
                <div className="flex flex-col w-full justify-between my-2">
                    <label htmlFor="" className="font-Onest my-2 text-left">Phone Number</label>
                    {/* <input onChange={({ target }) => handleDataChange('phone', target.value)} value={data.phone} type="text" placeholder="Phone Number" name="" id="" className="h-12 border rounded-md px-2 border-gray-[#DDDDDD]" required /> */}
                    <PhoneNumberInput border="border-gray-[#DDDDDD]" height={"12"} value={data.phone} required={true}
                        handleChange={(e) => handleDataChange('phone', e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full justify-between my-2">
                    <label htmlFor="" className="font-Onest my-2 text-left">How can we help?</label>
                    <div className="border w-full border-width border-transparent rounded-md p-0 mb-0">
                        <textarea onChange={({ target }) => handleDataChange('message', target.value)} value={data.message} className="border w-full border-width border-gray-[#DDDDDD] h-24 rounded-md m-0 mb-0 resize-none p-4" name="" id="" cols={30} rows={10} placeholder="Write your message here....." required></textarea>
                    </div>
                </div>
                <button disabled={loading} className="border border-black bg-[#0898A0] text-white w-52 h-10 rounded font-medium text-base font-Onest mt-10 flex flex-row justify-around items-center" type="submit">{loading ? 'Loading' : 'Submit message'} <img src={icons.ArrowRightWhite} alt="" /></button>
            </form>
        </div>
    )
};

export default ContactUsNew;
