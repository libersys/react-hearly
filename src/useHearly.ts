import { useEffect, useState } from 'react';

declare global {
    interface Window {
        hearly: any;
    }
}

export interface HearlyState {
    isReady: boolean;
    isTalking: boolean;
}

export interface Hearly extends HearlyState {
    start: () => void;
    end: () => void;
}

const initialState: HearlyState = {
    isReady: false,
    isTalking: false,
};

const url = 'https://sdk.hearly.io/js';

export const useHearly = (clientId: string): Hearly => {
    const [state, setState] = useState(initialState);
    const { isReady, isTalking } = state;

    const hasWindow = (): boolean => typeof window !== 'undefined' && window !== undefined;
    const hasHearly = (): boolean => window.hearly !== undefined;
    const getElementId = (): string => clientId;

    const addSdk = (): void => {
        if (clientId === undefined || clientId.length === 0) return;

        const script = document.createElement('script');
        script.id = getElementId();
        script.type = 'text/javascript';
        script.src = `${url}?client_id=${clientId}`;
        script.async = true;

        script.onload = () => {
            if (!hasHearly()) return;

            window.hearly.on('connected', () => {
                setState({ ...state, isReady: true });
            });
            window.hearly.on('sessionStarted', () => {
                setState({ isReady: true, isTalking: true });
            });
            window.hearly.on('sessionEnded', () => {
                setState({ isReady: true, isTalking: false });
            });
        };

        script.onerror = () => {
            throw new Error('Hearly SDK could not be loaded.');
        };

        document.body.appendChild(script);
    };

    useEffect(() => {
        if (hasWindow() && !hasHearly()) addSdk();

        return function cleanup() {
            document.getElementById(getElementId())?.remove();

            if (hasWindow() && hasHearly()) {
                window.hearly.destroy();
                delete window.hearly;
            }
        };
    }, [clientId]);

    const start = (): void => {
        if (!hasHearly()) return;
        if (!window.hearly.isReady()) return;
        if (!window.hearly.isTalking()) window.hearly.start();
    };

    const end = (): void => {
        if (!hasHearly()) return;
        // Could loss connection while session is established.
        // if (!window.hearly.isReady()) return;
        if (window.hearly.isTalking()) window.hearly.end();
    };

    return {
        isReady,
        isTalking,
        start,
        end,
    };
};

export default useHearly;
