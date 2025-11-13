let moves = [
    //10,000,000 Volt Thunderbolt
    {
        "name": "10,000,000 Volt Thunderbolt",
        "type": "grass",
        "category": "special",
        "power": 195,
        "accuracy": "always",
        "pp": 1,
        "prob": null,
        "TM": null,
        "Z-description": "Pikachu-exclusive Z-Move.",
        "effect": "The user, Pikachu wearing a cap, powers up a jolt of electricity using its Z-Power and unleashes it. Critical hits land more easily.",
        "Z-move": true
    },
    //Absorb
    {
        "name": "Absorb",
        "type": "grass",
        "category": "special",
        "power": 20,
        "accuracy": 100,
        "pp": 25,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User recovers half the HP inflicted on opponent.",
        "Z-move": false
    },
    //Accelerock
    {
        "name": "Accelerock",
        "type": "rock",
        "category": "psychical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User attacks first.",
        "Z-move": false
    },
    //Acid
    {
        "name": "Acid",
        "type": "poison",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30,
        "prob": 10,
        "TM": null,
        "Z-description": null,
        "effect": "May lower opponent's Special Defense.",
        "Z-move": false
    },
    //Acid Armor
    {
        "name": "Acid Armor",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": "always",
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Sharply raises user's Defense.",
        "Z-move": false
    },
    //Acid Downpour
    {
        "name": "Acid Downpour",
        "type": "poison",
        "category": null,
        "power": null,
        "accuracy": "always",
        "pp": 1,
        "prob": null,
        "TM": null,
        "Z-description": "Poison type Z-Move.",
        "effect": "The user creates a poisonous swamp using its Z-Power and sinks the target into it at full force. The power varies, depending on the original move.",
        "Z-move": true
    },
    //Acid Spray
    {
        "name": "Acid Spray",
        "type": "poison",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "prob": 100,
        "TM": null,
        "Z-description": null,
        "effect": "Sharply lowers opponent's Special Defense.",
        "Z-move": false
    },
    //Acrobatics
    {
        "name": "Acrobatics",
        "type": "flying",
        "category": "physical",
        "power": 55,
        "accuracy": 100,
        "pp": 15,
        "prob": null,
        "TM": "TM62",
        "Z-description": null,
        "effect": "Stronger when the user does not have a held item.",
        "Z-move": false
    },
    //Acupressure
    {
        "name": "Acupressure",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Sharply raises a random stat.",
        "Z-move": false
    },
    //Aerial Ace
    {
        "name": "Aerial Ace",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": "infinite",
        "pp": 20,
        "prob": null,
        "TM": "TM40",
        "Z-description": null,
        "effect": "Ignores Accuracy and Evasiveness.",
        "Z-move": false
    },
    //Aeroblast
    {
        //critical ratio 1/8 in stead of 1/16
        "name": "Aeroblast",
        "type": "flying",
        "category": "special",
        "power": 100,
        "accuracy": 95,
        "pp": 5,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "High critical hit ratio.",
        "Z-move": false
    },
    //After You
    {
        "name": "After You",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Gives target priority in the next turn.",
        "Z-move": false
    },
    //Agility
    {
        "name": "Agility",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Sharply raises user's Speed.",
        "Z-move": false
    },
    //Air Cutter
    {
        //critical ratio 1/8 in stead of 1/16
        "name": "Air Cutter",
        "type": "flying",
        "category": "special",
        "power": 60,
        "accuracy": 95,
        "pp": 25,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "High critical hit ratio.",
        "Z-move": false
    },
    //Air Slash
    {
        "name": "Air Slash",
        "type": "flying",
        "category": "special",
        "power": 75,
        "accuracy": 95,
        "pp": 20,
        "prob": 30,
        "TM": null,
        "Z-description": null,
        "effect": "May cause flinching.",
        "Z-move": false
    },
    //All-Out Pummeling
    {
        "name": "All-Out Pummeling",
        "type": "fighting",
        "category": null,
        "power": null,
        "accuracy": null,
        "pp": 1,
        "prob": null,
        "TM": null,
        "Z-description": "The user rams an energy orb created by its Z-Power into the target with full force. The power varies, depending on the original move.",
        "effect": "Fighting type Z-Move.",
        "Z-move": true
    },
    //Ally Switch
    {
        "name": "Ally Switch",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User switches with opposite teammate.",
        "Z-move": false
    },
    //Amnesia
    {
        "name": "Amnesia",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Sharply raises user's Special Defense.",
        "Z-move": false
    },
    //Anchor Shot
    {
        "name": "Anchor Shot",
        "type": "steel",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.",
        "Z-move": false
    },
    //Ancient Power
    {
        "name": "Ancient Power",
        "type": "rock",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 5,
        "prob": 10,
        "TM": null,
        "Z-description": null,
        "effect": "May raise all user's stats at once.",
        "Z-move": false
    },
    //Aqua Jet
    {
        "name": "Aqua Jet",
        "type": "water",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User attacks first.",
        "Z-move": false
    },
    //Aqua Ring
    {
        //restores 1/16 of the max HP at the end of each turn
        //if holding big root, restores 30% more HP each turn (approximately 1⁄12 of its max)
        "name": "Aqua Ring",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Restores a little HP each turn.",
        "Z-move": false
    },
    //Aqua Tail
    {
        //no effect, description in stead
        "name": "Aqua Tail",
        "type": "water",
        "category": "physical",
        "power": 90,
        "accuracy": 90,
        "pp": 10,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
        "Z-move": false
    },
    //Arm Thrust
    {
        "name": "Arm Thrust",
        "type": "fighting",
        "category": "physical",
        "power": 15,
        "accuracy": 100,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Hits 2-5 times in one turn.",
        "Z-move": false
    },
    //Aromatherapy
    {
        "name": "Aromatherapy",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Cures all status problems in your party.",
        "Z-move": false
    },
    //Aromatic Mist
    {
        "name": "Aromatic Mist",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Raises Special Defense of allies.",
        "Z-move": false
    },
    //Assist
    {
        "name": "Assist",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User performs a move known by its allies at random.",
        "Z-move": false
    },
    //Assurance
    {
        "name": "Assurance",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Power doubles if opponent already took damage in the same turn.",
        "Z-move": false
    },
    //Astonish
    {
        "name": "Astonish",
        "type": "ghost",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 15,
        "prob": 30,
        "TM": null,
        "Z-description": null,
        "effect": "May cause flinching.",
        "Z-move": false
    },
    //Attack Order
    {
        //critical ratio 1/8 in stead of 1/16
        "name": "Attack Order",
        "type": "bug",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "High critical hit ratio.",
        "Z-move": false
    },
    //Attract
    {
        //if opponent is opposite gender, oppenent has a 50% chance of being immobilized by love each turn and unable to attack
        "name": "Attract",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15,
        "prob": null,
        "TM": "TM45",
        "Z-description": null,
        "effect": "If opponent is the opposite gender, it's less likely to attack.",
        "Z-move": false
    },
    //Aura Sphere
    {
        "name": "Aura Sphere",
        "type": "fighting",
        "category": "special",
        "power": 80,
        "accuracy": "infinite",
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Ignores Accuracy and Evasiveness.",
        "Z-move": false
    },
    //Aurora Beam
    {
        "name": "Aurora Beam",
        "type": "ice",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20,
        "prob": 10,
        "TM": null,
        "Z-description": null,
        "effect": "May lower opponent's Attack.",
        "Z-move": false
    },
    //Aurora Veil
    {
        "name": "Aurora Veil",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "prob": null,
        "TM": "TM70",
        "Z-description": null,
        "effect": "Halves damage from Physical and Special attacks for five turns.",
        "Z-move": false
    },
    //Autotomize
    {
        "name": "Autotomize",
        "type": "steel",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Reduces weight and sharply raises Speed.",
        "Z-move": false
    },
    //Avalanche
    {
        "name": "Avalanche",
        "type": "ice",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Power doubles if user took damage first.",
        "Z-move": false
    },
    //Baby-Doll Eyes
    {
        "name": "Baby-Doll Eyes",
        "type": "fairy",
        "category": "status",
        "power": 0,
        "accuracy": 100,
        "pp": 30,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Always goes first. Lowers the target's attack.",
        "Z-move": false
    },
    //Baddy Bad
    {
        "name": "Baddy Bad",
        "type": "dark",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Reduces damage from Physical attacks.",
        "Z-move": false
    },
    //Baneful Bunker
    {
        "name": "Baneful Bunker",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Protects the user and poisons opponent on contact.",
        "Z-move": false
    },
    //Barrage
    {
        "name": "Barrage",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Hits 2-5 times in one turn.",
        "Z-move": false
    },
    //Barrier
    {
        "name": "Barrier",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Sharply raises user's Defense.",
        "Z-move": false
    },
    //Baton Pass
    {
        "name": "Baton Pass",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User switches out and gives stat changes to the incoming Pokémon.",
        "Z-move": false
    },
    //Beak Blast
    {
        "name": "Beak Blast",
        "type": "flying",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 15,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it's heating up its beak results in a burn.",
        "Z-move": false
    },
    //Beat Up
    {
        "name": "Beat Up",
        "type": "dark",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 30,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Each Pokémon in your party attacks.",
        "Z-move": false
    },
    //Belch
    {
        "name": "Belch",
        "type": "poison",
        "category": "special",
        "power": 120,
        "accuracy": 90,
        "pp": 10,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User must have consumed a Berry.",
        "Z-move": false
    },
    //Belly Drum
    {
        "name": "Belly Drum",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User loses 50% of its max HP, but Attack raises to maximum.",
        "Z-move": false
    },
    //Bestow
    {
        "name": "Bestow",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Gives the user's held item to the target.",
        "Z-move": false
    },
    //Bide
    {
        "name": "Bide",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 10,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "User takes damage for two turns then strikes back double.",
        "Z-move": false
    },
    //Bind
    {
        "name": "Bind",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20,
        "prob": null,
        "TM": null,
        "Z-description": null,
        "effect": "Traps opponent, damaging them for 4-5 turns.",
        "Z-move": false
    },
]