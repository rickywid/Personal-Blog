---
title: Setting Up a Shared Folder with Samba
date: "2020-03-06"
description: How to setup a shared folder using Samba
---

*The following guide should only be used for personal and experimental purposes only. This is a barebones configuration demonstrating how to create a quick and easy setup. You will need to configure additional security if you plan on using the Fle Server in a professional work environement.*

Directly from Samba's website:

> Samba is Free Software licensed under the GNU General Public License, the Samba project is a member of the Software Freedom Conservancy.

> Since 1992, Samba has provided secure, stable and fast file and print services for all clients using the SMB/CIFS protocol, such as all versions of DOS and Windows, OS/2, Linux and many others. 

Samba makes it easy for you to be able to create a File Server so you can share and access files between multiple computers on a local network. I will be discussing how to setup a shared folder on Fedora 31 that can be accessed by other Linux machines that are on the same local network. Although this guide is written for Fedora, you should still be able to follow along if you're using a different distro.

Here are the following steps we will perform.

1. Install Samba
2. Create a shared folder
3. Configure Samba
4. Configuring Samba's username and password
5. Restart the Samba server
6. Configure SELinux and firewall settings (Fedora only)
7. Accessing your shared folder from another computer

### Install Samba
`$ sudo dnf install -y samba`

Confirm installation:

`$ smbd -v`

### Create a Shared Folder
I will create a shared folder inside my **/home directory**. You can choose a different location if you prefer.

`$ mkdir /home/rickyjw/Shared`

Create a test file inside the shared folder.

*If you want users to be able to have write permissions on the shared folder, you need modify the folder's permissions otherwise the folder will be readonly:*

`$ chmod 777 /home/rickyjw/Shared`

### Configure Samba's Configuration File
We need to edit Samba's configuration file where we can define the pathname of our shared folder and other settings. Samba's configuration file is stored inside **/etc/samba/smb.conf**.

First let's make a backup of the original configuration file.

`$ sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.backup`

Now that we have created a backup, we can edit the Samba configuration file. Open **/etc/samba/smb.conf** with your favourite text editor.

Add the following to the config file:

```
[Global]
	...
	unix extensions = no # allow symlinks

[Shared]
	comment = Shared Files
	path = /home/rickyjw/Shared (change pathname to your shared folder)
	browsable = yes
	read only = no
	wide links = yes # allow symlinks
	# guest ok = yes
```

*If you want users to be able to access the shared folder without having to log in, remove the commented out line "guest ok = yes"*

### Configuring Samba's Username and Password
We will create the username and password used to login and access the shared folder.

`$ smbpasswd -a <your_username> # this is the name of the user that is currently logged in`
*You will be asked to enter a password*

### Restart the Samba server
Before we restart the server, verify that your Samba configuration has been saved.

`$ sudo testparm`

It should display your Samba configuration file.

If the configuration file looks correct, restart the Samba server so that the new changes will be applied.

```
$ sudo service smb restart
$ sudo service smb status
```

### Configure SELinux and firewall settings
For Fedora users, you will have to configure SELinux and the firewall settings to allow the Samba service. You may have to do something similar on whichever distro you are currently using.

Change SELinux policy:

```
$ setsebool -P samba_enable_home_dirs on
$ restorecon -R /home/share
```

Configure firewall settings:

```
$ firewall-cmd --add-service=samba --permanent
$ firewall-cmd --reload
```

### Accessing Your Shared Folder from Another Computer
Let's try to connect to our shared folder from another computer. The computer must be on the same local network in order to connect. If your computers are connected through a home router then all devices should be connected to the same network.

Get the IP address of the Samba server:

`$ ifconfig # 192.168.0.18`

On the client machine, check if Samba is installed:

`$ smbd -V # Version 4.11.6`

If Samba is not installed, you need to install it:

`$ pacman -S samba`

*Use the appropriate package manager for your distro (apt, dnf etc..).*

On the client machine, open up your file manager and enter the following in the folder path bar:

`smb://192.168.0.18`

*This was tested on a Manjaro 19.*


If Samba was able to connect, you should be able to see your shared folder. Try opening it and it should then prompt you to enter the username and password that we setup earlier. If the login was successful, you should now be able to see the test file that we created.

Once again, this is a minimalistic configuration and should only be used for home/personal use and learning purposes. You have just learned how to setup a File Server that is accessible by other machines on your local network. 

If you have any questions or comments, please feel free to send me an email.


**Notes**

- [A Simple Beginners Guide to Setting up a Samba Share](https://www.bleepingcomputer.com/forums/t/598615/a-simple-beginners-guide-to-setting-up-a-samba-share/)
- [Samba Guide w/ Fedora 31](https://www.server-world.info/en/note?os=Fedora_31&p=samba&f=1)