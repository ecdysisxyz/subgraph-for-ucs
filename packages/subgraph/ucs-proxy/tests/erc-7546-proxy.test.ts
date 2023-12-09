import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { DictionaryUpgraded } from "../generated/schema"
import { DictionaryUpgraded as DictionaryUpgradedEvent } from "../generated/ERC7546Proxy/ERC7546Proxy"
import { handleDictionaryUpgraded } from "../src/erc-7546-proxy"
import { createDictionaryUpgradedEvent } from "./erc-7546-proxy-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let dictionary = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newDictionaryUpgradedEvent = createDictionaryUpgradedEvent(dictionary)
    handleDictionaryUpgraded(newDictionaryUpgradedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DictionaryUpgraded created and stored", () => {
    assert.entityCount("DictionaryUpgraded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DictionaryUpgraded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dictionary",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
