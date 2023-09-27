// Handle what changes on the form

/**
 * 
 * @param {*} setState 
 * @returns 
 */
export function handleOnchange(event, state, setState) {
    const {name, value} = event.target;
    setState((prevState) => ({
        ...prevState,
        [name]: value
    }))
}

/**
 * 
 */
export function handleSubmit() {
    return
}