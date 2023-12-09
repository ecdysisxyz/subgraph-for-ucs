import { DictionaryUpgraded as DictionaryUpgradedEvent } from "../generated/ERC7546Proxy/ERC7546Proxy"
import { DictionaryUpgraded } from "../generated/schema"

export function handleDictionaryUpgraded(event: DictionaryUpgradedEvent): void {
  let entity = new DictionaryUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dictionary = event.params.dictionary

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
