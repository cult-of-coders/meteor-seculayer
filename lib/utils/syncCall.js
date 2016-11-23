export default (method, ...args) => {
    return new Promise((resolve, reject) => {
        Meteor.call(method, ...args, (err, res) => {
            if (err) reject('Something went wrong');
            resolve(res);
        });
    });
}