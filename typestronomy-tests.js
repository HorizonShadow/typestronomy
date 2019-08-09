// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by typestronomy.js.
import { name as packageName } from "meteor/cereal:typestronomy";

// Write your tests here!
// Here is an example.
Tinytest.add('typestronomy - example', function (test) {
  test.equal(packageName, "typestronomy");
});
