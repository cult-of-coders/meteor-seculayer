export default function (name, ...args) {
    return Meteor.apply(name, [...args], {
        returnStubValue: true,
        throwStubExceptions: true,
    })
}
