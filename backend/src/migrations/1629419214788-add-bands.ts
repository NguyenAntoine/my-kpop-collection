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

    const dateParts = band.dateOfDebut.split('/');
    newBand.dateOfDebut = new Date(
      +dateParts[2],
      +dateParts[1] - 1,
      +dateParts[0],
    );
    newBand.active = band.active;
    if (newBand) {
      await db.collection('Band').insertOne(newBand);
    }
  }
}

export const up = async () => {
  const db = await getDb();
  await createBand(db, boysBands);
  await createBand(db, girlsBands);
};

async function deleteBand(db, bands) {
  for (const band of bands) {
    await db.collection('Band').deleteOne({ name: band.name });
  }
}

export const down = async () => {
  const db = await getDb();
  await deleteBand(db, girlsBands);
  await deleteBand(db, boysBands);
};