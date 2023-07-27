#!/bin/bash

# Check that lnd is first running
pid_count=$(ps aux | grep lnd | wc -l)
if [ "$pid_count" == "2" ]; then
  echo "[ ERROR ] - lnd is not yet running. Kick it off with ~/lnd_start.sh" && exit 1
fi

# Create a wallet
lncli create
