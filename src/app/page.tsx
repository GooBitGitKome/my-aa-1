'use client'
import Top from "@/components/Top";
import {
    paperWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    ThirdwebProvider,
} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
export const activeChain = Sepolia;

export default function Page()
{
    return(
        <ThirdwebProvider
            clientId="your-client-id"
            supportedWallets={[
                paperWallet({
                paperClientId: process.env.PAPER_CLIENT_ID? process.env.PAPER_CLIENT_ID : '',
                }),
            ]}
        >      
            <Top />
        </ThirdwebProvider>
        
        );
    }