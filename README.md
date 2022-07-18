# hippo-sdk

# Directories
- `src/config`: node configuration, allows us to specify which network/fullnode/contract to use.
- `src/generated`: TypeScript interface generated using [move-to-ts](https://github.com/hippospace/move-to-ts)
- `src/swap`: Hippo swap client SDK
- `src/tools`: command-line tools for developers
- `src/wallet`: Hippo wallet client SDK

# cli tool
We already deployed the contracts to Aptos devnet (for now, might be wiped out by the time you read this).

You can test the cli with:
```
yarn cli
yarn run v1.22.11
$ node dist/tools/index.js
Usage: hippo-cli [options] [command]

Hippo SDK cli tool.

Options:
  -c, --config <path>                         path to your aptos config.yml (generated with "aptos init")
  -p, --profile <PROFILE>                     aptos config profile to use (default: "default")
  -h, --help                                  display help for command

Commands:
  mock-deploy
  list-modules
  show-token-registry
  show-pools
  hit-faucet <coin-name> <raw-amount>
  show-wallet
  swap <from-coin> <to-coin> <raw-amount-in>
  help [command]                              display help for command
```

You need to provide an aptos config file through `-c` flag. When the node url contains "devnet" in it, the cli tool
automatically picks the deployed devnet contract address.

To get started, try these:
```
yarn cli -c YOUR_CONFIG_FILE test hippo-client
yarn cli -c YOUR_CONFIG_FILE test wallet-client
yarn cli -c YOUR_CONFIG_FILE test wallet-client-faucet BTC 1.1
yarn cli -c YOUR_CONFIG_FILE test wallet-client-faucet USDC 11000
yarn cli -c YOUR_CONFIG_FILE test add-liquidity BTC USDC 1 10000
yarn cli -c YOUR_CONFIG_FILE test swap BTC USDT 0.1
yarn cli -c YOUR_CONFIG_FILE test remove-liquidity BTC USDC 50
yarn cli -c YOUR_CONFIG_FILE test hippo-client
```
