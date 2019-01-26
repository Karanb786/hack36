var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = 
{
    networks: 
    {
	    development: 
		{
	   		host: "localhost",
	   		port: 8545,
	   		network_id: "4" // Match any network id
		},
    	rinkeby: {
    	    provider: function() {
		      var mnemonic = "steel neither fatigue ...";//put ETH wallet 12 mnemonic code	
		      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/8U0AE4DUGSh8lVO3zmma");
		    },
		    network_id: '4',
		    from: '0x1Ea8A0e32626c3d43430079684cAA3094ac48b39',/*ETH wallet 12 mnemonic code wallet address*/
		}  
    }
};