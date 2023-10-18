/*
  Warnings:

  - Added the required column `order` to the `Navigation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Navigation" ADD COLUMN     "order" INTEGER NOT NULL;
