import UserRepository from '../repositories/UserRepository.js'

class UserController {
    index(req, res) {
        const users = UserRepository.findAll();
        return res.status(200).json(users);
    }
    show(req, res) {
        const { id } = req.params;
        const user = UserRepository.findUserById(id);
        return user?.name ? res.status(200).json(user) : res.status(404).json({ error: 'User not found'})
    }
    store(req, res) {
        const {
            name, plan, sign
          } = req.body;

        if (!name || !plan || !sign)
          return res.status(400).json({error: 'Invalid body'})

        const user = { name, plan, sign };
        const data = UserRepository.addUser(user);

        return res.status(200).json(data)
    }
    update(req, res) {
        const { id } = req.params;

        const user = UserRepository.updateUserById(id);

        return user?.name ? res.status(200).json(user) : res.status(404).json({ error: 'User not found'})
    }
    delete(req, res) {
        const { id } = req.params;

        UserRepository.removeUserById(id);

        return res.status(200);
    }
    findHoroscope(req, res) {
        const { user_id } = req.params;

        const data = UserRepository.getUserHoroscope(user_id);

        return data?.phrase ? res.status(200).json(data) : res.status(400).json({'error': "User not found"})
    }

}

export default new UserController();