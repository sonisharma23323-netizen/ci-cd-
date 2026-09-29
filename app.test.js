const sayHello = require("./app");
test('should return Hello , World!',()=>{
    expect(sayHello()).toBe("Hello , World!")
})