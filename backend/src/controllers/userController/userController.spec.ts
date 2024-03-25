import prismaMock from '../../database/mock';
import UserController from './index';

const userController = new UserController(prismaMock);

describe ('get - /users', () => {
  it ('should return all users', async () => {
    const users = await userController.getAll()
    expect(users.length).toEqual(1);
    expect(users[0].id).toEqual("12345");
    expect(users[0].username).toEqual("John Doe");
    expect(users[0].createdAt).toBeInstanceOf(Date);
    expect(users[0].updatedAt).toBeInstanceOf(Date);
    expect(users[0].today).toEqual('');
    expect(users[0].memory).toEqual([]);
  });
}) 

describe ('get - /users/:id', () => {
  it ('should return user', async () => {
    const user = await userController.get('12345')
    expect(user?.id).toEqual('12345');
    expect(user?.username).toEqual('John Doe');
    expect(user?.createdAt).toBeInstanceOf(Date);
    expect(user?.updatedAt).toBeInstanceOf(Date);
    expect(user?.today).toEqual('');
    expect(user?.memory).toEqual([]);
  });

  it ('should return null if user is not found', async () => {
    const user = await userController.get('54321')
    expect(user).toBeNull();
  });

  it ('should throw an error if id is not provided', async () => {
    try {
      await userController.get('')
    } catch (error) {
      expect(error).toEqual(new Error('User ID is required'))
    }
  });
}) 

describe ('post - /users', () => {
  it ('should create a user', async () => {
    const user = await userController.post('Doe John')
    expect(user.username).toEqual('Doe John')
    expect(user.id).toEqual('54321')
  });

  it ('should throw an error if username is not provided', async () => {
    try {
      await userController.post('')
    } catch (error) {
      expect(error).toEqual(new Error('Username is required'))
    }
  });
})

describe ('put - /users/:id', () => {
  it ('should update a user', async () => {
    const user = await userController.get('12345')
    expect(user?.username).toEqual('John Doe')

    await userController.put('12345', 'JaneDoe')
    expect(user?.id).toEqual('12345')
    expect(user?.username).toEqual('JaneDoe')
  });

  it ('should throw an error if id is not provided', async () => {
    try {
      await userController.put('', 'Jane Doe')
    } catch (error) {
      expect(error).toEqual(new Error('User ID is required'))
    }
  });

  it ('should throw an error if username is not provided', async () => {
    try {
      await userController
    } catch (error) {
      expect(error).toEqual(new Error('Username is required'))
    }
  });
})

describe ('delete - /users/:id', () => {
  it ('should delete a user', async () => {
    const user = await userController.delete('12345')
    expect(user?.id).toEqual('12345')
    expect(user?.username).toEqual('JaneDoe')
  });

  it ('should throw an error if id is not provided', async () => {
    try {
      await userController.delete('')
    } catch (error) {
      expect(error).toEqual(new Error('User ID is required'))
    }
  });
})