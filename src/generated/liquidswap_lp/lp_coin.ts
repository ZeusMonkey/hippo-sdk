import * as $ from '@manahippo/move-to-ts';
import { AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache } from '@manahippo/move-to-ts';
import { U8, U64, U128 } from '@manahippo/move-to-ts';
import { u8, u64, u128 } from '@manahippo/move-to-ts';
import { TypeParamDeclType, FieldDeclType } from '@manahippo/move-to-ts';
import { AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag } from '@manahippo/move-to-ts';
import { OptionTransaction } from '@manahippo/move-to-ts';
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from 'aptos';
export const packageName = 'LiquidswapLP';
export const moduleAddress = new HexString('0x05a97986a9d031c4567e15b797be516910cfcb4156312482efc6a19c0a30c948');
export const moduleName = 'lp_coin';

export class LP {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = 'LP';
  static typeParameters: TypeParamDeclType[] = [
    { name: 'X', isPhantom: true },
    { name: 'Y', isPhantom: true },
    { name: 'Curve', isPhantom: true }
  ];
  static fields: FieldDeclType[] = [];

  constructor(proto: any, public typeTag: TypeTag) {}

  static LPParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): LP {
    const proto = $.parseStructProto(data, typeTag, repo, LP);
    return new LP(proto, typeTag);
  }

  static makeTag($p: TypeTag[]): StructTag {
    return new StructTag(moduleAddress, moduleName, 'LP', $p);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }
}
export function loadParsers(repo: AptosParserRepo) {
  repo.addParser('0x05a97986a9d031c4567e15b797be516910cfcb4156312482efc6a19c0a30c948::lp_coin::LP', LP.LPParser);
}
export class App {
  constructor(public client: AptosClient, public repo: AptosParserRepo, public cache: AptosLocalCache) {}
  get moduleAddress() {
    {
      return moduleAddress;
    }
  }
  get moduleName() {
    {
      return moduleName;
    }
  }
  get LP() {
    return LP;
  }
}
