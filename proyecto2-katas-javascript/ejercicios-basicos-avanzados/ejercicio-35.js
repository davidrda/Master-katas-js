const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    for (const mutant of mutants) {
        if (mutant.power === power) {
            return mutant;
        }
    }
    return null;
}

const result = findMutantByPower(mutants, 'magnetism');

if (result === null) {
    console.log("Poder no encontrado");
} else {
    console.log(`Poder encontrado en: ${result.name}`);
}