
import abbreviate from "./app.js"
test('abbreviation number thousands', () => {
  expect(abbreviate(1000)).toBe("1K");
  expect(abbreviate(1234,false,1)).toBe("1.2K");
});

test("abbreviate number in millions", () =>{
  expect(abbreviate(1234567,2,2)).toBe("1.23M");
  
});
test("abbreviate number in Billions", () =>{
  expect(abbreviate(1234567890,2,3)).toBe("1.230B");
});
test("abbreviate number in Trillions", () =>{
  expect(abbreviate(1234567890123,false,2)).toBe("1.23T");
  
});
