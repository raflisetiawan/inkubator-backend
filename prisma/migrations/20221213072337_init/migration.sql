-- CreateTable
CREATE TABLE `Incubator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `suhu` FLOAT NOT NULL,
    `kelembapan` FLOAT NOT NULL,
    `ipAddress` VARCHAR(255) NOT NULL,
    `kipas` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
