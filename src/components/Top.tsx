import { ConnectWallet } from "@thirdweb-dev/react";
import { useConnect } from "@thirdweb-dev/react";
import { paperWallet } from "@thirdweb-dev/react";
const paperWalletConfig = paperWallet({
    paperClientId: process.env.PAPER_CLIENT_ID? process.env.PAPER_CLIENT_ID : '',
  });

export default function Top()
{
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