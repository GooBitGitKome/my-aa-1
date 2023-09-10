import { ConnectWallet } from "@thirdweb-dev/react";
import { useConnect } from "@thirdweb-dev/react";
import { paperWallet } from "@thirdweb-dev/react";

export default function Top()
{
    const paper_client_id = '17e4c431-fe3e-442a-a10f-d502bb9c04fc';
    const paperWalletConfig = paperWallet({
    paperClientId: paper_client_id,
  });
    const connect = useConnect();
    
    const handleConnect = async () => {
        await connect(paperWalletConfig);
    };

    return(<>
        <ConnectWallet
        theme="dark"
        btnTitle="Connect Wallet"
        />
        <button onClick={handleConnect}>Smart</button>
    </>);
}