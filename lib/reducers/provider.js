/**
 * @param object
 */
export default function (object) => {
    if (object.providers) {
        object.providers.forEach(provider => {
            provider.call(this, ...args)
        })
    }
}
/*
providers: [
    ({postId}) => {
        this.post = Posts.findOne(postId);
    }
]
*/
