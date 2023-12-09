// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {Script, console2} from "forge-std/Script.sol";
import {UCS} from "@ucs-ops/src/UCS.sol";
import {UCSDeploySequence} from "@ucs-ops/script/UCSDeploySequence.sol";

contract UCSDeployScript is Script {
    uint256 deployerPrivateKey;

    function setUp() public {
        deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);

        address ucs = UCSDeploySequence.deployUCS();

        console2.log("UCS Contract Deployed: ", ucs);
    }

}
