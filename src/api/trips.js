import { db } from '../firebase/db'

const tripsDB = db.collection('trips')

export default {
  async getTrips() {
    const querySnapshot = await tripsDB.get()
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  },
  async createTrip(trip) {
    const newTrip = await tripsDB.add(trip)
    return newTrip
  }
}
