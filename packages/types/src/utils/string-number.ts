export function setNameValue (name: string, value: number) {
    const NameValue = Object.freeze({name,value});
    return {
        value: () => { return NameValue.value},
        toString: () => { return NameValue.name}
    };
}