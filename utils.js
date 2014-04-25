function getUniqueValues (list, key) {
    var values = _.pluck(list, key);
    var uniqueValues = _.uniq(values);
    return (uniqueValues);
}
