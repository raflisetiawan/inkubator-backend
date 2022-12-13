/*
  Warnings:

  - You are about to drop the column `kelembapan` on the `incubator` table. All the data in the column will be lost.
  - You are about to drop the column `kipas` on the `incubator` table. All the data in the column will be lost.
  - You are about to drop the column `suhu` on the `incubator` table. All the data in the column will be lost.
  - Added the required column `humidity` to the `Incubator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isFan` to the `Incubator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `Incubator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `incubator` DROP COLUMN `kelembapan`,
    DROP COLUMN `kipas`,
    DROP COLUMN `suhu`,
    ADD COLUMN `humidity` FLOAT NOT NULL,
    ADD COLUMN `isFan` BOOLEAN NOT NULL,
    ADD COLUMN `temperature` FLOAT NOT NULL;
