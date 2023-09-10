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

export default function Page()
{ 
    const activeChain = Sepolia;
    const paper_client_id = '17e4c431-fe3e-442a-a10f-d502bb9c04fc';
    return(
        <ThirdwebProvider
            clientId="your-client-id"
            supportedWallets={[
                paperWallet({ 
                paperClientId: paper_client_id,
                }),
            ]}
        >
            <Top />
        </ThirdwebProvider>
        
    );
}