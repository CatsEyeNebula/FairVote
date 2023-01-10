import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }

  interface RequestArguments {
    method: string;
    params?: unknown[] | object;
  }

  const {ethereum}:any = window
}