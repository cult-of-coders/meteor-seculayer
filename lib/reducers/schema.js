export default function (object) {
    if (object.schema && !(object.schema instanceof SimpleSchema)) {
        object.validate = (new SimpleSchema(object.schema)).validator();
    } else if (object.schema instanceof SimpleSchema) {
        object.validate = object.schema.validator();
    }
}