import { _ } from 'meteor/underscore';
import deepClone from './lib/deepClone';

export default function extractCollectionDocumentation() {
    const collections = Mongo.Collection.getAll();
    let DocumentationObject = {};

    _.each(collections, ({name, instance}) => {
        if (name.substr(0, 7) == 'meteor_') {
            return;
        }

        extractSchema(DocumentationObject[name], instance);
    });

    return DocumentationObject;
}
