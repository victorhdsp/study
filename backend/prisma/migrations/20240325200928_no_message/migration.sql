/*
  Warnings:

  - You are about to drop the `message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "memory" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "today" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "message";
