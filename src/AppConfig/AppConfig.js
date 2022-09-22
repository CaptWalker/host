import React, { Suspense } from 'react';
const AIC = React.lazy(() => import('AdditionalInformationCapability/AIC'));
const KycCapability = React.lazy(() => import('KycCapability/KycCapability'));
const Content = React.lazy(() => import('Content/Content'));
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export const aic = () => (
    <ErrorBoundary>
        <Suspense fallback={null}>
            <AIC />
        </Suspense>
    </ErrorBoundary>
)

export const kycCapability = () => (
    <ErrorBoundary>
        <Suspense fallback={null}>
            <KycCapability />
        </Suspense>
    </ErrorBoundary>
)

export const content = (access) => (
    <ErrorBoundary>
        <Suspense fallback={null}>
            <Content access={access}/>
        </Suspense>
    </ErrorBoundary>
);

const appList = [
    {
        id: 'additional_information_capability',
        name: "Additional Information Capability",
        appConfig: aic,
    },
    {
        id: 'kyc_capability',
        name: "KYC Capability",
        appConfig: kycCapability,
    },
];

export const setUserAccess = (accessList) => {
    const newAccessList = accessList.map(item => appList.filter(i => i.id === item)[0]);
    console.log(newAccessList);
    return newAccessList;
}

export const cases = {
    case1: [
        'kyc_capability',
    ],
    case2: [ 'additional_information_capability', 'kyc_capability', ],
}
