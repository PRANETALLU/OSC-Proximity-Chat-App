// import { doc, getDoc, deleteDoc} from '@firebase/firestore'
// import { users } from '../utilities/firebaseInit'

// export const deleteUserById = async (userId: string) => {
//   const userRef = doc(users, userId)

//   // The promise returned by deleteDoc will be fulfilled (aka return 'true') both if the document requested for deletion exists or doesn't exist. It is rejected if the program is unable to send this request to Firestore.
//   // Therefore, we need to check to see if the document exists first, to most accurately know if it will be deleted.
//   // However, technically, there could be some kind of failure by deleteDoc after this check is performed, where the status of the deletion would then be inaccurately returned.
//   // TODO: find a way to assuredly know if a document is deleted after deleteDoc is called.

//   const userDoc = await getDoc(userRef)
//   // Do not attempt to delete the requested doc if it does not exist.
//   if (!userDoc.exists()) {
//       return false
//   }

//   const deletionStatus = await deleteDoc(userRef)
//     .then(
//         // .then()'s first parameter runs on success, and the second runs when there is an error
//         () => { 
//             return true
//         },
//         () => { 
//             return false
//         }
//     )

//   return deletionStatus
// }

