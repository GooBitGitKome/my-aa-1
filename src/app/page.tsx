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
    const paper_client_id :string = '17e4c431-fe3e-442a-a10f-d502bb9c04fc';
    return(
        <ThirdwebProvider
            supportedWallets={[
                paperWallet({ 
                    paperClientId: paper_client_id,
                }),
            ]}
            activeChain = 'Sepolia'
            clientId = '51cb808944f76a774a2f20e8fa45f839'
        >
            <Top />
        </ThirdwebProvider>
        
    );
}