// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminSet extends ethereum.Event {
  get params(): AdminSet__Params {
    return new AdminSet__Params(this);
  }
}

export class AdminSet__Params {
  _event: AdminSet;

  constructor(event: AdminSet) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DictionaryUpgraded extends ethereum.Event {
  get params(): DictionaryUpgraded__Params {
    return new DictionaryUpgraded__Params(this);
  }
}

export class DictionaryUpgraded__Params {
  _event: DictionaryUpgraded;

  constructor(event: DictionaryUpgraded) {
    this._event = event;
  }

  get dictionary(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ImplementationSet extends ethereum.Event {
  get params(): ImplementationSet__Params {
    return new ImplementationSet__Params(this);
  }
}

export class ImplementationSet__Params {
  _event: ImplementationSet;

  constructor(event: ImplementationSet) {
    this._event = event;
  }

  get selector(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get implementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProxyCloned extends ethereum.Event {
  get params(): ProxyCloned__Params {
    return new ProxyCloned__Params(this);
  }
}

export class ProxyCloned__Params {
  _event: ProxyCloned;

  constructor(event: ProxyCloned) {
    this._event = event;
  }

  get proxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class IDefaultOps extends ethereum.SmartContract {
  static bind(address: Address): IDefaultOps {
    return new IDefaultOps("IDefaultOps", address);
  }

  clone(initData: Bytes): Address {
    let result = super.call("clone", "clone(bytes):(address)", [
      ethereum.Value.fromBytes(initData)
    ]);

    return result[0].toAddress();
  }

  try_clone(initData: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("clone", "clone(bytes):(address)", [
      ethereum.Value.fromBytes(initData)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CloneCall extends ethereum.Call {
  get inputs(): CloneCall__Inputs {
    return new CloneCall__Inputs(this);
  }

  get outputs(): CloneCall__Outputs {
    return new CloneCall__Outputs(this);
  }
}

export class CloneCall__Inputs {
  _call: CloneCall;

  constructor(call: CloneCall) {
    this._call = call;
  }

  get initData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CloneCall__Outputs {
  _call: CloneCall;

  constructor(call: CloneCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class InitSetAdminCall extends ethereum.Call {
  get inputs(): InitSetAdminCall__Inputs {
    return new InitSetAdminCall__Inputs(this);
  }

  get outputs(): InitSetAdminCall__Outputs {
    return new InitSetAdminCall__Outputs(this);
  }
}

export class InitSetAdminCall__Inputs {
  _call: InitSetAdminCall;

  constructor(call: InitSetAdminCall) {
    this._call = call;
  }

  get admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitSetAdminCall__Outputs {
  _call: InitSetAdminCall;

  constructor(call: InitSetAdminCall) {
    this._call = call;
  }
}

export class SetImplementationCall extends ethereum.Call {
  get inputs(): SetImplementationCall__Inputs {
    return new SetImplementationCall__Inputs(this);
  }

  get outputs(): SetImplementationCall__Outputs {
    return new SetImplementationCall__Outputs(this);
  }
}

export class SetImplementationCall__Inputs {
  _call: SetImplementationCall;

  constructor(call: SetImplementationCall) {
    this._call = call;
  }

  get selector(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get implementation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetImplementationCall__Outputs {
  _call: SetImplementationCall;

  constructor(call: SetImplementationCall) {
    this._call = call;
  }
}
