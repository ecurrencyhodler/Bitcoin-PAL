#!/bin/bash

if [ -z $1 ]; then
  echo "[ USAGE ] - Please pass argument for invoice" && exit 1
fi

lncli sendpayment --pay_req=$1 --force
