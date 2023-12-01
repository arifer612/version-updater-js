const search_regex = /(?<=;; Version: )[\d.]+/g;
const replace_regex = /;; Version: [\d.]+/g;


module.exports.readVersion = function (contents) {
    return contents.match(search_regex).toString();
};

module.exports.writeVersion = function (contents, version) {
    return contents.replace(replace_regex, ";; Version: " + version);
};
