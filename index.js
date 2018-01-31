#!/usr/bin/env node

'use strict';

const fs = require('fs');
const glob = require('glob');

const folder = process.argv[ 2 ];

if ( !folder || !fs.existsSync( folder ) ) {
    console.log( '[error]: folder not found.' );
}

const pad = function ( num, n ) {
    let length = num.toString( ).length;

    while ( length < n ) {
        num = '0' + num;
        length++;
    }

    return num;
}

const files = glob.sync( `${ folder }/*.png` );

files.forEach( ( f, index ) => {
    const n = `${ folder }/${ pad( index, 10 ) }.png`;
    fs.renameSync( f, n );
} )
