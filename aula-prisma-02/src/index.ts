import prisma from "./database/database";

  async function find() {
    const result = await prisma.posts.findMany()

  console.log(result);
  
}


// (async () => {

//   const result = await db.query(`
//     SELECT * FROM posts
//   `);

//   const posts = result.rows;
//   console.log("Posts encontrados no banco:", posts);
// })();