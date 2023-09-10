import { Sepolia } from "@thirdweb-dev/chains";
import { ConnectWallet } from "@thirdweb-dev/react";
import { PaperWallet } from "@thirdweb-dev/wallets";

export default function Top()
{
    const paper_client_id = '17e4c431-fe3e-442a-a10f-d502bb9c04fc';
    const wallet = new PaperWallet({
        chain: Sepolia,
        paperClientId: paper_client_id,
    });
    
    const handleConnect = async () => {
        await wallet.connect();
    };

    return(<>
        <ConnectWallet
        theme="dark"
        btnTitle="Connect Wallet"
        />
        <button onClick={handleConnect}>Smart</button>
    </>);
}