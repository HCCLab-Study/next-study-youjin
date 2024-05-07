export const researchScope = {
    title: "Research Scope (Products' Lifecycle)",
    items: [
        '설계 / 기획 : UX Design, Interaction Design',
        '개발 / 구현 : Web, Mobile, IoT, XR applications',
        '분석 : Human Activity Recognition, UX analytics, Causal Inference, AI applications (NLP, Vision, Voice)',
        '운영 : DevOps, MLOps, CXM'
    ],
};

export const applicationDomain = {
    title: 'Application Domain',
    items: [
        'Healthcare / Medical / Rehabilitation',
        'Education / Learning',
        'E-commerce',
        'Assistive Technology',
        'Automotive UX / Robot UX'
    ],
};

export default function ResearchField() {
    return (
        <div className="flex justify-center gap-12 mt-16">
            <div>
                <div className="font-semibold">{researchScope.title}</div>
                <ul className="list-disc ml-1 p-3 text-sm w-[28vw]">
                    {researchScope.items.map((item, index) => (
                        <li key={index} className="p-1">{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="font-semibold">{applicationDomain.title}</div>
                <ul className="list-disc ml-1 p-3 text-sm w-[28vw]">
                    {applicationDomain.items.map((item, index) => (
                        <li key={index} className="p-1">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}