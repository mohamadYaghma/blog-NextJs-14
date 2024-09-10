
export default function toPersianDigit(n) {
    const farsiDigit = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']
    return n.toString().replace(/\d/g,(x) => farsiDigit[parseInt(x)])
}
