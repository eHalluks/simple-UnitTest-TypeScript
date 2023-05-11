{

    @Simple task:

    TODO: 1# correct and complete the code below 

    class User {
    constructor(name) {
    this.name = name;
    }
    }
    
    const json = '{"name":"Jan"}';
    const {name} = JSON.parse(json);
    let user = name === '' ? '' : `User ${name}`;
    
    if (user !== '') {
    user = new User(user);
    }
    
    console.log(user); 
    
    TODO: #2 check how it works 
    TODO: #3 create unit test class User


    Creating unit test process description:
    
    1# create repository {
        
        npm init - y
        npm i -D jest ts-jest
        touch: {
            user.ts
            user.test.ts
            tsconfig.json
            .gitignore
            jest.config.json
        }
        paste:
        jest.config.json - content of the file
        tsconfig.json - content of the file
        .gitignore - node_modules/
        
        Create:
        user.ts - code
        user.test.ts - code

        run npx jest or npm test it depends on "scripts"
    }

}