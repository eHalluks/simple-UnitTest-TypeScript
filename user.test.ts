import { User } from './user';

describe('User', () => {
    it('should create a new User instance', () => {
        const user = new User('Jan');
        expect(user.name).toEqual('Jan');
    });
});

//npx jest --verbose --testPathPattern=user.test.ts