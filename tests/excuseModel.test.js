const  Excuse  = require('../models/excuse.model')
const { connectDB, disconnectDB } = require("../config/db");

const dotenv = require("dotenv");
dotenv.config();

describe('Testing props Excuse model validations', () => {
    it("Should return 'Excuse value is required' error when value is missing", () => {
        const invalidExcuse = new Excuse({ category: "network" });  
        const error = invalidExcuse.validateSync();
        expect(error.errors['value']).toBeDefined()
        expect(error.errors['value'].message).toBe('Excuse value is required')
        
    })
    
    it("Should return 'Excuse category is required' error when category is missing", () => {
        const invalidExcuse = new Excuse({ value: "Excuse example test" });  
        const error = invalidExcuse.validateSync();
        expect(error.errors['category']).toBeDefined(); 
        expect(error.errors['category'].message).toBe('Excuse category is required'); 
    })
    
    it("Should return 'is not a valid enum' error when category is invalid", () => {
        const invalidExcuse = new Excuse({ value: "Excuse example test", category: "categoría de prueba"  });  
        const error = invalidExcuse.validateSync();
        expect(error.errors['category']).toBeDefined(); 
        expect(error.errors['category'].message).toBe('`categoría de prueba` is not a valid enum value for path `category`.'); 
    })
    
    it("Should return 'Excuse bsLevel is required' error when bsLevel is missing", () => {
        const invalidExcuse = new Excuse({ value: "Excuse example test", category: "bug"  });  
        const error = invalidExcuse.validateSync();
        expect(error.errors['bsLevel']).toBeDefined(); 
        expect(error.errors['bsLevel'].message).toBe('Excuse bsLevel is required'); 
    })
    
    it("Should return an error when bsLevel is not an integer between 1 and 100", () => {
        const invalidExcuse = new Excuse({ value: "Excuse example test", category: "bug", bsLevel: -1  });  
        const error = invalidExcuse.validateSync();
        expect(error.errors['bsLevel']).toBeDefined(); 
        expect(error.errors['bsLevel'].message).toBe('Path `bsLevel` (-1) is less than minimum allowed value (1).'); 
    })
})

describe('Testing create an Excuse document correctly', () => {
    beforeAll(async () => {
        await connectDB(); // Conecta a la base de datos antes de todos los tests
    });
    
    afterAll(async () => {
        await disconnectDB(); // Desconecta la base de datos después de todos los tests
    });
    
    it("Should save the document and return 'Document has been saved' when all the required props are in the document", async () => {
        const validExcuse = new Excuse({ 
            value: "Git says it's committed, but we all know it’s not that serious.",
            category: "git",
            bsLevel: 88
        })
        const savedExcuse = await validExcuse.save()
        expect(savedExcuse).toBeDefined;
        expect(savedExcuse.value).toBe("Git says it's committed, but we all know it’s not that serious.");
        expect(savedExcuse.category).toBe("git");
        expect(savedExcuse.bsLevel).toBe(88);
    })
})
