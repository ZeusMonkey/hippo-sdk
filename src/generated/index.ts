import { AptosClient } from 'aptos';
import { AptosParserRepo, AptosLocalCache, AptosSyncedCache } from '@manahippo/move-to-ts';
import * as basiq from './basiq';
import * as coin_list from './coin_list';
import * as econia from './econia';
import * as hippo_aggregator from './hippo_aggregator';
import * as hippo_swap from './hippo_swap';
import * as liquidswap from './liquidswap';
import * as liquidswap_lp from './liquidswap_lp';
import * as stdlib from './stdlib';
import * as tortuga from './tortuga';
import * as u256 from './u256';
import * as uq64x64 from './uq64x64';

export * as basiq from './basiq';
export * as coin_list from './coin_list';
export * as econia from './econia';
export * as hippo_aggregator from './hippo_aggregator';
export * as hippo_swap from './hippo_swap';
export * as liquidswap from './liquidswap';
export * as liquidswap_lp from './liquidswap_lp';
export * as stdlib from './stdlib';
export * as tortuga from './tortuga';
export * as u256 from './u256';
export * as uq64x64 from './uq64x64';

export function getProjectRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  basiq.loadParsers(repo);
  coin_list.loadParsers(repo);
  econia.loadParsers(repo);
  hippo_aggregator.loadParsers(repo);
  hippo_swap.loadParsers(repo);
  liquidswap.loadParsers(repo);
  liquidswap_lp.loadParsers(repo);
  stdlib.loadParsers(repo);
  tortuga.loadParsers(repo);
  u256.loadParsers(repo);
  uq64x64.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}

export class App {
  parserRepo: AptosParserRepo;
  cache: AptosLocalCache;
  basiq: basiq.App;
  coin_list: coin_list.App;
  econia: econia.App;
  hippo_aggregator: hippo_aggregator.App;
  hippo_swap: hippo_swap.App;
  liquidswap: liquidswap.App;
  liquidswap_lp: liquidswap_lp.App;
  stdlib: stdlib.App;
  tortuga: tortuga.App;
  u256: u256.App;
  uq64x64: uq64x64.App;
  constructor(public client: AptosClient) {
    this.parserRepo = getProjectRepo();
    this.cache = new AptosLocalCache();
    this.basiq = new basiq.App(client, this.parserRepo, this.cache);
    this.coin_list = new coin_list.App(client, this.parserRepo, this.cache);
    this.econia = new econia.App(client, this.parserRepo, this.cache);
    this.hippo_aggregator = new hippo_aggregator.App(client, this.parserRepo, this.cache);
    this.hippo_swap = new hippo_swap.App(client, this.parserRepo, this.cache);
    this.liquidswap = new liquidswap.App(client, this.parserRepo, this.cache);
    this.liquidswap_lp = new liquidswap_lp.App(client, this.parserRepo, this.cache);
    this.stdlib = new stdlib.App(client, this.parserRepo, this.cache);
    this.tortuga = new tortuga.App(client, this.parserRepo, this.cache);
    this.u256 = new u256.App(client, this.parserRepo, this.cache);
    this.uq64x64 = new uq64x64.App(client, this.parserRepo, this.cache);
  }
}
