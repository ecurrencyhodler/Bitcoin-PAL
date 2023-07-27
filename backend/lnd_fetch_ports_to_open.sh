#!/bin/bash

grpc_port=$((10009 - 1000 + $(id -u)))
echo "gRPC: "$grpc_port

listen_port=$((9735 - 1000 + $(id -u)))
echo "listen: "$listen_port

