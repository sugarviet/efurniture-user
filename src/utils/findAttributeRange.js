export default function findAttributeRange(attributes) {
    const maxValues = {};
    const minValues = {};

    attributes.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            if (
                !(key in maxValues) ||
                value.value >
                maxValues[key].val
            ) {
                maxValues[key] = { val: value.value, unit: value.unit };
            }

            if (
                !(key in minValues) ||
                value.value <=
                minValues[key].val
            ) {
                minValues[key] = { val: value.value, unit: value.unit };
            }
        });
    });

    return [{ ...minValues }, { ...maxValues }];
}