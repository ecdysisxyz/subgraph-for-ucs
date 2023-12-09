// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {Script, console2} from "forge-std/Script.sol";
import {IDefaultOpsProxy} from "../src/IDefaultOpsProxy.sol";
import {IInitSetAdminOp} from "@ucs-ops/src/interfaces/ops/IInitSetAdminOp.sol";

contract UCSCloneScript is Script {
    uint256 deployerPrivateKey;
    address proxyAddr;
    address clonedProxyAdmin;

    function setUp() public {
        deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        proxyAddr = vm.envAddress("SCROLL_SEPOLIA_PROXY");
        clonedProxyAdmin = vm.envAddress("SCROLL_SEPOLIA_CLONED_PROXY_OWNER");
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);

        address ucsProxy = IDefaultOpsProxy(proxyAddr).clone(
            abi.encodeWithSelector(IInitSetAdminOp.initSetAdmin.selector, clonedProxyAdmin)
        );

        console2.log("UCS Proxy Cloned: ", ucsProxy);
    }

}
