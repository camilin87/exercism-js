module.exports = function(){
    function isNumeric(str){
        var alphaNumericStr = str.replace(/\W/g, '')

        var numbersOnly = alphaNumericStr.
                split('').
                filter(c => !isNaN(c)).
                join('')

        return numbersOnly === alphaNumericStr
    }

    function isQuestion(str){
        return str.endsWith('?')
    }

    function stripWhitespace(str){
        return (str || '').
            trim(' ', '').
            trim('\t', '')
    }

    return {
        hey: function(msg) {
            var trimmedMsg = stripWhitespace(msg)

            if (trimmedMsg === ''){
                return 'Fine. Be that way!'
            }

            if (isNumeric(trimmedMsg)){
                if (isQuestion(trimmedMsg)){
                    return 'Sure.'
                }

                if (!trimmedMsg.endsWith('!')){
                    return 'Whatever.'
                }
            }

            if (trimmedMsg.toUpperCase() === trimmedMsg){
                return 'Whoa, chill out!'
            }

            if (isQuestion(trimmedMsg)){
                return 'Sure.'
            }

            return 'Whatever.'
        }
    }
}