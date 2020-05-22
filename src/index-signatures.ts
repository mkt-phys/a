export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: number | string | boolean;
}
// let profile: { name?: string } = {};
// let profile: { [index: string]: string | number } = {};

let profile: Profile = { name: "tintin", underTwenty: false };

// How to write index signatures
// { [ index:typeForIndex ]:typeForValue }

profile.name = "makito";
profile.age = 26;
profile.nationality = "Japan";

console.log({ profile });
