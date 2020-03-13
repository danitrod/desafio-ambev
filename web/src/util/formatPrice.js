export const formatPrice = price => {
    if (typeof price !== 'number') return price;
    let int = Math.floor(price),
        formattedInt = '',
        part;
    while (int / 1000 > 1) {
        part = int.toString();
        part = part.slice(part.length - 3, part.length);
        formattedInt = '.' + part + formattedInt;
        int = Math.floor(int / 1000);
    }
    formattedInt = int.toString() + formattedInt;
    let decimal = (price - Math.floor(price)).toString().slice(2, 4);
    if (decimal.length === 0) decimal = decimal + '00';
    else if (decimal.length === 1) decimal = decimal + '0';
    return `R$${formattedInt},${decimal}`;
};
