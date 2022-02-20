const puppeteer = require('puppeteer');

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

(async () => {
  // LOGIN
  // const browser = await puppeteer.launch({ devtools: true });
  // const page = await browser.newPage();
  // //await page.setViewport({width: 800, height: 768})
  // await page.goto('http://localhost/eup/login',{ waitUntil: 'networkidle2'});
  // await page.type('#validationCustom05', 'appuser@tenex.io');
  // await page.click('button.tenex-cta-property');     
  // await page.waitForSelector('#pass_log_id');
  // await page.type('#pass_log_id', '1q2w3e4r5t');
  // await page.click('#pass_log_id');
  // await page.keyboard.press('Enter'); 
  // await page.screenshot({ path: 'tenex.png' });
  // await browser.close();

  // CONTACT US 
    // const browser = await puppeteer.launch({ devtools: true });
    // const page = await browser.newPage();
    // //await page.setViewport({width: 800, height: 768})
    // await page.goto('http://localhost/eup?cityId=11',{ waitUntil: 'networkidle2'});
    // await page.click('#sidenav-contactus');     
    // await page.type('input[name="name"]', 'John Deo11');
    // await page.type('input[name="email"]', 'johndeo@tenex.io');
    // await page.type('input[name="phoneNumber"]', '91919199');
    // await page.type('textarea[name="message"]', 'Hello my room ac is not working');
    // await page.focus('#contactus');
    // await page.keyboard.type('\n');
    // await page.waitForSelector(".js_toast");
    // await page.screenshot({ path: 'tenex.png' });
    // await browser.close();


    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //await page.setViewport({width: 1200, height: 720});
    await page.goto('http://localhost/eup/login',{ waitUntil: 'networkidle0'});
    await page.type('#validationCustom05', 'appuser@tenex.io');
    console.log('✓ Username entered');
    await page.click('button.tenex-cta-property');     
    await page.waitForSelector('#pass_log_id');
    await page.type('#pass_log_id', '1q2w3e4r5t');
    console.log('✓ Passsord entered');
    await page.click('#pass_log_id');
    await page.keyboard.press('Enter')
    // await Promise.all([
    //   await page.keyboard.press('Enter'),
    await page.waitForNavigation({ waitUntil: 'networkidle0' }),
    // ]);
    await page.evaluate(async (page) => {
      var xPathRes = document.evaluate('.//*[@id="allstepsection"]/div[4]/ul/li[2]/a/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      await xPathRes.singleNodeValue.click();
      
      setTimeout(async function(){ 
        var xPathRes1 = document.evaluate('/html/body/nav[4]/div[1]/div[1]/div[2]/div[2]/ul/li[1]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        await xPathRes1.singleNodeValue.click();
        await console.log('✓ SR screen open');
       },1000);

      setTimeout(async function(){ 
        var xPathRes2 = document.evaluate('/html/body/nav[4]/div[2]/a[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        await xPathRes2.singleNodeValue.click();
        console.log('✓ Option selected');
      },1000);

      // setTimeout(async function(){ 
      //   var xPathRes3 = document.evaluate('/html/body/nav[4]/div[1]/div[2]/div/div[2]/a/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      //   await xPathRes3.singleNodeValue.uploadFile('/Users/sunil/Desktop/sample1.png');
      // },2000);

      // setTimeout(async function(){ 
      //   var xPathRes3 = document.evaluate('/html/body/nav[4]/div[2]/a[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      //   await xPathRes3.singleNodeValue.click();
      // },2000);

      //skip
      setTimeout(async function(){ 
        var xPathRes3 = document.evaluate('/html/body/nav[4]/div[2]/div/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        await xPathRes3.singleNodeValue.click();
        console.log('✓ Skip selected');
      },2000);

      setTimeout(async function(){ 
        var xPathRes3 = document.evaluate('/html/body/nav[4]/div[1]/div[3]/div/div[2]/div/textarea', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        xPathRes3.singleNodeValue.innerHTML="Hello World"
        
      },2000);
      
      setTimeout(async function(){ 
        var xPathRes4 = document.evaluate('/html/body/nav[4]/div[2]/a[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        await xPathRes4.singleNodeValue.click();
        console.log('✓ Text inserted');
      },3000);

      setTimeout(async function(){ 
        var xPathRes5 = document.evaluate('/html/body/nav[4]/div[3]/div[3]/div/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        await xPathRes5.singleNodeValue.click();
        console.log('✓ Confirmed');
      },3000);

      setTimeout(async function(){ 
        await page.waitForSelector("#thankumessage",{visible: true});
        console.log('✓ Thankyou!!');
        await page.screenshot({ path: 'tenex.png',fullPage: true });
      },5000);

    });

    console.log('✓ DONE');
    await page.waitForSelector("#thankumessage",{visible: true});
    await page.screenshot({ path: 'tenex.png',fullPage: true });
    await browser.close();

})();