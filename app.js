'use strict';

var moment = require('moment');
var execSync = require('child_process').execSync,
    child;

const myminer = "BURSTMining/mjminer-master/plot";    // Path to the subfolder with the mjminer
const burst_id = "17117098875997643477";              // your BURST ID - not your wallet adress.

const counts = 2;           // how many plots you want.. 
const start = 1100000000;  // 11 is a ongoing number for your drive and is followed by 8 zero´s for the first plot -> 11 00 000 000
const size = 4096;          // 1 GB = 4096 // 10 GB = 40960 // 50 GB 204800 // 100 GB = 409600
const memory = 8192;        // 8192 = 4 GB
const cores = 4;

const startdata = [];

const getStarts = function (counts) {
  console.log('Plotting has startet: ' + counts + ' Rounds with ' +  size + ' noncens ' );

  for (let i = 0; i < counts; i++) {

      const ergebnis = ((i * size) + start);
      const print_plotto = (ergebnis + size);
      startdata.push (ergebnis);

      // console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + ' Count : ' + [i] + ' startdata: ' + startdata[i]);
      console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + ' Count : ' + [i] + ' plot from: ' + ergebnis + ' to: ' + print_plotto );

      const child = execSync(myminer + ' -k ' + burst_id + ' -x 1 -d "/Volumes/Macintosh\ HD2/Plots/test" -s ' + ergebnis + ' -n ' + size + ' -m ' + memory + ' -t ' + cores , {maxBuffer: 1024 * 500})

  } // end for loop

  console.log('Plotting has finished: ' + counts + ' Rounds with ' +  size + ' noncens ' );

  return startdata;

}; // ende getStarts function

const starts = getStarts(counts);
