export const useSession = (userContext) => {
    const { user } = useContext(userContext);
    return user;
};
