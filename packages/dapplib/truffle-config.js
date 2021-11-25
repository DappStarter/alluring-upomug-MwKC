require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind puppy hunt hill flush gentle'; 
let testAccounts = [
"0x6c4e36353378fb42b26d321a56f68b0975ed9e68d107ca8c4bc92a06bc7a86f5",
"0x614295e0d4a22fff089d4ae042dd39a7006d87dd67d88ccd092684ee29e64931",
"0xb8833a21411953abd62f449cde25b26a9b8f85250a3bcc4286cfe8888e968b4d",
"0xd8880b80d96530c06c84ef888f8ef4d54fb87f3902ed5cd95249a0079fae0c15",
"0x0e29401765e19a5453106babb0901131d17e8775f125ebd9c45b3f8f9efd4036",
"0x0843a9db93c8a403426ee4bbf0010ffef368496f8f3fdf349b6ac6f4f36b6a9d",
"0xf4ed15ea3ce44812d3848f97ea549ded66adf144c89bb0a30dc8936adb34082b",
"0xf94925ce3394c403179add7b6386d0a5733e3265bf8dd8277800e49bb4efa40f",
"0xfc9fb6e3904009a17d6a638c9a6f2bad043d767140236d97cfd768fa7d7f62bd",
"0x4451ec4a834f6471b92100ab3578bc0eab3579413a6a8e618e4c6abbb7ccbf2b"
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
            gas: 8000000,
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


