export const formatPrice = price => {
    if (typeof price !== 'number') return price;
    const int = Math.floor(price);
    let decimal = (price - Math.floor(price)).toString().slice(2, 4);
    if (decimal.length === 0) decimal = decimal + '00';
    else if (decimal.length === 1) decimal = decimal + '0';
    return `R$${int},${decimal}`;
};
