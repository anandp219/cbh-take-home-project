const crypto = require("crypto");

const { deterministicPartitionKey, getHashForString, MAX_PARTITION_KEY_LENGTH } = require("./dpk");

describe("Test deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal 'abc' when string partitionKey is provided", () => {
    const finalKey = deterministicPartitionKey({partitionKey: 'abc'});
    expect(finalKey).toBe("abc");
  });

  it("Returns the literal '3' when integer 3 is provided as partitionKey", () => {
    const finalKey = deterministicPartitionKey({partitionKey: 3});
    expect(finalKey).toBe("3");
  });

  it("Returns the key of length 128 when a string of length > 256 is provided", () => {
  	const key = "abcdefghijklmnopqrstuvwyzabcdefghijklmnopqrstuvwyzabcd\
  	             efghijklmnopqrstuvwyzabcdefghijklmnopqrstuvwyzabcdefgh\
  	             ijklmnopqrstuvwyzabcdefghijklmnopqrstuvwyzabcdefghijkl\
  	             mnopqrstuvwyzabcdefghijklmnopqrstuvwyzabcdefghijklmnopq\
  	             rstuvwyzabcdefghijklmnopqrstuvwyz";
    const finalKey = deterministicPartitionKey({partitionKey: key});
    expect(finalKey.length).toBe(MAX_PARTITION_KEY_LENGTH/2);
  });

  it("Returns the hash when an empty event object is provided", () => {
    const finalKey = deterministicPartitionKey({});
    expect(finalKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify({})).digest("hex"));
  });
});

describe("Test getHashForString", () => {
  it("Returns the sha hash for 'test' string", () => {
    const hashedKey = getHashForString('test');
    expect(hashedKey).toBe(crypto.createHash("sha3-512").update('test').digest("hex"));
  });
});
