# Payment Backend Documentation

### Ordered Dependencies:
### Project requires an x86 ubuntu server with 2 CPUs and 8GB of RAM. As of July 2023, a volume with 800GB+ need be attached for the blockchain. Storage must be formatted and mounted properly, as detailed below.
```bash
sudo parted -s -a optimal /dev/nvme1n1 mklabel gpt -- mkpart primary ext4 0% 100%
sudo mkfs.ext4 /dev/nvme1n1p1
sudo mount /dev/nvme1n1p1 /blockchain
sudo mkdir /blockchain
sudo chmod -R 777 /blockchain
```
### Next we need to have bitcoin-core installed and configured properly running in daemon mode. To expedite the process, run this:
```bash
./btc_install.sh
```
### Next we need to start the daemon with logs going to ~/bitcoinpal/logs:
```bash
./btc_start.sh
```
### Verify bitcoin-core is running by confirming output:
```bash
bitcoin-cli getblockcount
```
### Next, as we install lnd, we need to determine ports to open in the firewall. While the defaults remain, the installation script allows multiple users to install on the same machine, spewing the need to prevent port conflicts. Run the following to reveal, and open them up.
```bash
./lnd_fetch_ports_to_open.sh
```
### Now we are ready to install lnd. Run the following to setup LND to current user and set config.
```bash
./lnd_install.sh
```
### Before we can start LND, we need to create a wallet password:
```bash
./lnd_create_wallet_password.sh
```
### Now, start LND with logs going to ~/bitcoinpal/logs:
```bash
./lnd_start.sh
```
### At this point, we're ready to create a mnemonic seed phrase, which you MUST store securely.
```bash
./lnd_create_wallet_mnemonic.sh
```
### At this point, we must fund at least the minimum amount of millisats to be able to open a channel. The current minimum of that unit is 20000, or .0002 BTC. Generate a new Native Segwit address (most efficient type) with this, and then send at least the minimum for a channel to this address. This will take some time for block confirmation.
```bash
lncli newaddress p2wkh
```
### You can wait for funds to be settled by checking the real time balance with this command:
```bash
lncli walletbalance
```
### Next step typically is to connect to some peers on the network, and then open a channal. Note, some node runners set a minimum channel size above the minimum. You can find some [here](https://1ml.com/search). 
```bash
lncli connect <pub_key>@<pub_address>:<port>
lncli openchannel <pub_key> <millisats>
``` 
### Now that we have a channel open, lets talk about generating an invoice. The ideal scenario is to be able to send sats over lightning to an address like you can do with bitcoin on L1. The problem is, that an invoice is first required, and coordination between payer and payee is usually required. There is another option we explored called keysend. The problem with that is it can only be sent to a node runner's public key, not a lightning address using an external ligtning node. So we solved the problem! We managed to interact with LNURL to create an invoice ourself, providing the lightning address, amount, and memo! Now things get interesting. To generate an invoice, simply think of a lightning address, memo, and amount. Then run this:
```bash
./lnd_gen_invoice.sh [lightning address] [(optional) memo] [(optional) sats]
```
### Now for the most exciting part, sending the payment. All you have to do is run this:
```bash
./lnd_send_payment.sh [invoice]
```
### Want to get paid sats automatically during this hackathon? Simply submit a PR adding files to the source_documents/ directory, and include your lightning address in the PR title...GitHub Actions will take care of the rest. How you say? Look for yourself [here](https://github.com/ecurrencyhodler/Bitcoin-PAL/tree/main/.github/workflows). You will be rewarded for helping us crowdsource input data for BitcoinPAL! We will all benefit from an improved model.
