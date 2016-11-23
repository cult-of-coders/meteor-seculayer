export default function (builders) {
    let result = {};
    _.each(builders, (value, key) => {
        result[key] = value;

        if (value.firewall) {
            result[key].firewall = value.firewall.toString();
        }
        if (value.run) {
            result[key].run = value.run.toString();
        }
    })
}