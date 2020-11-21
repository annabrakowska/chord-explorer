const createConfig = (passedInputs, passedButtons, inputHandlers, buttonHandlers) => {

    const inputs = passedInputs.map((el, index) => {
        el.handler = inputHandlers[index]
        return el
    })
    console.log("WTF", inputs)
    const buttons = passedButtons.map((el, index) => {
        el.handler = buttonHandlers[index]
        return el
    })

    return { inputs, buttons }
}

export default createConfig