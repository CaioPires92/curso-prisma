import prisma from "../database/database";
import { Product } from "@prisma/client";

type createProduct = Omit<Product, "id">


async function getProducts() {
  const products = await prisma.product.findMany()
  return products
}

async function getProduct(id: number) {
  // TODO
}

async function createProduct(product) {
  // TODO
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;