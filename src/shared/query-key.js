export const furniture_type = (type, subtype) => {
    if (!subtype) return 'furniture' + '-' + type;

    return 'furniture' + '-' + type + '-' + subtype;
}