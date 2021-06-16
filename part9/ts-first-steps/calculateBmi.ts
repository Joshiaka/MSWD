export const calculateBmi = (height: number, weight: number): string => {
  const b = weight / (height / 100) ** 2;

  if (b < 15) return "Very severely underweight";
  if (b >= 15 && b < 16) return "Severely underweight";
  if (b >= 16 && b < 18.5) return "Underweight";
  if (b >= 18.5 && b< 25) return "Normal (healthy weight)";
  if (b >= 25 && b < 30) return "Overweight";
  if (b >= 30 && b < 35) return "Obese Class I (Moderately obese)";
  if (b >= 35 && b < 40) return "Obese Class II (Severely obese)";
  if (b >= 40) return "Obese Class III (Very severely obese)";

  return "unknown";
};

interface ParsedBmiArgs {
  height: number;
  weight: number;
}

const parseArguments = (args: Array<string>): ParsedBmiArgs => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const isCalledDirectly = require.main === module;

if (isCalledDirectly) {
  try {
    const { height, weight } = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
  } catch (e) {
    console.log("An error has occured: ", e.message);
    console.log("USAGE: npm run calculateBmi height(cm) weight(kg)");
  }
}
