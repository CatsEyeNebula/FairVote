/*
*@description: 
*@author: Giessen giessen1186929039@gmail.com
*@date: 2023-01-10
*/
import { ethers } from "ethers";



export default {
    connectContract(contractaddress:string):ethers.Contract {
        const abi:string = '需要替换成真正的abi文件'
        const provider:ethers.providers.Web3Provider = new ethers.providers.Web3Provider(window.ethereum,"any");
        const signer:ethers.providers.JsonRpcSigner=  provider.getSigner();
        var voteContract:ethers.Contract = new ethers.Contract(contractaddress,abi,signer)
        return voteContract
},

    async checkIfRightChain(): Promise<void> {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x1' }],// ganache提供的测试网
            });
            console.log("testt")
        } catch (switchError) {
            // 这条链没被加进小狐狸会抛出异常
            if (switchError instanceof Error) {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            //测试用的自搭链
                            chainId: '0x1',
                            chainName: 'fortest',
                        },
                    ],
                });
                await ethereum.request({
                    method: 'wallet_switchEthereumChain', //换链
                    params: [{ chainId: '0x1' }],
                })
            }
        }
    },


    async checkIfWalletIsConnected(): Promise<string | undefined | void> {
        try {
            const { ethereum }: any = window;
            if (!ethereum) {
                alert("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            const accounts: string = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) {
                const account: string | undefined = accounts[0];
                console.log("Found an authorized account:", account);

                return account
            } else {
                console.log("No authorized account found");
                const accounts: string[] = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log("Connected", accounts[0]);
                return accounts[0]
            }
        } catch (error) {
            console.log(error);
        }
    },

    async connectWallet(): Promise<string | null | undefined | void> {
        try {
            const { ethereum }: any = window;
            if (!ethereum) {
                alert("Get MetaMask!");
                return null;
            }

            const accounts: string[] = await ethereum.request({
                method: "eth_requestAccounts",
            });

            console.log("Connected", accounts[0]);
            return accounts[0];
        } catch (error) {
            console.log(error);
        }
    },

    async signWithMetaMask():Promise<false | undefined | void> {
        const provider:ethers.providers.Web3Provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const signer:ethers.providers.JsonRpcSigner = provider.getSigner()
        let message:string = 'test message'//目前还未确定用什么来签名
        let signature:string = await signer.signMessage(message)
        let address:string = ethers.utils.verifyMessage(message,signature).toLowerCase()
        const accounts:string[] = await ethereum.request({
          method: "eth_requestAccounts",
        });
        if(address!=accounts[0]){
          console.log(accounts[0])
          console.log(address)
          console.log('验证不成功')
          return false
        }
        if(address == accounts[0]){
          console.log('验证成功')
        }
      }

}
