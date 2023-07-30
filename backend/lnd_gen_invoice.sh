#!/bin/bash

if [ -z $1 ]; then
  echo "[ USAGE ] - Please pass argument for lightning address"
  echo "[ USAGE ] - ./lnd_gen_invoice.sh [lightning address] [(optional) memo] [(optional) sats]"
  exit 1
fi

MEMO=${2:-'Thank%20you%20for%20your%20contribution!'}
AMOUNT=${3:-'100'} # Sats to send
curl -s https://www.lnurlpay.com/$1/$AMOUNT?comment=$MEMO > invoiceToParse.html
INV=$(cat invoiceToParse.html | tr '"' '\n' | grep lnbc)
rm invoiceToParse.html
if [ -z $INV ]; then
  echo "[ ERROR ] - Invalid lightning address"
  exit 1
fi
echo $INV
