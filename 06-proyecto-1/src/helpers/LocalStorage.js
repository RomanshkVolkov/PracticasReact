export const addToLocalStorage = (key, item) => {
    //get actual elements
    let actualItem = JSON.parse(localStorage.getItem(key));
    //comprobar array
    if (Array.isArray(actualItem)) {
        actualItem.push(item);
    } else {
        actualItem = [item];
    }

    //guardar array
    localStorage.setItem(key, JSON.stringify(actualItem));
    return item;
}

export const getItemToLocalSorage = (key) => {
    const items = JSON.parse(localStorage.getItem(key));
    if (items === null || items === undefined) return null;
    let deleteDuplicates = [];
    items?.map((item, index, items) => {
        if (item.id !== items[(index - 1)]?.id) {
            deleteDuplicates.push(item);
        } else {
            return item
        };
        return item;
    })
    localStorage.setItem(key, JSON.stringify(deleteDuplicates));
    return deleteDuplicates
}

export const getSimpleItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const setSimpleItem = (key, item) => {
    return localStorage.setItem(key, JSON.stringify(item));
}