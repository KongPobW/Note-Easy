export const getCurrentDate = () => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
};