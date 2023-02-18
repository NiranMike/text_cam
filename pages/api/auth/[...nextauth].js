import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {FirestoreAdapter} from "@next-auth/firebase-adapter"
import { db, app } from "@/firebase";
import * as firestoreFunctions from "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import {useFirebase} from "@/firebase";

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
      db: useFirebase().db,
      ...firestoreFunctions
    }),
    // ...
});
