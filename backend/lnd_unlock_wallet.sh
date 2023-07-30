#!/bin/bash

# No point unlocking wallet if password doesn't exist
if [ ! -f ~/.lnd/wallet_password ]; then
  echo "[ ERROR ] - Wallet password does not yet exist. Generate one with ~/.lnd_create_wallet_password" && exit 1
fi

echo $(cat ~/.lnd/wallet_password) | lncli unlock --stdin
