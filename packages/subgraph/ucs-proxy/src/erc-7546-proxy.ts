import { DictionaryUpgraded as DictionaryUpgradedEvent } from "../generated/ERC7546Proxy/ERC7546Proxy";
import {
    ImplementationSet as ImplementationSetEvent,
    ProxyCloned as ProxyClonedEvent,
    AdminSet as AdminSetEvent,
} from "../generated/ERC7546Proxy/IDefaultOps";
import { ClonedProxies as ClonedProxiesClass } from "../generated/templates";
import {
    Dictionary,
    ImplementationList,
    Operation,
    Admin,
    ClonedProxyList,
} from "../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleDictionaryUpgraded(event: DictionaryUpgradedEvent): void {
    let dictionaryId = "DictionaryId";
    let dictionary = Dictionary.load(dictionaryId);
    if (dictionary == null) {
        dictionary = new Dictionary(dictionaryId);
    }
    dictionary.dictionaryImplAddress = event.params.dictionary;

    let implementationListId = "ImplementationListId";
    let implementationList = ImplementationList.load(implementationListId);
    if (implementationList == null) {
        implementationList = new ImplementationList(implementationListId);
    }

    dictionary.implementationList = implementationListId;

    dictionary.blockNumber = event.block.number;
    dictionary.blockTimestamp = event.block.timestamp;
    dictionary.transactionHash = event.transaction.hash;

    dictionary.save();
}

export function handleAdminSet(event: AdminSetEvent): void {
    let entity = new Admin("AdminId");
    entity.admin = event.params.admin;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
}

export function handleProxyCloned(event: ProxyClonedEvent): void {
    ClonedProxiesClass.create(event.params.proxy);

    let clonedProxyListId = "ClonedProxyListId";
    let clonedProxyList = ClonedProxyList.load(clonedProxyListId);
    if (clonedProxyList == null) {
        clonedProxyList = new ClonedProxyList(clonedProxyListId);
        clonedProxyList.proxyAddresses = new Array<Bytes>(0);
    }

    let proxyAddresses = clonedProxyList.proxyAddresses;
    proxyAddresses.push(event.params.proxy);
    clonedProxyList.proxyAddresses = proxyAddresses;

    clonedProxyList.blockNumber = event.block.number;
    clonedProxyList.blockTimestamp = event.block.timestamp;
    clonedProxyList.transactionHash = event.transaction.hash;

    clonedProxyList.save();
}

export function handleImplementationSet(event: ImplementationSetEvent): void {
    let implementationListId = "ImplementationListId";
    let implementationList = ImplementationList.load(implementationListId);
    if (implementationList == null) {
        implementationList = new ImplementationList(implementationListId);
        implementationList.operations = new Array<Bytes>();
    }

    let operationId = event.params.selector;
    let operation = Operation.load(operationId);

    if (operation == null) {
        operation = new Operation(operationId);
        operation.selector = event.params.selector;
        operation.implementation = event.params.implementation;
        operation.save();

        let operations = implementationList.operations;
        operations.push(operationId);
        implementationList.operations = operations;
    } else {
        operation.selector = event.params.selector;
        operation.implementation = event.params.implementation;
        operation.save();
    }

    implementationList.blockNumber = event.block.number;
    implementationList.blockTimestamp = event.block.timestamp;
    implementationList.transactionHash = event.transaction.hash;

    implementationList.save();
}
