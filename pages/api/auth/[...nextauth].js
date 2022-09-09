import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  // database:
  //   "mongodb+srv://jashanNextJs:JashanNextJs@cluster0.bjf0dxw.mongodb.net/nextauthDb?retryWrites=true&w=majority",
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: "jadsfgadhf",
  // },
});
