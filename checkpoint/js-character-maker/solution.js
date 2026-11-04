
function createCurriedCharacterCreator(initialCharacter) {
    let character = { ...initialCharacter }

    function deepMerge(target, source) {
      for (let key in source) {
        if (typeof source[key] === "object" && source[key] !== null && !Array.isArray(source[key])) {
          if (typeof target[key] !== "object" || target[key] === null) {
            target[key] = {};
          }
          deepMerge(target[key], source[key])
        } else {
          target[key] = source[key]
        }
      }
      return target
    }

    function builder(...args) {
      if (args.length == 0) {
        return character
      }

      for (let arg of args) {
        if (typeof arg == "function") {
          character = arg(character)
        } else if (typeof arg === "object" && arg != null) {
          character = deepMerge(character, arg)
        }
      }
      return builder
    }
    return builder
}




const initialChar = {
  name: "Aria",
  stats: {
    strength: 5,
    intelligence: 10,
  },
};

const charBuilder = createCurriedCharacterCreator(initialChar);

const result = charBuilder(
  {
    class: "Wizard",
    stats: { strength: 7, mana: 50 },
    equipment: { weapon: "Staff", robe: "Silk Robe" },
  },
  (char) => {
    const updatedStats = {
      ...char.stats,
      strength: char.stats.strength + 3,
      intelligence: char.stats.intelligence + 2,
    };
    return { ...char, stats: updatedStats };
  },
)();

console.log(result);