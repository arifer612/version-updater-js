const search_regex = /(?<=version\s?=\s?\").*(?=\")/g;
const replace_regex = /version\s?=\s?\".*\"/g;

module.exports.readVersion = function (contents) {
    return contents.match(search_regex).toString();
};

module.exports.writeVersion = function (contents, version) {
    return contents.replace(replace_regex, "version = \"" + version + "\"");
};
