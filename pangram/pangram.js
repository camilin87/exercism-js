module.exports = function(input){
    let ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
    let sanitizedInput = (input || '').toLowerCase()

    return {
        isPangram: function(){
            return ALL_LETTERS
                .split('')
                .every(c => sanitizedInput.includes(c))
        }
    }
}