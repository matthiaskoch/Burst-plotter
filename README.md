# Burst-plotter

This is a Node.js app, that will help you to create hundreds off small plots for BURST Coin mining.


You need Node.js and NPM installed.


Download the folder and unzip it for example... to your Desktop.
Open a terminal and cd into the folder.
Type npm install

Download the plotter from ... and unzip it into a Subfolder of this app.
In my Case it is BURSTMining/mjminer-master


# How to plot:

You need a Burst Wallet and your Burst ID (not your wallet adress)
Check this before first start

counts = 2   
To test your system, start with less... later you can make 100.. or 1000..

start = 1100000000 // my ongoing number 11 for the elevent partition on x hdd´s.

For your first hdd and your first partition it will start by 1 followed by 8 zeros.
Every new Drive shout have its own number at first. So your second partition will start with 2 00 000 000.


size = 4096;         
This ist the size of a plot. Print small plots.
To calculate the number for a 1 GB Plot, multiple 1024 by 4.

memory = 8192;      
The amount of memory. Not sure whats best..

cores = 4;
The number of cpu threats. On a 4 core intel cpu, this will take 50% of cpu power.
Test it out.. I am also ok with 2, that means 25 % cpu power for me and will run nice at the background, but needs 100% more time than 4 threads.


Time to plot
On my 4 core intel i7 mac mini server with 16 GB Ram, a 1 GB plot with 4 threads will take a minute.
For a 100 GB plot with 4 threads it will take an our an 15 minutes.

If your plot 100 files with 1 GB, or 1 file with 100 GB, it needs the same time.
So make small plots.
