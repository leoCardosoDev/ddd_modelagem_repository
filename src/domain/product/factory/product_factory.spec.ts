import ProductFactory from "./product_factory";

describe("Product factory unit test", () => {
  it("Should create a product type A ", () => {
    const product = ProductFactory.create("A", "Product A", 1);
    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product A");
    expect(product.price).toBe(1);
    expect(product.constructor.name).toBe("Product");
  });

  it("Should create a product type B ", () => {
    const product = ProductFactory.create("B", "Product B", 2);
    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product B");
    expect(product.price).toBe(4);
    expect(product.constructor.name).toBe("ProductB");
  });

  it("Should throw an error when Product type not supported ", () => {
    expect(() => ProductFactory.create("C", "Product C", 3)).toThrowError("Product type not supported");
  });
});
