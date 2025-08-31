module.exports = [
"[project]/src/Landing/Components/Personal/FAQ/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/index.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
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
        que: "What credentials do I need to log in to PenSphere?",
        ans: "Employers will need their username and password to log in to PenSphere."
    },
    {
        que: "How do I remit pension payments through PenSphere?",
        ans: "Employers can remit pension payments by logging into their PenSphere account, selecting the payment option, and uploading the required payment files. "
    },
    {
        que: "What information is required for pension remittance?",
        ans: "Employers will need to provide employee information, pension contribution amounts, and payment details."
    },
    {
        que: "What payment methods are accepted on PenSphere?",
        ans: "Employers are expected to profile the account to be debited and provide the mandate to debit the account. This account will be used to remit payments directly to the PFC’s account."
    },
    {
        que: "How long does it take for Pension Schedules to be processed?",
        ans: "Submitted Pension schedules are typically verified and processed within 30 minutes."
    },
    {
        que: "Is PenSphere compliant with regulatory requirements?",
        ans: "Yes, PenSphere is designed to meet regulatory requirements for pension remittance."
    },
    {
        que: "How secure is PenSphere?",
        ans: "PenSphere employs robust security measures including encryption and secure servers, to protect employer and employee data."
    },
    {
        que: "What support options are available for PenSphere users?",
        ans: "Employers can contact PenSphere support via phone, email, or live chat."
    },
    {
        que: "How do I resolve pension schedule and payment processing issues?",
        ans: "Employers can contact PenSphere support to resolve pension schedule and payment processing issues."
    }
];
const FAQ = (props)=>{
    const usableFAQ = props.faqs || faqs;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-[6%] flex flex-col md:flex-row relative h-fit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-start items-start w-full md:w-6/12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "bg-[#0898A01A] px-6 py-3 rounded-full text-sm font-medium mb-4",
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-Onest text-4xl leading-[46px] max-w-[400px] w-full my-4 text-left font-medium",
                        children: "Let’s address some common inquiries we receive frequently"
                    }, void 0, false, {
                        fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-6/12 h-fit z-10",
                children: // @ts-ignore
                usableFAQ.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQCard, {
                        faq: faq,
                        index: index
                    }, index, false, {
                        fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                        lineNumber: 78,
                        columnNumber: 51
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FAQ;
const FAQCard = ({ faq, index })=>{
    const [isOpen, handleOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (index === 0) {
            handleOpen(true);
        }
    }, [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "faqs",
        className: "flex flex-col justify-start items-start py-6 relative cursor-pointer border-b-2",
        onClick: ()=>handleOpen(!isOpen),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium my-3 text-left",
                children: faq.que
            }, void 0, false, {
                fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(`<p className="text-left w-11/12 text-base">${faq.ans}</p>`) : null,
            isOpen && faq.more && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-start items-start text-left mt-2",
                children: faq.more.map((moreItm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold",
                                    children: moreItm.title
                                }, void 0, false, {
                                    fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                                    lineNumber: 107,
                                    columnNumber: 41
                                }, ("TURBOPACK compile-time value", void 0)),
                                // @ts-ignore
                                moreItm.data.map(({ title, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "my-2 pl-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-1 text-[16px] font-medium",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                                                lineNumber: 112,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-normal",
                                                children: text
                                            }, void 0, false, {
                                                fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                                                lineNumber: 113,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                                        lineNumber: 111,
                                        columnNumber: 49
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                            lineNumber: 106,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                        lineNumber: 105,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                lineNumber: 102,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "text-4xl absolute right-[20px] top-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"].close : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"].plus,
                    alt: "",
                    className: ""
                }, void 0, false, {
                    fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Landing/Components/Personal/FAQ/index.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=src_Landing_Components_Personal_FAQ_index_tsx_115470a3._.js.map