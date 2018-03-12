module.exports = function() {
    let baseMappings = {
        'C': 'G',
        'G': 'C',
        'A': 'U',
        'T': 'A'
    }

    function convertBase(c){
        let result = baseMappings[c]
        if (!result) {
            throw new Error('Invalid input')
        }
        return result
    }

    return {
        toRna: function(str){
            return str.split('').map(convertBase).join('')
        }
    }
}