
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
    let drawButton = await (await driver).findElement(By.xpath('//section/div')).getText()
    expect(drawButton).toBe("choices")
})

test('add to duo button displays player-id', async () => {
    let addToDuo = await (await driver).findElement(By.xpath(''))
})