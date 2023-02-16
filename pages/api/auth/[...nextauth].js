import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {FirestoreAdapter} from "@next-auth/firebase-adapter"
import { db } from "@/firebase.config";
import {cert} from "firebase-admin/app"
import * as firestoreFunctions from "firebase/firestore"
export default NextAuth({ 
    providers: [
        GoogleProvider(
          {
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }
        ),
    ],
    adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    })
  }),
    // ...
});
