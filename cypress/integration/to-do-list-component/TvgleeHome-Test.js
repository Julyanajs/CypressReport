
import HomeTvglee from '/Users/Juliana/Desktop/CypressReports/cypress/Methods/TvgleeHomePage';

describe('Check new option on Page', () => {
    const page = new HomeTvglee();
    // Check News

    it('Check news', () => {
       page.uncaughtexceptionOff();
       page.homePage();
       page.checkNewLink();
        
    })

    // Check Videos

    it('Check Videos', () => {
       page.uncaughtexceptionOff();
       page.homePage();
       page.checkVideoLink();
             
    })


    // Check Galleries
    it('Check Galerries', () => {
      page.uncaughtexceptionOff();
      page.homePage();
      page.checkGalleriesOption();
                      
    })
})

