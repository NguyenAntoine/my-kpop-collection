import { Band } from '../bands/schemas/band.schema';
import * as boysBands from '../../../database/kpop_idols_boy_groups.json';
import * as girlsBands from '../../../database/kpop_idols_girl_groups.json';

import { getDb } from '../migrations-utils/db';

async function createBand(db, bands) {
  for (const band of bands) {
    const newBand = new Band();
    newBand.name = band.name;
    newBand.koreanName = band.koreanName;
    newBand.company = band.company;
    newBand.stillActive = band.active;

    const dateParts = band.dateOfDebut.split('/');
    newBand.dateOfDebut = new Date(
      +dateParts[2],
      +dateParts[1] - 1,
      +dateParts[0],
    );

    if (newBand) {
      await db.collection('bands').insertOne(newBand);
    }
  }
}

export const up = async () => {
  const db = await getDb();
  await createBand(db, boysBands);
  await createBand(db, girlsBands);
};

export const down = async () => {
  const db = await getDb();
  await db.collection('bands').deleteMany();
};
