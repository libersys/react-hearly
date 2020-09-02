import React from 'react';
import useHearly from './useHearly';

export interface HearlyButtonProps {
    clientId: string;
    // loading?: React.ComponentType<any>;
    loadingText?: string;
    idleButtonText?: string;
    talkingButtonText?: string;
}

export const HearlyButton: React.FC<
    HearlyButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ clientId, loadingText, idleButtonText, talkingButtonText, ...rest }): React.ReactElement => {
    const { isReady, isTalking, start, end } = useHearly(clientId);

    return (
        <>
            {isReady ? (
                <button {...rest} onClick={isTalking ? end : start}>
                    {isTalking ? talkingButtonText : idleButtonText}
                </button>
            ) : (
                <div>{loadingText}</div>
            )}
        </>
    );
};

HearlyButton.defaultProps = {
    loadingText: 'Loading...',
    idleButtonText: 'Start Conversation',
    talkingButtonText: 'End Conversation',
};

export default HearlyButton;
