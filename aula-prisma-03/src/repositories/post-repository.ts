import { Post } from "@prisma/client";
import prisma from "../database/database";

// const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {

  return await prisma.post.findMany()
 

}

async function getPost(id: number) {
 return await prisma.post.findFirst({
    where: {id}
  }) 

}

async function createPost(post: CreatePost) {
 
  await prisma.post.create({
    data: post
  })

}

async function deletePost(id: number) {
  return prisma.post.delete({
    where: {id}
  })  
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;