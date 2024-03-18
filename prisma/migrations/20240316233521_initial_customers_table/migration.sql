-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image_url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_id_key" ON "customers"("id");
