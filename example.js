'use strict';

const puppeteer = require( 'puppeteer' );

const initialPage = 'https://statsregnskapet.dfo.no/departementer';

const selectors = [
    'div[id$="-bVMpYP"] article a',
    'div[id$="-KcazEUq"] article .dfo-widget-sm a'
];

( async () =>
{
    let selector;
    let handles;
    let handle;

    const width = 1024;
    const height = 1600;

    const browser = await puppeteer.launch(
    {
        'defaultViewport' : { 'width' : width, 'height' : height },headless: false
    });

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout( 90000 );

    await page.setViewport( { 'width' : width, 'height' : height } );

    await page.setUserAgent( 'UA-TEST' );

    // Load first page

    let stat = await page.goto( initialPage, { 'waitUntil' : 'domcontentloaded' } );

    // Click on selector 1 - works ok

    selector = selectors[0];
    await page.waitForSelector( selector );
    handles = await page.$$( selector );
    handle = handles[12];
    console.log( 'Clicking on: ', await page.evaluate( el => el.href, handle ) );
    await handle.click();  // OK

    await page.waitForNavigation();

    // Click that selector 2 - fails

    selector = selectors[1];
    await page.waitForSelector( selector );
    handles = await page.$$( selector );
    handle = handles[12];
    console.log( 'Clicking on: ', await page.evaluate( el => el.href, handle ) );
    await handle.click();

    await page.waitForNavigation();

    await browser.close();
})();