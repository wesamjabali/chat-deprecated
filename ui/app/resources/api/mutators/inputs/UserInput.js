export default {
    username: {
        type: DataTypes.string,
        required: true,
        value: null
    },
    email: {
        type: DataTypes.email,
        required: true,
        value: null
    },
    admin: {
        type: DataTypes.boolean,
        required: true,
        value: null
    }
};
