#!/bin/sh

#update first
yum -y update

#install git - this should already be done
yum -y install git

#install wget
yum -y install wget

#install vim and similar tools
yum -y install vim
wget ftp://195.220.108.108/linux/fedora/linux/development/rawhide/x86_64/os/Packages/v/vifm-0.7.8-1.fc22.x86_64.rpm
yum -y install vifm-0.7.8-1.fc22.x86_64.rpm

#install zsh
yum -y install zsh

#install ruby
#yum -y install ruby

