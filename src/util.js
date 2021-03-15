//For adding $ sympol for rate/currency
export default function formatCurrency(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " " ;
}