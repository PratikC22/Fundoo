import { logInRequest } from "src/service/userService";

it('returns response object', async () => {
    const userCredentials = {
        email: 'pratikc1020@gmail.com',
        password: '123456'
    }

    const response = await logInRequest(userCredentials);
    expect(response.data.firstName).toEqual('pratik');
})