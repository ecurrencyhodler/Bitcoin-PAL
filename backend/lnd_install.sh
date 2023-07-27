#!/bin/bash

# https://github.com/lightningnetwork/lnd/releases

cd $HOME # Install to current user
if [ -z $(which lnd) ]; then
  installing_in=${PWD}
  latest_release="lnd-linux-amd64-v0.16.4-beta.tar.gz"
  wget https://github.com/lightningnetwork/lnd/releases/download/v0.16.4-beta/$latest_release
  tar -xvf $latest_release
  rm $latest_release
  echo "export PATH=$PATH:$installing_in" >> ~/.bashrc
  source ~/.bashrc # Runs beginning of each user session
fi

# Set config
lnd_conf=~/.lnd/lnd.conf
if [ -f $lnd_conf ]; then
  echo "[ WARN ] - Config already exists in "$lnd_conf
  exit 1
fi

mkdir ~/.lnd && touch $lnd_conf
public_ip=$(curl ifconfig.me)
# Prevent port conflict basing off user id
grpc_port=$((10009 - 1000 + $(id -u)))
listen_port=$((9735 - 1000 + $(id -u)))
alias_number=$($(id -u) - 1000)
cat >$lnd_conf <<EOF
[Application Options]
# Allow push payments
accept-keysend=1

# Public network name
alias=bitcoinpal_$alias_number

# Allow gift routes
allow-circular-route=1

# Public hex color
color=#000000

# Reduce the cooperative close chain fee
coop-close-target-confs=1000

# Log levels
debuglevel=CNCT=debug,CRTR=debug,HSWC=debug,NTFN=debug,RPCS=debug

# Public P2P IP (remove this if using Tor)
externalip=$public_ip

# Mark unpayable, unpaid invoices as deleted
gc-canceled-invoices-on-startup=1
gc-canceled-invoices-on-the-fly=1

# Avoid historical graph data sync
ignore-historical-gossip-filters=1

# Listen (not using Tor? Remove this)
listen=0.0.0.0:$listen_port

# Set the maximum amount of commit fees in a channel
max-channel-fee-allocation=1.0

# Set the max timeout blocks of a payment
max-cltv-expiry=5000

# Allow commitment fee to rise on anchor channels
max-commit-fee-rate-anchors=100

# Pending channel limit
maxpendingchannels=10

# Min inbound channel limit
minchansize=5000000

# gRPC socket binding
rpclisten=0.0.0.0:$grpc_port

# Avoid high startup overhead
stagger-initial-reconnect=1

# Delete and recreate RPC TLS certificate when details change or cert expires
tlsautorefresh=1

# Do not include IPs in the RPC TLS certificate
tlsdisableautofill=1

# Add DNS to the RPC TLS certificate
tlsextradomain=YOUR_DOMAIN_NAME

# The full path to a file (or pipe/device) that contains the password for unlocking the wallet
# Add this to the config file after you have created a wallet
# wallet-unlock-password-file=/home/ubuntu/.lnd/wallet_password

[Bitcoin]
# Turn on Bitcoin mode
bitcoin.active=1

# Set the channel confs to wait for channels
bitcoin.defaultchanconfs=2

# Forward fee rate in parts per million
bitcoin.feerate=1000

# Set bitcoin.testnet=1 or bitcoin.mainnet=1 as appropriate
bitcoin.mainnet=1

# Set the lower bound for HTLCs
bitcoin.minhtlc=1

# Set backing node, bitcoin.node=neutrino or bitcoin.node=bitcoind
bitcoin.node=bitcoind

# Set CLTV forwarding delta time
bitcoin.timelockdelta=144

[bitcoind]
# Configuration for using Bitcoin Core backend

# Set the password to what the auth script said
bitcoind.rpcpass=bitcoinpal

# Set the username
bitcoind.rpcuser=bitcoinpal

## Set the ZMQ listeners
#bitcoind.zmqpubrawblock=tcp://127.0.0.1:28332
#bitcoind.zmqpubrawtx=tcp://127.0.0.1:28333
bitcoind.rpcpolling=true

[bolt]
# Enable database compaction when restarting
db.bolt.auto-compact=true

[db]
# Avoid watchtower specific data storage
db.no-rev-log-amt-data=true

[protocol]
# Enable large channels support
protocol.wumbo-channels=1

# Enable channel id hiding
protocol.option-scid-alias=true

[routerrpc]
# Set default chance of a hop success
routerrpc.apriori.hopprob=0.5

# Start to ignore nodes if they return many failures (set to 1 to turn off)
routerrpc.apriori.weight=0.75

# Set minimum desired savings of trying a cheaper path
routerrpc.attemptcost=10
routerrpc.attemptcostppm=10

# Set the number of historical routing records
routerrpc.maxmchistory=10000

# Set the min confidence in a path worth trying
routerrpc.minrtprob=0.005

# Set the time to forget past routing failures
routerrpc.apriori.penaltyhalflife=6h0m0s

[routing]
# Remove channels from graph that have one side that hasn't made announcements
routing.strictgraphpruning=1

EOF
