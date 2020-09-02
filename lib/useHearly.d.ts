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
export declare const useHearly: (clientId: string) => Hearly;
export default useHearly;
