export default function extractSchema(storage, collection) {
    storage.schema = {};

    if (collection.simpleSchema && collection.simpleSchema()) {
        storage.schema = deepClone(collection.simpleSchema()._schema);

        formatSchemaType(storage.schema);
    }
}

function formatSchemaType(schema) {
    _.each(schema, (value, key) => {
        if (value.type && value.type.name) {
            value.type = value.type.name;
        }
    });

    return schema;
}