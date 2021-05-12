export interface Balance {
    wei: string;
    decimals: string | number;
    decimalValue: string;
    hasUnlimitedAllowance: boolean;
}

export interface TokenInfo {
    name: string;
    symbol: string;
    thumb: string;
    address: string;
    decimals: string | number;
}

export interface Box {
    readonly pass_hash_hash: string;
    readonly recipient: string;
    readonly sender: string;
    readonly timestamp: string;
    readonly send_token: string;
    readonly send_value: string
    readonly request_token: string;
    readonly request_value: string;
    readonly taken: boolean;
    index?: number;
    sendTokenInfo?: TokenInfo;
    requestTokenInfo?: TokenInfo;
    readableTimestamp?: string;
    sendDecimalValue?: string;
    requestDecimalValue?: string;
    addressBookName?: string;
}

export interface BoxInputs {
    password: string;
    recipient: string;
    sender: string;
    jsDate: Date;
    sendTokenAddress: string;
    sendDecimalValue: string;
    requestTokenAddress: string;
    requestDecimalValue: string;
}

export interface DateInfo {
    unixTimestamp: number;
    readableTimestamp: string;
    jsDate: Date;
}

export interface ToastData {
    type: string;
    message: string;
    duration: string;
}

export interface ConfirmOptions {
    dialogName?: string;
    message: string;
    confirmButtonName?: string;
    cancelButtonName?: string;
}

export interface PromptOptions {
    dialogName?: string;
    message: string;
    inputs: {
        [key: string]: PromptInput;
    };
    submitButtonName?: string;
    cancelButtonName?: string;
}

export interface PromptInput {
    type?: string;
    label: string;
    value?: string;
}