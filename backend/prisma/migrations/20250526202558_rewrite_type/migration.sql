/*
  Warnings:

  - You are about to drop the column `typeId` on the `Item` table. All the data in the column will be lost.
  - The primary key for the `ItemType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ItemType` table. All the data in the column will be lost.
  - Added the required column `typeName` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_typeId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "typeId",
ADD COLUMN     "typeName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ItemType" DROP CONSTRAINT "ItemType_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ItemType_pkey" PRIMARY KEY ("name");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_typeName_fkey" FOREIGN KEY ("typeName") REFERENCES "ItemType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
