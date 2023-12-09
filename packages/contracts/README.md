# UCS Contract Deploy

## How to use
0. Deploy & Verify UCS Contract, if needed. (e.g. deploy to Scroll Sepolia at `0x588332C62b37084b8eb82B568E7B1C31aa405Cc0`)
    ```bash
    forge script script/UCSDeploy.s.sol --rpc-url scroll_sepolia --broadcast --verify --verifier-url https://api-sepolia.scrollscan.com/api --etherscan-api-key $SCROLLSCAN_SEPOLIA_KEY
    ```

1. Create UCS Proxy using UCS Contract.
    ```bash
    forge script script/UCSCreate.s.sol --rpc-url scroll_sepolia --broadcast --verify --verifier-url https://api-sepolia.scrollscan.com/api --etherscan-api-key $SCROLLSCAN_SEPOLIA_KEY
    ```
