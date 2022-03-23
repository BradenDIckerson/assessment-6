
import { Builder, Capabilities, By } from "selenium-webdriver"
import { idText } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
}) 

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button Displays div with choices.', async () => {
    const drawButton = await (await driver).findElement(By.id('draw'))
    await driver.sleep(3000)

    await drawButton.click()

    await driver.sleep(3000)

    const choicesSection = await driver.findElement(By.id('choices')) 

    const isDisplayed = await choicesSection.isDisplayed();

    expect(isDisplayed).toBe(true)
})

test('add to duo button displays player-id', async () => {
    await driver.navigate().refresh();

    const drawButton = await driver.findElement(By.id('draw'))


    await driver.sleep(3000) 
    
    await drawButton.click()
    
    const addToDuoButtons = await driver.findElements(By.xpath('//button[text()="Add to Duo"]'))[1].click()
    
    await driver.sleep(3000)  
    await addToDuoButtons[1].click() 
    await driver.sleep(3000)


})