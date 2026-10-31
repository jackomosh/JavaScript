
function createCurriedCharacterCreator(initialCharacter) {
    let character = [...initialCharacter];

    function builder(...updates) {

        if (updates.length === 0) {
            return character;
        }

        for (const update of updates) {

            if (typeof updates === "function") {
                character = update(character)
            }
        }
    }
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