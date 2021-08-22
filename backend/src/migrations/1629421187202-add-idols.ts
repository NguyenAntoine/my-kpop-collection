import { Idol } from '../idols/schemas/idol.schema';
import * as idols from '../../../database/kpop_idols.json';

import { getDb } from '../migrations-utils/db';

export const up = async () => {
  const db = await getDb();
  for (const idol of idols) {
    const newIdol = new Idol();
    newIdol.fullName = idol.fullName;
    newIdol.koreanName = idol.koreanName;
    newIdol.stageName = idol.stageName;
    newIdol.koreanStageName = idol.koreanStageName;
    newIdol.gender = idol.gender;

    const dateParts = idol.dateOfBirth.split('/');
    newIdol.dateOfBirth = new Date(
      +dateParts[2],
      +dateParts[1] - 1,
      +dateParts[0],
    );

    if (newIdol) {
      const addedIdol = await db.collection('idols').insertOne(newIdol);

      const band = await db.collection('bands').findOne({ name: idol.group });

      if (band) {
        await db
          .collection('idols')
          .updateOne(
            { _id: addedIdol.insertedId },
            { $push: { bands: band._id } },
            { new: true, useFindAndModify: false },
          );
      }

      await db
        .collection('bands')
        .updateOne(
          { name: idol.group },
          { $push: { idols: addedIdol.insertedId } },
          { new: true, useFindAndModify: false },
        );
    }
  }
};

export const down = async () => {
  const db = await getDb();
  await db.collection('idols').deleteMany();
};
