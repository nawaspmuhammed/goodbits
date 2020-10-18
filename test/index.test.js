const chai = require("chai");

const expect = chai.expect;
const faker = require("faker");

describe("UserRepository", function() {
    const stubValue = {
        empId: faker.name.findName(),
        empName: faker.name.findName(),
        empDept: faker.name.findName(),

    };
    describe("create", function() {
        it("should add a new employee to the db", async function() {
            const stub = sinon.stub(UserModel, "create").returns(stubValue);
            const part = new Part();
            const employee = await part.create(stubValue.empId, stubValue.empName, stubValue.empDept);
            expect(stub.calledOnce).to.be.true;
            expect(employee.empId).to.equal(stubValue.empId);
            expect(employee.empName).to.equal(stubValue.empName);
            expect(employee.empDept).to.equal(stubValue.empDept);

        });
    });
});

describe("Page not found condition", function() {

    // #1 should return home page

    it("should return 404", function(done) {
        server
            .get("/random")
            .expect(404)
            .end(function(err, res) {
                res.status.should.equal(404);
                done();
            });
    })
});