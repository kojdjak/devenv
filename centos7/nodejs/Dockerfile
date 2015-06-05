FROM centos:latest

MAINTAINER juraj.kojdjak@gmail.com

RUN yum install -y git

RUN yum install -y vim
RUN yum install -y wget
RUN wget ftp://195.220.108.108/linux/fedora/linux/development/rawhide/x86_64/os/Packages/v/vifm-0.7.8-1.fc22.x86_64.rpm
RUN yum install -y vifm-0.7.8-1.fc22.x86_64.rpm

ADD . /base_home/

COPY ./.conf/.vifm/vifmrc /root/.vifm/
COPY ./.conf/.vimrc /root/

RUN yum install -y zsh

RUN yum install -y epel-release
RUN yum install -y nodejs npm
RUN npm install -g express-generator

RUN mkdir /code
WORKDIR /code
RUN git clone https://github.com/supowski/devenv
WORKDIR /code/devenv
RUN git config user.email "juraj.kojdjak@gmail.com"


