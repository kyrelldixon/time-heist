import { db } from '../firebase/db'

const tripsDB = db.collection('trips')

export default {
  async getTrips() {
    const querySnapshot = await tripsDB.get()
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  },
  async createTrip(trip) {
    const newTripRef = await tripsDB.add(trip)
    return newTripRef.data()
  },
  async upVoteTrip(id) {
    const tripRef = await tripsDB.doc(id).get()
    let trip = tripRef.data()
    trip.votes++
    await tripsDB.doc(id).set(trip)
  }
}
