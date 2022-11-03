describe('Main Page',()=>{
    it('Verify List items', async ()=>{
        await browser.url('/');

        const listExamples =$$("ul li");// its a selector to find single element if you want to find dall elements use $$ 
        await expect(listExamples).toBeElementsArrayOfSize({gte:1});
    })
})