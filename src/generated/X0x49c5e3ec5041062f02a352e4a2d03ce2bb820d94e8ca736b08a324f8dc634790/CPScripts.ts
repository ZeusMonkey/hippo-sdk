import { HexString } from "aptos";
import bigInt from "big-integer";
import { AptosClient } from "aptos";
import { AptosAccount } from "aptos";
import { AptosVectorU8 } from "@manahippo/aptos-tsgen";
import { TypeTag } from "@manahippo/aptos-tsgen";
import { getTypeTagFullname } from "@manahippo/aptos-tsgen";
import { sendAndWait } from "@manahippo/aptos-tsgen";
import { buildPayload } from "@manahippo/aptos-tsgen";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";

export const moduleAddress = new HexString("0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790");
export const moduleName = "CPScripts";

export const E_LP_TOKEN_ALREADY_REGISTERED: bigInt.BigInteger = bigInt("7");
export const E_OUTPUT_LESS_THAN_MIN: bigInt.BigInteger = bigInt("3");
export const E_SWAP_NONZERO_INPUT_REQUIRED: bigInt.BigInteger = bigInt("2");
export const E_SWAP_ONLY_ONE_IN_ALLOWED: bigInt.BigInteger = bigInt("0");
export const E_SWAP_ONLY_ONE_OUT_ALLOWED: bigInt.BigInteger = bigInt("1");
export const E_TOKEN_REGISTRY_NOT_INITIALIZED: bigInt.BigInteger = bigInt("4");
export const E_TOKEN_X_NOT_REGISTERED: bigInt.BigInteger = bigInt("5");
export const E_TOKEN_Y_NOT_REGISTERED: bigInt.BigInteger = bigInt("6");

export async function create_token_pair_script(
  client: AptosClient,
  account: AptosAccount,
  fee_to: HexString,
  fee_on: boolean,
  lp_name: AptosVectorU8,
  lp_symbol: AptosVectorU8,
  lp_description: AptosVectorU8,
  lp_logo_url: AptosVectorU8,
  lp_project_url: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::create_token_pair_script",
    typeParamStrings,
    [
      fee_to,
      fee_on,
      lp_name.hex(),
      lp_symbol.hex(),
      lp_description.hex(),
      lp_logo_url.hex(),
      lp_project_url.hex(),
    ]
  );
}
export function build_payload_create_token_pair_script(
  fee_to: HexString,
  fee_on: boolean,
  lp_name: AptosVectorU8,
  lp_symbol: AptosVectorU8,
  lp_description: AptosVectorU8,
  lp_logo_url: AptosVectorU8,
  lp_project_url: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::create_token_pair_script",
    typeParamStrings,
    [
      fee_to,
      fee_on,
      lp_name.hex(),
      lp_symbol.hex(),
      lp_description.hex(),
      lp_logo_url.hex(),
      lp_project_url.hex(),
    ]
  );
}

export async function add_liquidity_script(
  client: AptosClient,
  account: AptosAccount,
  amount_x: bigInt.BigInteger,
  amount_y: bigInt.BigInteger,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::add_liquidity_script",
    typeParamStrings,
    [
      amount_x.toString(),
      amount_y.toString(),
    ]
  );
}
export function build_payload_add_liquidity_script(
  amount_x: bigInt.BigInteger,
  amount_y: bigInt.BigInteger,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::add_liquidity_script",
    typeParamStrings,
    [
      amount_x.toString(),
      amount_y.toString(),
    ]
  );
}

export async function remove_liquidity(
  client: AptosClient,
  account: AptosAccount,
  liquidity: bigInt.BigInteger,
  amount_x_min: bigInt.BigInteger,
  amount_y_min: bigInt.BigInteger,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::remove_liquidity",
    typeParamStrings,
    [
      liquidity.toString(),
      amount_x_min.toString(),
      amount_y_min.toString(),
    ]
  );
}
export function build_payload_remove_liquidity(
  liquidity: bigInt.BigInteger,
  amount_x_min: bigInt.BigInteger,
  amount_y_min: bigInt.BigInteger,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::remove_liquidity",
    typeParamStrings,
    [
      liquidity.toString(),
      amount_x_min.toString(),
      amount_y_min.toString(),
    ]
  );
}

export async function swap_script(
  client: AptosClient,
  account: AptosAccount,
  x_in: bigInt.BigInteger,
  y_in: bigInt.BigInteger,
  x_min_out: bigInt.BigInteger,
  y_min_out: bigInt.BigInteger,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::swap_script",
    typeParamStrings,
    [
      x_in.toString(),
      y_in.toString(),
      x_min_out.toString(),
      y_min_out.toString(),
    ]
  );
}
export function build_payload_swap_script(
  x_in: bigInt.BigInteger,
  y_in: bigInt.BigInteger,
  x_min_out: bigInt.BigInteger,
  y_min_out: bigInt.BigInteger,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::swap_script",
    typeParamStrings,
    [
      x_in.toString(),
      y_in.toString(),
      x_min_out.toString(),
      y_min_out.toString(),
    ]
  );
}

export async function mock_deploy_script(
  client: AptosClient,
  account: AptosAccount,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::mock_deploy_script",
    typeParamStrings,
    []
  );
}
export function build_payload_mock_deploy_script(
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790::CPScripts::mock_deploy_script",
    typeParamStrings,
    []
  );
}

export function loadParsers(repo: AptosParserRepo) {
}