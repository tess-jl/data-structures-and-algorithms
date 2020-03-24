const { multiBracketValidation } = require('./multi-bracket-validation.js');
  
describe('testing the multi bracket validation function', () => {
  it('should validate based on brackets in the input string and return true if all brackets are accounted for', () => {

    expect(multiBracketValidation('{}')).toEqual(true);
    expect(multiBracketValidation('{}(){}')).toEqual(true); 
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
  });

  it('should validate based on brackets in the input string and return true if all brackets are accounted for', () => {

    expect(multiBracketValidation('[({}]')).toEqual(false);
    expect(multiBracketValidation('(](')).toEqual(false);
    expect(multiBracketValidation('{(})')).toEqual(false);
    expect(multiBracketValidation('{')).toEqual(false);
    expect(multiBracketValidation(')')).toEqual(false);
    expect(multiBracketValidation('[}')).toEqual(false);
  });
}); 
