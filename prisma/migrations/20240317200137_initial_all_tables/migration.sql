/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "invoices" (
    "customer_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "date" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "revenue" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "revenue" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "invoices_customer_id_key" ON "invoices"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "revenue_id_key" ON "revenue"("id");
