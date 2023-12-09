// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {Script, console2} from "forge-std/Script.sol";
import {UCS} from "@ucs-ops/src/UCS.sol";
import {IDefaultOps} from "@ucs-ops/src/interfaces/IDefaultOps.sol";
import {CloneOp} from "@ucs-ops/src/ops/CloneOp.sol";

contract UpdateCloneOpScript is Script {
    uint256 deployerPrivateKey;
    address proxyAddr;

    function setUp() public {
        deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        proxyAddr = vm.envAddress("SCROLL_SEPOLIA_PROXY");
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);

        address cloneOp = address(new CloneOp());
        IDefaultOps(proxyAddr).setImplementation(CloneOp.clone.selector, cloneOp);
        console2.log("New Clone: ", cloneOp);
    }

}
