import React, { Suspense } from 'react';
const AIC = React.lazy(() => import('AdditionalInformationCapability/AIC'));
const KycCapability = React.lazy(() => import('KycCapability/KycCapability'));
const RFA = React.lazy(() => import('RFA/RFA'));
const RFI = React.lazy(() => import('RFI/RFI'));
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

export const rfa = () => (
    <ErrorBoundary>
        <Suspense fallback={null}>
            <RFA />
        </Suspense>
    </ErrorBoundary>
)

export const rfi = () => (
    <ErrorBoundary>
        <Suspense fallback={null}>
            <RFI />
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
    {
        id: 'rfa',
        name: "RFA",
        appConfig: rfa,
    },
    {
        id: 'rfi',
        name: "RFI",
        appConfig: rfi,
    },
];

export const setUserAccess = (accessList) => {
    const newAccessList = accessList.map(item => appList.filter(i => i.id === item)[0]);
    console.log(newAccessList);
    return newAccessList;
}

export const user1 = [
    'rfi', 'rfa',
];

export const user2 = [
    'rfi', 'rfa', 'kyc_capability', 'additional_information_capability',
];
