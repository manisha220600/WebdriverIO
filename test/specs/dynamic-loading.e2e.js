describe('Dynamic loading Page',  ()=>{
    it('wait for the hidden element to show',async ()=>{
        const btnStart =await $("#start button");
        const elLoading =$("#loading");
        
        await browser.url('/dynamic_loading/1');

        await btnStart.click();

        const textFinish = await $("#finish > h4");
        elLoading.waitForDisplayed();
        elLoading.waitForDisplayed({reverse: true});
        
        expect(await textFinish.getHTML()).toEqual("<h4>Hello World!</h4>");
    })
})