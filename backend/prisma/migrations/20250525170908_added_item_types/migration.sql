/*
  Warnings:

  - You are about to drop the column `type` on the `Item` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "type",
ADD COLUMN     "typeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ItemType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ItemType_name_key" ON "ItemType"("name");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ItemType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
