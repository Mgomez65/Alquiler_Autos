-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `dni` INTEGER NOT NULL,
    `telefono` INTEGER NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `userID` INTEGER NOT NULL,
    `licenseId` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_userID_key`(`userID`),
    UNIQUE INDEX `Profile_licenseId_key`(`licenseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Licencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroLicencia` VARCHAR(191) NOT NULL,
    `tipoLicencia` VARCHAR(191) NOT NULL,
    `fechaEmision` DATETIME(3) NOT NULL,
    `fechaExpiracion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_licenseId_fkey` FOREIGN KEY (`licenseId`) REFERENCES `Licencia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
