## Seculayer

### License: MIT

### Work in progress.

Sorry for this stupid name, come up with a better one and we'll see.

```js
Meteor.methods({
    'a_method'() {
        // use it like you normally would
    }
    'seculayer_method': {
        // optional, uses SimpleSchema in the background
        schema: {
            postId: {type: String}
        },
        // optional
        firewall(userId, {postId}) {
            // check if userId is owner of postId
        },
        // mandatory
        run({postId}) {
            // run what you need to run.
        }
    }
})

Metehor.methods('seculayer_method2', {
    run,
    firewall,
    schema
})
```

```js
Meteor.call('seculayer_method', {postId: 'XXX'}, callback);
```

```js
Meteor.publish({
    'a_publication'() {
        // use it like you normally would
    }
    'seculayer_publication': {
        schema: {
            postId: {type: String}
        },
        firewall(userId, {postId}) {
            // check if userId is owner of postId
        },
        run({postId}) {
            // run what you need to run.
        }
    }
})

Metehor.publish('seculayer_method2', {
    run,
    firewall,
    schema
})
```


```js
// client-side
Meteor.subscribe('seculayer_publication', {postId: 'XXX'});
```

## Using defaults

If you specify an object as the second argument, you have the ability to override defaults. Warning,
defaults will be overridden. 

Meteor.methods({
    'seculayer_method': {
        run(data) {
            // ...
        }
    }
}, {
    firewall(userId, params) {
        // don't allow for non-admins
    }
})

## Call Sync

You must do your callSync in an async function:

```
const value = Meteor.callSync('name', args)
```

## Call With Latency Compensation

```
const value = Meteor.callLC('name', args)
```

## Each has mixin ability and few interesting plugins

