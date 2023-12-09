# UCS Contract Deploy

## How to use
1. Deploy UCS Contract, if needed. (e.g. deploy to Scroll Sepolia at `0x588332C62b37084b8eb82B568E7B1C31aa405Cc0`)
    ```bash
    % forge script script/UCSDeploy.s.sol --rpc-url scroll_sepolia --broadcast
    ```

2. Verify UCS Contract on Scrollscan.
    ```
    forge verify-contract 0x588332C62b37084b8eb82B568E7B1C31aa405Cc0 lib/ucs-ops/src/UCS.sol:UCS --verifier-url https://api-sepolia.scrollscan.com/api --etherscan-api-key <API-KEY> --constructor-args $(cast abi-encode "constructor(address,address,address)" 0xfa872492ea1ed98d53cca0E5C1f6b0263D4b8Bb4 0x1E36b5080FDDF0F6F4acf58DB29FB3105c7272e2 0x5fd0D4A4030FA8f69D28116D81E0145b8d9a037c)
    ```

1. Create UCS Proxy using UCS Contract.
    ```bash
    forge script script/UCSCreate.s.sol -vvvvv --rpc-url scroll_sepolia --broadcast
    ```
