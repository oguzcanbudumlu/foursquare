export default class Stringifier {
    stringify(value) {
        const stringfied = JSON.stringify(value, null, 4);
        return stringfied;
    }
}