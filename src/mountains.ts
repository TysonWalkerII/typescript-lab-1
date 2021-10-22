import { Mountain } from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  let tallestMountain: Mountain = mountains[0];
  if (mountains.length > 0) {
    mountains.forEach((item) => {
      if (item.height > tallestMountain.height) {
        tallestMountain = item;
      }
    });
  } else {
    return "";
  }

  return tallestMountain.name;
};

console.log(findNameOfTallestMountain([]));
