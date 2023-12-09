import { DictionaryUpgraded as DictionaryUpgradedEvent } from "../generated/ERC7546Proxy/ERC7546Proxy";
import {
    ImplementationSet as ImplementationSetEvent,
    ProxyCloned as ProxyClonedEvent,
    AdminSet as AdminSetEvent,
} from "../generated/ERC7546Proxy/IDefaultOps";
import { ClonedProxies as ClonedProxiesClass } from "../generated/templates";
import {
    Dictionary,
    ClonedProxies,
    Implementations,
    Operation,
    Admin,
} from "../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleDictionaryUpgraded(event: DictionaryUpgradedEvent): void {
    let entity = new Dictionary("DictionaryId");
    entity.dictionary = event.params.dictionary;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
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
}

export function handleImplementationSet(event: ImplementationSetEvent): void {
    let implementationsId = "ImplementationsId";
    let implementations = Implementations.load(implementationsId);
    if (implementations == null) {
        implementations = new Implementations(implementationsId);
        implementations.operations = new Array<Bytes>();
    }

    implementations.blockNumber = event.block.number;
    implementations.blockTimestamp = event.block.timestamp;
    implementations.transactionHash = event.transaction.hash;

    let operationId = event.params.selector;
    let operation = Operation.load(operationId);

    if (operation == null) {
        operation = new Operation(operationId);
        operation.selector = event.params.selector;
        operation.implementation = event.params.implementation;
        operation.save();

        if (implementations.operations != null) {
            (implementations.operations as Array<Bytes>).push(operationId);
        }
    } else {
        operation.selector = event.params.selector;
        operation.implementation = event.params.implementation;
        operation.save();
    }

    implementations.save();
}
