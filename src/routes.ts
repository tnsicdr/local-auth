import UserController from './controllers/user';

const getRoutes = () => {
    return [
        new UserController()
    ];
};

export default getRoutes;