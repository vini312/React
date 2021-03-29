//Function to avoid repetition of the find function for the shallowWrapper
// returns array of nodes found for the given data-test attibute
export const findByTestAttr = (wrapper, value) => {
    wrapper.find(`[data-test='${value}']`);
}