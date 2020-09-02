"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHearly = void 0;
const react_1 = require("react");
const initialState = {
    isReady: false,
    isTalking: false,
};
const url = 'https://sdk.hearly.io/js';
exports.useHearly = (clientId) => {
    const [state, setState] = react_1.useState(initialState);
    const { isReady, isTalking } = state;
    const hasWindow = () => typeof window !== 'undefined' && window !== undefined;
    const hasHearly = () => window.hearly !== undefined;
    const getElementId = () => clientId;
    const addSdk = () => {
        if (clientId === undefined || clientId.length === 0)
            return;
        const script = document.createElement('script');
        script.id = getElementId();
        script.type = 'text/javascript';
        script.src = `${url}?client_id=${clientId}`;
        script.async = true;
        script.onload = () => {
            if (!hasHearly())
                return;
            window.hearly.on('connected', () => {
                setState(Object.assign(Object.assign({}, state), { isReady: true }));
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
    react_1.useEffect(() => {
        if (hasWindow() && !hasHearly())
            addSdk();
        return function cleanup() {
            var _a;
            (_a = document.getElementById(getElementId())) === null || _a === void 0 ? void 0 : _a.remove();
            if (hasWindow() && hasHearly()) {
                window.hearly.destroy();
                delete window.hearly;
            }
        };
    }, [clientId]);
    const start = () => {
        if (!isReady)
            return;
        if (!window.hearly.isEstablished())
            window.hearly.call('dialogflow');
    };
    const end = () => {
        if (!isReady)
            return;
        if (window.hearly.isEstablished())
            window.hearly.hangup();
    };
    return {
        isReady,
        isTalking,
        start,
        end,
    };
};
exports.default = exports.useHearly;
