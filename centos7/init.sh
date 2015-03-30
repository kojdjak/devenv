#!/bin/sh

#update first
yum -y update

#install wget
yum -y install wget

#install vim and similar tools
yum -y install vim
wget ftp://195.220.108.108/linux/fedora/linux/development/rawhide/x86_64/os/Packages/v/vifm-0.7.8-1.fc22.x86_64.rpm
yum -y install vifm-0.7.8-1.fc22.x86_64.rpm

