#!/usr/bin/env node

'use strict';

const path = require('path');
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

const files = glob.sync( `${ folder }/*.{png,jpg,jpeg,gif}` );

files.forEach( ( f, index ) => {
    const extname = path.extname( f );
    const n = `${ folder }/${ pad( index, 12 ) }${ extname }`;
    fs.renameSync( f, n );
} )
