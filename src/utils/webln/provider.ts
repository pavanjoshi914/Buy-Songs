/**
 * Everything needed to implement your own provider.
 */

 export interface WebLNNode {
    alias: string;
    pubkey: string;
    color?: string;
  }
  
  export interface GetInfoResponse {
    node: WebLNNode;
  }
  
  export interface SendPaymentResponse {
    preimage: string;
  }
  
  export interface RequestInvoiceArgs {
    amount?: string | number;
    defaultAmount?: string | number;
    minimumAmount?: string | number;
    maximumAmount?: string | number;
    defaultMemo?: string;
  }
  
  export interface KeysendArgs {
    destination: string;
    customRecords?: Record<string, string>;
    amount: string | number;
  }
  
  export interface RequestInvoiceResponse {
    paymentRequest: string;
  }
  
  export interface SignMessageResponse {
    message: string;
    signature: string;
  }
  
  export interface WebLNProvider {
    enable(): Promise<void>;
    getInfo(): Promise<GetInfoResponse>;
    sendPayment(paymentRequest: string, metadata?: string): Promise<SendPaymentResponse>;
    keysend(args: KeysendArgs): Promise<SendPaymentResponse>;
    makeInvoice(args: string | number | RequestInvoiceArgs): Promise<RequestInvoiceResponse>;
    signMessage(message: string): Promise<SignMessageResponse>;
    verifyMessage(signature: string, message: string): Promise<void>;
  }
  