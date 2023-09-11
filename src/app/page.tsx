'use client'
import Top from "@/components/Top";
import {
    paperWallet,
    metamaskWallet,
    usePaperWallet,
    ThirdwebProvider,
} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

export default function Page()
{ 
    const activeChain = Sepolia
    
    return(
        // supportedWalletsに追加されている種類のものをあらかじめ指定し、ConnectWalletにその内容が反映される
        // Smart walletを使うためにThirdwebからClientIDを取得する必要あり。
        // Paper walletを使うためにPaperからClientIDを取得する必要あり。
        <ThirdwebProvider
        activeChain={activeChain}
        clientId={process.env.TW_CLIENT_ID}
        supportedWallets={[metamaskWallet(),
            paperWallet({
                paperClientId: process.env.PAPER_CLIENT_ID? process.env.PAPER_CLIENT_ID : "",
            }),
        ]}
      >
        <Top />
      </ThirdwebProvider>
    );
}