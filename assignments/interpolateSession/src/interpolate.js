const interpolate = (value, session = {}, options = {}) => {
    const { leftDelimiter, rightDelimiter } = options
    if (!leftDelimiter || !rightDelimiter) return value;
    
    let re = new RegExp(`\\${leftDelimiter}(.*?)${rightDelimiter}`, 'g'); // it creates a regex group that starts with left delimiter and finishes with right delimiter
    let match;

    while(match = re.exec(value)) { // it continues while any match has found in the value between delimiters
        value = value.replace(match[0], session[match[1]] ?? ""); // it changes the keywords coverd by delimiters with session variable & if no session variable then change with empty string
        re.lastIndex = 0; // it set index 0 to find multiple matches
    }

    return value;
};

module.exports = { interpolate }