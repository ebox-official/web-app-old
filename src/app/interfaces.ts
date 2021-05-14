export interface Balance {
    wei: string;
    weiAllowance: string;
    decimals: string | number;
    decimalValue: string;
    decimalAllowance: string;
}

export interface TokenInfo {
    name: string;
    symbol: string;
    thumb: string;
    address: string;
    decimals: string | number;
}

export interface Box {
    readonly passHashHash: string;
    readonly recipient: string;
    readonly sender: string;
    readonly timestamp: string;
    readonly sendToken: string;
    readonly sendValue: string
    readonly requestToken: string;
    readonly requestValue: string;
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
    sendTokenAddress: string;
    sendDecimalValue: string;
    requestTokenAddress: string;
    requestDecimalValue: string;
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