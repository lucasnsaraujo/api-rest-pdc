import db from '../db/users.js'
import phrases from '../db/phrases.js'
import animals from '../db/animals.js'

class UserRepository {
    findAll() {
        return db;
    }
    findUserById(id) {
        const userIndex = db.findIndex(item => Number(item.id) === Number(id))
        if (userIndex !== -1) {
            return db[userIndex];
        }
        return {error: 'User not found'}
    }
    addUser(data) {
        const { name, sign, plan } = data
        const id = db.length;
        const user = {name, sign, plan, id};
        db.push(user);
        return user;
    }
    removeUserById(id) {
        const idToDelete = db.findIndex(item => Number(item.id) === Number(id))
        if (idToDelete !== -1) {
            db.splice(idToDelete, 1);
        }
        return true;
    }
    updateUserById(id) {
        const indexUserToUpdate = db.findIndex(item => Number(item.id) === Number(id))
        if (indexUserToUpdate !== -1) {
            db[indexUserToUpdate] = updatedUser;
            return updatedUser;
        }
        return {error: 'User not found'}
    }
    getUserHoroscope(id) {
        const userIndex = db.findIndex(item => Number(item.id) === Number(id));

        if (userIndex === -1) return false;

        const user = db[userIndex];

        const {phrase} = phrases.find(phrase => Number(phrase.id) === Number(user.sign));
        let response = {};
        response.phrase = phrase;

        console.log(user)

        if (Number(user.plan) === 2) {
            const {animal} = animals.find(animal => Number(animal.id) === Number(user.sign))
            response.animal = animal;
        } 

        return {...response, name: user.name};
    }
}

export default new UserRepository();