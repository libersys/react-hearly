import React from 'react';
export interface HearlyButtonProps {
    clientId: string;
    loadingText?: string;
    idleButtonText?: string;
    talkingButtonText?: string;
}
export declare const HearlyButton: React.FC<HearlyButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
export default HearlyButton;
