#!/bin/bash

# Check mounted and formatted drive exists:
if [ ! -d /blockchain ]; then
  echo "[ ERROR ] - The expected datadir '/blockchain' does not exist, or has improper permissions"
fi

# Detail available space for blockchain.
space_avail=$(df -H | grep blockchain | awk -F ' ' '{print $4}')
echo "[ INFO ] - Installing bitcoin core. Please be aware of current blockchain size to prevent a 'No Space on Disk' error. The available space mounted on /blockchain is: "$space_avail

# Installing v22
sudo wget https://bitcoin.org/bin/bitcoin-core-22.0/bitcoin-22.0-x86_64-linux-gnu.tar.gz
sudo tar xvf bitcoin-22.0-x86_64-linux-gnu.tar.gz
sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-22.0/bin/*

mkdir ~/.bitcoin
cat << EOF > ~/.bitcoin/bitcoin.conf
daemon=1
txindex=1
datadir=/blockchain
blocksdir=/blockchain/
rpcbind=0.0.0.0
rpcport=8332
rpcallowip=0.0.0.0/0
rpcuser=bitcoinpal
rpcpassword=bitcoinpal
rpcconnect=0.0.0.0
EOF
