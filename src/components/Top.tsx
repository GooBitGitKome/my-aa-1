import { ConnectWallet } from "@thirdweb-dev/react";

export default function Top()
{
    // const paper_client_id = '17e4c431-fe3e-442a-a10f-d502bb9c04fc';
    // const wallet = new PaperEmbeddedWalletSdk({
    //     chain: 'Sepolia',
    //     clientId: paper_client_id,
    // })
    
    // const handleConnect = async () => {
    //     // logging in via the Paper modal
    //     const result = await wallet.auth.loginWithPaperModal();
    //     alert(result);
        
    // }

    return(<>
        <ConnectWallet
        theme="dark"
        btnTitle="Connect Wallet"
        />
        {/* <button onClick={handleConnect}>Smart</button> */}
    </>);
}