import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { DictionaryUpgraded } from "../generated/ERC7546Proxy/ERC7546Proxy"

export function createDictionaryUpgradedEvent(
  dictionary: Address
): DictionaryUpgraded {
  let dictionaryUpgradedEvent = changetype<DictionaryUpgraded>(newMockEvent())

  dictionaryUpgradedEvent.parameters = new Array()

  dictionaryUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "dictionary",
      ethereum.Value.fromAddress(dictionary)
    )
  )

  return dictionaryUpgradedEvent
}
