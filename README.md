Simple UI for docker
====================
Docker has a REST api called "Remote API" and the following steps will help to expose it in order to be used by a simple UI. The UI is a Beego app and the API is exposed through a reverse proxy.

![figure](README.files/figure.jpg)



How to expose the "Docker Remote API"
-------------------------------------
```bash
sudo nano /etc/systemd/system/docker.service.d/remote-api.conf
# add the following lines:
Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:4243 -H unix:///var/run/docker.sock
```


How to run
----------
This is a Beego app, so you have to go to your "Go"/src directory, clone this git project and launch it:
```bash
# something like this...
cd ~/gowork/src
git clone https://bitbucket.org/mnlab-dev/rpi_docker_ui.git
cd rpi_docker_ui
bee run watchall # this runs at port 8080
```