export default function findAttributeRange(attributes) {
    const maxValues = {};
    const minValues = {};

    attributes.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            if (
                !(key in maxValues) ||
                parseInt(value.match(/\d+/)[0]) >
                parseInt(maxValues[key].match(/\d+/)[0])
            ) {
                const [valStr, unit] = (value + "").split(" ")
                const val = parseInt(valStr)
                maxValues[key] = { val, unit };
            }

            if (
                !(key in minValues) ||
                parseInt(value.match(/\d+/)[0]) <
                parseInt(minValues[key].match(/\d+/)[0])
            ) {
                const [valStr, unit] = (value + "").split(" ")
                const val = parseInt(valStr)
                minValues[key] = { val, unit };
            }
        });
    });

    return [{ ...minValues }, { ...maxValues }];
}