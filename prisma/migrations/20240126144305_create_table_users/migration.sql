-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(20) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,
    `role` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;
