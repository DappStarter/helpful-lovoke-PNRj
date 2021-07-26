require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth random uphold hunt forest equal genuine'; 
let testAccounts = [
"0x61052a2110e972fe8942f29586ae10ccc33df89dc544e6ce5a4c28d0cc767b03",
"0xcda89e9e5f5662f99c66196bf0b638415ceeded0643212bff871bf7064fea95d",
"0xee21c0a59acb2990ad8bfe9a1e6ba13b31e5238fa282ae63650b0ad1151030ef",
"0xbe9e21ab47b0086121b295451e9caaa01aea93af827233929371298ad40a19f7",
"0x12c99ba9a0cc1aa58d61300ad2fb7360ca406cb50a307c637a57b2aeedc642ce",
"0x1ccb70b998226d51bfa6ccace8967a007fff6707ece976f1955d98b41a82fe91",
"0x5efdf55c098d88c045647d7d1aa838ec1f3448d5c7dda9e7efb26e35417683c9",
"0xde3c3317969f26c0a891215ebccc342b8c5e89739f0616b1509f451974a5f6a7",
"0x7571ba46486afb418643b1dade699ca7d1523b7c5c8ad918cf3cabf9769dfb5f",
"0xf1b27cad63dbe1935e856a2b67d1e2b60101c7b6428e38304792406dec8f96d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


