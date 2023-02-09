export class ObjectUtilities {
    static removeByValue(object: object, values: any[]): object {
        for (const [key, value] of Object.entries(object)) {
            if (values.includes(value)) {
                delete object[key];
            }
        }

        return object;
    }
}
