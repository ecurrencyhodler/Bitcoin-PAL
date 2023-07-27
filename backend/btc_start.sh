#!/bin/bash

# Ensure logs dir exists
if [ ! -d ~/bitcoinpal/logs ]; then
  mkdir -p ~/bitcoinpal/logs
fi

# Start bitcoin core
nohup bitcoind > ~/bitcoinpal/logs/bitcoind.out 2> ~/bitcoinpal/logs/bitcoind.err &
