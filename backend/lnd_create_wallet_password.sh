#!/bin/bash

# Make folder if not already there from mount
if [ -f ~/.lnd/wallet_password ]; then
  echo "[ ERROR ] - Wallet password already exists in ~/.lnd/wallet_password" && exit 1
fi

openssl rand -hex 21 > ~/.lnd/wallet_password
chmod 0400 ~/.lnd/wallet_password # Ensure only user who created can access file
cat ~/.lnd/wallet_password
