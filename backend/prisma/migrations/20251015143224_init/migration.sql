/*
  Warnings:

  - You are about to drop the column `typeName` on the `Item` table. All the data in the column will be lost.
  - Added the required column `idItemType` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_typeName_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "typeName",
ADD COLUMN     "idItemType" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_idItemType_fkey" FOREIGN KEY ("idItemType") REFERENCES "ItemType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
