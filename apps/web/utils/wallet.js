import { ethers } from "ethers";

export default{

      //这里连接合约创建出合约实例
      //需要合约地址和合约abi
       connectContract(contractaddress) {
            const provider = new ethers.providers.Web3Provider(web3.currentProvider);
            const signer =  provider.getSigner();
            var voteContract = new ethers.Contract(contractaddress,abi,signer)
            return voteContract
    },

    async checkIfRightChain(){
        try {
            await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x539' }],// ganache提供的测试网
        });
          } catch (switchError) {
          // 这条链没被加进小狐狸会抛出异常
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    //测试用的自搭链
                    chainId: '0x539',
                    chainName: 'ganache',
                    rpcUrls: ['https://127.0.0.1:7545'] /* ganache */,
                  },
                ],
              });
              await ethereum.request({
              method: 'wallet_switchEthereumChain', //换链
              params: [{ chainId: '0x539' }],
        })
              await connectWallet()
            } catch (addError) {
            }
          }
        }
    },

    async checkIfWalletIsConnected(){
        try {
            const { ethereum } = window;
    
            if (!ethereum) {
              alert("Make sure you have metamask!");
              return;
            } else {
              console.log("We have the ethereum object", ethereum);
            }
    
            const accounts = await ethereum.request({ method: "eth_accounts" });
            
             if (accounts.length !== 0) {
              const account = accounts[0];
              console.log("Found an authorized account:", account);
              
              return account
            } else {
              console.log("No authorized account found");
              const accounts = await ethereum.request({
              method: "eth_requestAccounts",
            });
            console.log("Connected", accounts[0]);
            return accounts[0]
            }
          } catch (error) {
            console.log(error);
          }
    },

    async connectWallet(){
        try {
            const { ethereum } = window;
    
            if (!ethereum) {
              alert("Get MetaMask!");
              return null;
            }
    
            const accounts = await ethereum.request({
              method: "eth_requestAccounts",
            });
    
            console.log("Connected", accounts[0]);
            return accounts[0];
          } catch (error) {
            console.log(error);
          }
    },

    async signWithMetaMask(){
      const provider = new ethers.providers.Web3Provider(web3.currentProvider);
      const signer = provider.getSigner()
      let message = 'test message'//目前还未确定用什么来签名
      let signature = await signer.signMessage(message)
      let address = ethers.utils.verifyMessage(message,signature).toLowerCase()
      const accounts = await ethereum.request({
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