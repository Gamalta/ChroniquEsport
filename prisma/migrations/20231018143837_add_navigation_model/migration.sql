-- CreateEnum
CREATE TYPE "NavigationType" AS ENUM ('SECTION', 'GROUP', 'STATIC');

-- DropIndex
DROP INDEX "Post_id_key";

-- DropIndex
DROP INDEX "Section_id_key";

-- DropIndex
DROP INDEX "User_id_key";

-- CreateTable
CREATE TABLE "Navigation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "NavigationType" NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Navigation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Navigation_path_key" ON "Navigation"("path");
