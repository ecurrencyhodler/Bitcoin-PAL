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
### While waiting, a good use of time is to setup a new linux user to be able to install LND under that account, to ultimately do a keysend back and fourth in a private channel. You can run the following to generate a new user:
```bash
new_user='bitcoinpal' # Change if you want
sudo useradd -m $new_user
sudo passwd $new_user # Remember password
sudo usermod -G $(whoami) $new_user
```
### If your still waiting, educate yourself on the pros and cons of keysend vs typical invoicing:
```txt
* Typical invoicing (lnurl, lightning address, bolt11 invoice) requires the payee to first initiate creating an invoice with a predetermined amount.
* Typical invoices are not reusable; one time use.
* Keysend does not require interaction with payee, as the payer drafts the preimage.
* Keysend does not provide provability of transaction, which is needed for merchants. Bolt12 includes support for offers, a form of invoicing that is reusable.
* Keysend can only go to the public key of a valid lightning node. Thus, any users that don't run their own node cannot receive payment.
* The node runner of the payee must have `accept-keysend=1` in their config, or the payment fails.
* In summary, keysend is not practical for most transactions...yet. For now, it is best for donations, tipping, and compensating pull request contributors.
```
### Next step typically is to connect to some peers on the network. You can find some [here](https://1ml.com/search). At the same time, this project will be connecting to a peer on same machine, so optional, but standard part of process.
```bash
lncli connect <pub_key>@<pub_address>:<port>
``` 
#### TODO:
* document keysend
* script remotely calling keysend
* create GHA w/ proper trigger to then call keysend
