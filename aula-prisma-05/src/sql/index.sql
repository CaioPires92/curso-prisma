	CREATE TABLE "products" (
		"id" SERIAL PRIMARY KEY,
		"label" TEXT UNIQUE NOT NULL,
		"price" INTEGER NOT NULL,
		"description" TEXT NOT NULL,
		"expirationDate" TIMESTAMP NOT NULL,
		"createAt" TIMESTAMP NOT NULL DEFAULT NOW(),
		"eatable" BOOLEAN NOT NULL DEFAULT FALSE
	)