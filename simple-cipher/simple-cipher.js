module.exports = function (key = 'pepepepepe') {
    let A_VALUE = 'a'.charCodeAt(0)
    let Z_VALUE = 'z'.charCodeAt(0)

    validateKey(key)

    function validateKey(key) {
        if (key === '') {
            throw new Error('Bad key')
        }

        let firstInvalidIndex = key
            .split('')
            .map(s => s.charCodeAt(0))
            .findIndex(c => c < A_VALUE || c > Z_VALUE)

        if (firstInvalidIndex >= 0){
            throw new Error('Bad key')
        }
    }

    function offset(index){
        let keyIndex = index % key.length
        return key.charCodeAt(keyIndex) - A_VALUE
    }

    function wrap(value){
        if (value > Z_VALUE){
            return (value - Z_VALUE - 1) + A_VALUE
        }

        if (value < A_VALUE){
            return Z_VALUE - (A_VALUE - value - 1)
        }

        return value
    }

    function charFrom(value){
        let updatedValue = wrap(value)
        return String.fromCharCode(updatedValue)
    }

    function transform(str, f){
        return str
            .split('')
            .map((c, i) => f(i))
            .join('')
    }

    return {
        key: key,
        encode: function(str){
            return transform(str, index => charFrom(str.charCodeAt(index) + offset(index)))
        },
        decode: function(str){
            return transform(str, index => charFrom(str.charCodeAt(index) - offset(index)))
        }
    }
}